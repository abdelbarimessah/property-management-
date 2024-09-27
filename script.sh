#!/bin/bash

osascript -e 'tell app "Terminal"
    do script "cd ~/Desktop/property-management- && make -f makefile.backend"
end tell'

osascript -e 'tell app "Terminal"
    do script "cd ~/Desktop/property-management- && make -f makefile.frontend"
end tell'