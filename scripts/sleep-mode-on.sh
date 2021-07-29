#!/bin/sh

#
# macOS
#

echo "$(date +'%Y-%m-%dT%H:%M:%S')+09:00 [INFO] start sleeping-mode"
sudo pmset -a disablesleep 0
