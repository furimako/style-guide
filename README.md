# Style Guide for Fully Hatter

## Naming
Java | Python | JavaScript (Node.js) | JSON | HTML
--- | --- | --- | --- | ---
FileName.java | file_name.py | file_name.js | file-name.json | file-name.html
ClassName | ClassName | ClassName | - | -
methodName | method_name | methodName | - | -
variableName | variable_name | variableName | - | -
"String" | 'String' | 'String' | "String" | "String"

## Coding Tools
- code formatter
- linter
- spell checker

## Initializing Git
sudo git config --system alias.co checkout
sudo git config --system alias.br branch
sudo git config --system alias.cm 'commit -m'
sudo git config --system alias.st status

## Atom (keymap.cson)
'body':
    'cmd-t': 'application:new-file'
    'ctrl-tab ^ctrl': 'unset!'
    'ctrl-tab': 'pane:show-next-item'
    'ctrl-shift-tab ^ctrl': 'unset!'
    'ctrl-shift-tab': 'pane:show-previous-item'

'.platform-darwin':
    'cmd-n': 'fuzzy-finder:toggle-file-finder'
