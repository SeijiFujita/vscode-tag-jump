'use strict';

import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {
    console.log('#--Congratulations, your extension "vscode-TagJump" is now active!');
    let disposable = vscode.commands.registerCommand('extension.tagJump', () => {
        let t = new tagController(); 
        t.tag_Jump();
        context.subscriptions.push(disposable);
    });
}
// this method is called when your extension is deactivated
export function deactivate() {
}

//-------------------------------------------------------------------

export class tagController {
  private quiet: boolean;
  
  constructor() {
    console.log('this.workSpacePath: ', vscode.workspace.rootPath);
    console.log('activePath: ' , path.dirname(vscode.window.activeTextEditor.document.fileName));

    const config = vscode.workspace.getConfiguration('tagjump');
    this.quiet = config.get('quiet', false);
 
  }

/*
  //
  private tagParcer(tagLine: string) : string {
    let result: string = null;
    if (tagLine != null && tagLine.length >= 3) { // filename minimam size = 3 // a:1

      let result = tagLine.split(' ');

      // result: /<filename>:<linenum><space>/
      return result[0];
    }
  }
*/
  // Perform tag-jump.
  // Search the block of <filename>:<line-number><space> and do a tag-jump
  // You can open the file even if you failed to get <line-number>
  public tag_Jump(): void {
      // Get the line indicated by the editor's caret
      const tagLine: string = this.getLine();
      
      if (tagLine != null && tagLine.length >= 1) { // Minimum filename, size = 1 // a:1, /a, a
        
        // Format to file name and line-number
        // <space or tab><filename>:<line-number><space><any strings...>
        const line1 = tagLine.replace(/^[ \t]/, '').split(' ');
        // <filename>:<line-number>
        const line2 = line1[0].split(':'); 
        const fileName: string = line2[0];
        const flineNum: string = line2[1];
        //
        console.log('fileName: ', fileName);
        console.log('fLineNum: ', flineNum);
        
        // Specify filename and open editor
        this.openFile(fileName, Number(flineNum));
    }
  }

  // Get the editor's line, it is a string with cursor/Caret.
  private getLine() : string {
    //
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
        return "";
    }
    // make selection
    const position = editor.selection.active;
    const stPos = position.with(position.line, 0);
    const edPos = position.with(position.line + 1, 0);
    const newSelection = new vscode.Selection(stPos, edPos);
    //const newSelection = new vscode.Selection(
    //        position.with(position.line, 0),
    //        position.with(position.line + 1, 0));
    //
    const textLine = editor.document.getText(newSelection);
    console.log('getline: ', textLine);
    console.log('getline.length: ', textLine.length);
    return textLine.trim();
  }
  //
  private getFullPath(fileName: string): string {
    const win32: boolean = process.platform === 'win32';
    const pathSeparator: string = win32 ? '\\' : '/';
    const basePath: string  = path.dirname(vscode.window.activeTextEditor.document.fileName);
    console.log('basePath: ', basePath);
    let tagPath: string; 
    //
    function homedir(): string {
      return process.env['HOME'];
    }
    // check HOME
    if (fileName.indexOf('~') === 0) {
      tagPath = homedir() + pathSeparator + fileName.substr(1);
    // check full path directory
    } else if (fileName.indexOf('/') === 0) {
      tagPath = win32 ? fileName.substr(1) : fileName;
    // Untitled file 
    } else if (basePath === '.') {
      const workspacePath = vscode.workspace.rootPath;
      console.log('workspacePath: ', workspacePath);
      // check worksapce
      if (workspacePath === 'undefind') {
        tagPath = workspacePath + pathSeparator + fileName;
      } else {
        tagPath = '';
      }
    // normal
    } else {
      tagPath = basePath + pathSeparator + fileName;
    }
    console.log('tagPath: ', tagPath);
    console.log('tagPath.length: ', tagPath.length);
    return tagPath;
  }
  
  // open file.
  private openFile(fileName: string, lineNum: number) {
    const fullPath: string = this.getFullPath(fileName);
    // check open file
    const fileExists: boolean = fs.existsSync(fullPath);
    console.log('fullPath: ', fullPath);
    console.log('lineNum: ', lineNum);
    console.log('fileExists: ', fileExists);
    //
    if (fileExists) {
      // make Uri
      const tagPath: string = 'file:///' + fullPath.replace(/\\/g, '/');
      const setting: vscode.Uri = vscode.Uri.parse(tagPath);
      
      // open file window
      vscode.workspace.openTextDocument(setting).then((doc: vscode.TextDocument) => {
        
        // console.log('viewColumn: ', vscode.window.activeTextEditor.viewColumn);
        vscode.window.showTextDocument(doc, 1).then((editor: vscode.TextEditor) => {
          
          if (lineNum != null && lineNum > 1) {
            // goto line
            const range = editor.document.lineAt(lineNum - 1).range;
            // editor.selection = new vscode.Selection(range.start, range.end);
            editor.selection = new vscode.Selection(range.start, range.start);
            // revealRange() https://github.com/Microsoft/vscode/issues/6695
            editor.revealRange(range);
        }
        // showTextDocument
        }, (error: any) => {
          console.error(error);
          // debugger;
        });
      // openTextDocument
      }, (error: any) => {
          console.error(error);
          // debugger;
      });
    } // if (fileExists)
    else {
      vscode.window.showErrorMessage('Could not open file, please specify correct tag jump\nファイルを開けませんでした、正しいタグジャンプを指定してください.');
    }
  }
}
//