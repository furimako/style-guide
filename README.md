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

## Initializing Commands
```bash
# add user
adduser furimako
usermod -aG sudo furimako
rsync --archive --chown=furimako:furimako ~/.ssh /home/furimako
sudo visudo
## Put below line after all other lines in the sudoers file.
## furimako ALL=(ALL) NOPASSWD: ALL

# basic settings
sudo timedatectl set-timezone Asia/Tokyo
sudo apt update
sudo apt -y dist-upgrade

# git
git config --global user.name "FullyHatter"
git config --global user.email "furimako@gmail.com"
git config --global push.default simple
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.cm 'commit -m'
git config --global alias.st status
```

## Atom (keymap.cson)
```cson
'body':
    'cmd-t': 'application:new-file'
    'ctrl-tab ^ctrl': 'unset!'
    'ctrl-tab': 'pane:show-next-item'
    'ctrl-shift-tab ^ctrl': 'unset!'
    'ctrl-shift-tab': 'pane:show-previous-item'

'.platform-darwin':
    'cmd-n': 'fuzzy-finder:toggle-file-finder'
```
