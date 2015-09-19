#!/bin/bash
while :
do
   adb shell screenrecord --bit-rate 350000 --time-limit 1s --verbose /sdcard/screenrecord.mp4
   adb pull /sdcard/screenrecord.mp4 ../screenshots/video1.mp4
   mv ../screenshots/video1.mp4 ../screenshots/video.mp4
   sleep 0.5
done