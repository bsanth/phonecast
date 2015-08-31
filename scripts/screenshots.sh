#!/bin/bash

while :
do
   adb shell screencap -p | perl -pe 's/\x0D\x0A/\x0A/g' > ../screenshots/screen1.png
   mv ../screenshots/screen1.png ../screenshots/screen.png
done
