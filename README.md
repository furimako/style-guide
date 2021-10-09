
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
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.cm 'commit -m'
git config --global alias.st status
git config --global core.quotepath false  # 日本語対応
```

## Initializing Commands (Linode - Ubuntu 20.04)
```bash
# login with root user
apt update && apt upgrade
adduser furimako
adduser furimako sudo

# from local machine
ssh-keygen -b 4096  # run the line only for the first time
ssh-copy-id furimako@[public IP address]

# login with 'furimako' user
sudo nano /etc/ssh/sshd_config  # 'PasswordAuthentication no', 'PasswordAuthentication no'
sudo systemctl restart sshd
```
