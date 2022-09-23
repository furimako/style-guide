
# Style Guide for furimako

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

## Initializing Commands (Git)
```bash
git config --global user.name "furimako"
git config --global user.email "furimako@gmail.com"
git config --global push.default simple
git config --global pull.rebase false
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.cm 'commit -m'
git config --global alias.st status
git config --global core.quotepath false  # 日本語対応
```

## Initializing Commands (Linode - Ubuntu 20.04)
- [on Ubuntu with root] add user
  ```bash
  apt update && apt upgrade
  adduser (username)
  adduser (username) sudo
  ```
- [on local machine] generate ssh-key & copy it to the server
  ```bash
  ssh-keygen -b 4096  # run the line only for the first time
  ssh-copy-id (username)@(public IP address)
  ```
- [on Ubuntu with (username)] set PasswordAuthentication to "no"
  ```bash
  sudo nano /etc/ssh/sshd_config  # set PasswordAuthentication to "no"
  sudo systemctl restart sshd
  ```
-  open Linode Support ticket for sending emails
    -  detailed instruction is [here](https://www.linode.com/community/questions/19082/i-just-created-my-first-linode-and-i-cant-send-emails-why).

## enable automatic updates (Ubuntu 20.04)
see [it](https://linoxide.com/enable-automatic-updates-on-ubuntu-20-04/).
