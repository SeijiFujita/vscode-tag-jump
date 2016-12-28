
# Tag-Jump extension for Visual Studio Code 

vscode タグジャンプ は grep の検索結果、デバッグログ、コンパイラのメッセージからファイルを開き効率的に作業ができます。
emacs の grep-mode、秀丸エディタのタグジャンプ、サクラのタグジャンプなどと同じような操作がおこなえます。

## Usage

![Tag-Jump usage](https://raw.githubusercontent.com/SeijiFujita/vscode-tag-jump/master/images/tagjump_usage.gif)
<!-- ![Tag-Jump usage](images/tagjump_usage.gif) -->

## Features


1. 基本的な Tag 情報はエディタの先頭行からファイル名が始まり、ファイル名の直後に：(コロン/colon)を配置することでファイル名とします。
1. そして：(コロン/colon)直後に数値を配置することで行番号とします。
1. 行番号の直後にはスペースを配置することで tag 情報と認識します。
1. 基本的な Tag情報仕様は上記ですが、利便性を高めるための実装がされています。

### ファイル名の後に：(コロン/colon)、スペース、改行の場合ファイル名とします
* \<path-filename\>\<space or CR or LF\>
* ex) readme.txt  , readme.txt: 

### ファイル名の前にスペース、タブは無視します
* ^\<space or tab\>\<path-filename\>:\<line-number\>\<space\>
* ex) space or tab readme.txt:10

### ファイル名の先頭に'~'(チルダ)を指定すると環境変数 HOME を参照してファイルを開きます
* \<~\>\<path-filename\>\<space\>
* ex) ~readme.txt, ~readme.txt:10 

### ファイル名の先頭に'/'(スラッシュ)を指定するとフルパス名でファイルを開きます
* \</\>\<path-filename\>\<space\>
* ex) /C:\path\readme.txt, /C:\path\readme.txt:10, /tmp/file.txt, /usr/local/share/file.txt 


## Requirements

## Extension Settings

## Known Issues

* Tag-jump が動作する時は、Tag情報が書かれているファイルのディレクトリを基準としています、従ってディレクトリ位置が参照できない時は動作できません。
* Untitled-1 の編集作業時は Tag-Jump は機能しません、しかしワークスペースが設定されていた場合はワークスペースのディレクトリを参照して動作します。

## Link

GitHub: https://github.com/SeijiFujita/vscode-tagjump

MarketPlace: 

## Release Notes


### 1.0.0

Initial release / 2016-12-27


**Enjoy!**