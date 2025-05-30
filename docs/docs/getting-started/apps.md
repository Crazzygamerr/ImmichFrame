---
sidebar_position: 3
---

# 📱 Apps

### Apple TV
ImmichFrame is available on the [Apple TV App Store][app-store-link].

See also: [ImmichFrame Apple TV repository][github-appletv-repo]

### iOS and iPadOS
You can "install" ImmichFrame as a PWA by opening in a browser and going to Share Menu-Add to Homescreen.

### Android
The Android-Version of ImmichFrame is available on the [Google Play Store][play-store-link]. Download it via the store for automatic updates. You can also sideload via APK available in Releases.

See also: [ImmichFrame Android repository][github-android-repo]
#### Remote Control
The Android app runs a small local HTTP server on port 53287 that accepts commands `dim`, `undim`, `next`, `previous`, `pause`, `settings`.  
Example:  
`curl http://192.168.0.136:53287/next`

#### Frameo
ImmichFrame can be run on inexpensive Frameo digital photo frames with some additional effort. You can typically find these for ~$40 USD. These devices are low powered and run a very old Android version, so they cannot run the full WebView version of the app (however most of the main features are still supported except SplitView). If you have not already, you will need to install ADB on your PC ([ADB instructions][ADB-link]).
ADB is often enabled on these devices by default, if it is not go to Frameo Settings-About-Enable Beta Program. Toggle ADB Access On-Off-On. Use the ADB commands below to sideload ImmichFrame APK, configure it to your liking, then disable the Frameo app to to set ImmichFrame as default Home app:
  - Sideload ImmichFrame: adb install /path/to/ImmichFrame_vXX.apk
  - Update existing ImmichFrame: adb install -r /path/to/ImmichFrame_vXX.apk
  - Start ImmichFrame: adb shell am start com.immichframe.immichframe/.MainActivity
    - Swipe down to enter ImmichFrame Settings
    - Configure URL and Authorization Secret (optional)
    - Disable WebView
  - Set as default HOME app
    - On first reboot after install you will be asked to select default Launcher, select ImmichFrame
    - Alternatively you can disable Frameo
      - adb shell su
      - pm disable net.frameo.frame
      - exit
      - If this doesn't stick on reboot, repeat the commands but power cycle after exit command
  - Some other useful ADB commands:
    - Reboot: adb reboot
        - You can also reboot or shutdown by holding down power button
    - Access Android Settings: adb shell am start -a android.settings.SETTINGS
    - Re-enable Frameo: repeat disable commands above but replace "disable" with "enable"
    - Start Frameo app: adb shell am start net.frameo.frame
    - Uninstall ImmichFrame: adb uninstall com.immichframe.immichframe

### Desktop (Windows, MacOS, Linux)

Get the latest Desktop-App from the [GitHub Releases][releases-url]-Page.

The screen is configured in a 3x3 gird. You can touch or click:

|         -          | **Settings** |         -          |
| :----------------: | :----------: | :----------------: |
| **Prev<br/>image** |  **Pause**   | **Next<br/>image** |
|         -          |   **Quit**   |         -          |

#### MacOS

- Open DMG, drag immichframe.app to applications folder.
- If you get an error that it is "damaged and can't be opened, you should move it to the trash" run `xattr -c /Applications/immichframe.app` in terminal.

### Keyboard:
**Settings** - Up arrow <br/>
**Quit** - Down arrow <br/>
**Prev Image** - Left arrow <br/>
**Next Image** - Right arrow <br/>
**Pause** - Enter/Return <br/>


<!-- MARKDOWN LINKS & IMAGES -->
[play-store-link]: https://play.google.com/store/apps/details?id=com.immichframe.immichframe
[github-android-repo]: https://github.com/immichFrame/ImmichFrame_Android
[github-appletv-repo]: https://github.com/immichFrame/ImmichFrame_Apple
[app-store-link]: https://apps.apple.com/us/app/immichframe/id6742748077
[releases-url]: https://github.com/3rob3/ImmichFrame/releases/latest
[ADB-link]: https://www.xda-developers.com/install-adb-windows-macos-linux/