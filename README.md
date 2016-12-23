
# Tag-Jump extension for Visual Studio Code 

Tag-Jump は Tag 情報により素早く目的のファイルを開きます。
Grep の検索結果やデバッグログ・コンパイラのメッセージから目的のファイルを開き効率的に作業ができます。

<!-- エディタのカーソル(キャレット)行にファイル名のが記述されている時、Tag-Jump 機能により記述されているファイルを開くことができます。-->

## Usage

![Tag-Jump usage](images/tagjump_usage.gif)


## Features

### 現在 Tag-Jump がサポートしている tag 情報です。

1. Tag情報仕様はエディタの先頭行からファイル名が始まり、ファイル名の直後に：(コロン/colon)を配置することでファイル名とします。
1. そして：(コロン/colon)直後に数値を配置することで行番号とします。
1. 行番号の直後にはスペースを配置することで tag 情報と認識します。
1. 基本的な Tag情報仕様は上記ですが、利便性を高めるための実装がされています。

ファイル名の後に：(コロン/colon)、スペース、改行の場合ファイル名とします
* \<path-filename\>\<space or CR or LF\>   ex) readme.txt  , readme.txt: 

ファイル名の前にスペース、タブは無視します
* ^\<space or tab\>\<path-filename\>:\<line-number\>\<space\>    ex)   \<space or tab\>readme.txt:10

ファイル名の先頭に'~'(チルダ)を指定すると環境変数 HOME をベースディレクトリとしてファイルの存在をチェックします
* \<~\>\<path-filename\>\<space\>   ex) ~readme.txt, ~readme.txt:10 

ファイル名の先頭に'/'(スラッシュ)を指定するとフルパス名が与えられたとしてフルパス名でファイルの存在をチェックします
* \<~\>\<path-filename\>\<space\>   ex) /C:\path\readme.txt, /C:\path\readme.txt:10 


## Requirements

* Untitled-1 での編集作業時は Tag-Jump は機能しません。
* Tag-jump の基準となるディレクトリは Tag情報が書かれているファイルのディレクトリ位置を基準としています、従ってディレクトリ位置が参照できない Untitled-1 などの場合は Tag-Jump は機能しません。

## Extension Settings

## Known Issues

## License

MIT

## Release Notes

### 0.0.1

Initial release of ...


**Enjoy!**