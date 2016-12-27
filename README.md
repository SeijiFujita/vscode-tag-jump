

# Tag-Jump extension for Visual Studio Code 

Tag-Jump opens the target file quickly with Tag information.
You can open the target file from grep search result, debug logs, compiler message and work efficiently.

[Japanese](https://github.com/SeijiFujita/vscode-tag-jump/blob/master/README_JPN.md)

## Usage

![Tag-Jump usage](https://raw.githubusercontent.com/SeijiFujita/vscode-tag-jump/master/images/tagjump_usage.gif)
<!-- ![Tag-Jump usage](images/tagjump_usage.gif) -->


## Features

* Tag-Jump reads |path-fileName|:(colon)|line-number|space|, and opens the file and moves the cursor to the line number position.
* grep -n output results.

### Tag-Jump support formats
- |  path-filename  |  space  |
- |  path-filename  |  :  |  space |
- |  path-filename  |  :  |  line-num |  space  |
- |  path-filename  |  :  |  line-num |  :  |  space  |
- |  path-filename  |  :  |  (  |  line-num  |  )  |  space  |


### Ignore spaces and tabs before file names.
- |  space  or  tab  |  path-filename  |  :  |  line-num |  space  |

### If '~' (tilde) is specified at the beginning of file name, directory of environment variable HOME is referenced.
- |  '~' (tilde)  |  path-filename  |  :  |  line-num |  space  |

### If you specify '/' (slash) at the beginning of the file name, the file is opened with the full path name.
- |  '/' (slash)  |  path-filename  |  :  |  line-num |  space  |


<!-- ## Requirements -->

## Extension Settings

## Known Issues

* Tag-Jump does not work when editing Untitled-1, but if a workspace has been set, it will work by referring to the directory information of the workspace.

## Link

GitHub: https://github.com/SeijiFujita/vscode-tag-jump

MarketPlace: https://marketplace.visualstudio.com/items?itemName=seijifujita.vscode-tag-jump

## License

MIT LICENSE

## Release Notes

### 1.0.0  2016-12-27

Initial release


**Enjoy!**