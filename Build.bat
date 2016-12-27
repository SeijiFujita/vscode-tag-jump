
@rem vsce package --baseContentUrl . --baseImagesUrl .
@rem vsce package --baseContentUrl "" --baseImagesUrl ""
@rem --baseContentUrl --baseImagesUrl 

rem vsce package 

rem vsce unpublish

rem vsce publish

goto :eof
------------------------------------------------------------
C:\Dev\VScode\vscode_ext\vscode-tag-jump>vsce -h 

  Usage: vsce [options] [command]


  Commands:

    ls                                   Lists all the files that will be published
    package [options]                    Packages an extension
    publish [options] [<version>]        Publishes an extension
    unpublish [options] [<extensionid>]  Unpublishes an extension. Example extension id: microsoft.csharp.
    list <publisher>                     Lists all extensions published by the given publisher
    ls-publishers                        List all known publishers
    create-publisher <publisher>         Creates a new publisher
    delete-publisher <publisher>         Deletes a publisher
    login <publisher>                    Add a publisher to the known publishers list
    logout <publisher>                   Remove a publisher from the known publishers list
    *                                  

  Options:

    -h, --help     output usage information
    -V, --version  output the version number

