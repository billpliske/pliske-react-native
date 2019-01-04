# React Native version of billpliske.com

I build this over a weekend, to see how the process has evolved, plus to get some extra RN reps under my belt. I only put up an Android version, because I already had a developer's license. Apple charges way too much for a license, even more so when you're putting up free apps, with no potential income.

Play Store location: https://play.google.com/store/apps/details?id=com.billpliske_native

## Set up

-   Used Native Code approach, not Expo.
-   Set up Android emulator with these instructions: https://facebook.github.io/react-native/docs/getting-started
-   uUsed the main cl npm install -g react-native-cli
-   How to hide Store passwords so they aren't in code: https://pilloxa.gitlab.io/posts/safer-passwords-in-gradle/
-   Create launcher icons: https://romannurik.github.io/AndroidAssetStudio/icons-launcher.html

## Common commands

-   `react-native run-android` : will launch on both emulator and plugged in device.
-   `react-native link` : do this whenever you add any new fonts, images, internal JSON, etc. It copies files over to the correct area for Android and iOS.
-   react-native run-android --variant=release
-   ./gradlew assembleRelease (cd to android folder, first)
-   adb uninstall com.billpliske_native

## Updating your React Native app in Play Store

1.  Make changes.
2.  Edit `android/app/build.gradle`
3.  Update `versionCode` (whole numbers) and `versionName` (dot upgrades)
4.  `cd` to android folder
5.  In terminal, run `./gradlew assembleRelease` ... which builds out a new apk file.
6.  `cd` back out to main repo folder, and test with ...
7.  `react-native run-android --variant=release` (you might need to shut down the emulator before this step works)
8.  If everything seems to work fine, go ahead and add a new release in your Play Developer Console.

## Debugging

-   npm install -g react-devtools
-   react-devtools
-   https://facebook.github.io/react-native/docs/debugging#react-developer-tools

## Custom Fonts

-   Only seemed to get TTFs to work. Wanted to use woff2 files (smaller), but instead I just limited the number of custom fonts I used (each ran around 90k).
-   Custom fonts won't render on an Android device (or emulator) unless you first specify a font-weight. It can be '200', 'normal' whatever. Crazy, but it works.
-   labelStyle: {
    fontSize: 20,
    fontWeight: "normal",
    fontFamily: "raleway-black"
    }

## Custom icons

-   Sweet library: ttps://oblador.github.io/react-native-vector-icons/

## Layout quirks

-   Bottom bar on Android overlapping the bottom of ScrollView? Throw in an inner View, and add some padding-bottom to it.
