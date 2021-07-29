#!/bin/sh

#
# macOS
#

echo "$(date +'%Y-%m-%dT%H:%M:%S')+09:00 [INFO] stop sleeping-mode"
sudo pmset -a disablesleep 1
