#!/bin/bash
while :
do
   adb shell screencap -j | perl -pe 's/\x0D\x0A/\x0A/g' > ../screenshots/screen1.jpeg
   mv ../screenshots/screen1.jpeg ../screenshots/screen.jpeg
done