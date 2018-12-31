# React Native version of billpliske.com

## Set up

-   used Native Code approach
-   Set up Android emulator with these instructions: https://facebook.github.io/react-native/docs/getting-started
-   used the client: npm install -g react-native-cli
-   hiding Store passwords: https://pilloxa.gitlab.io/posts/safer-passwords-in-gradle/

## Common commands

-   react-native run-android
-   react-native link
-   react-native run-android --variant=release
-   ./gradlew assembleRelease (cd to android folder, first)
-   adb uninstall com.billpliske_native

## Updating the app in Android

1.  android/app/build.gradle
2.  update versionCode (whole numbers) and versionName(dot upgrades)
3.  cd to android folder
4.  ./gradlew assembleRelease
5.  cd back out to main folder, and test with ...
6.  react-native run-android --variant=release

## Custom Fonts

-   Only seemed to get TTFs to work.
-   Converted some woff2 to ttfs — and lmited how many I amusing, since file size for each was around 90k.
-   When trying to use a custom font for drawer items, it doesn't work unless you first specify fontweight 'normal' ... crazy, but that works.
-   labelStyle: {
    fontSize: 20,
    fontWeight: "normal",
    fontFamily: "raleway-black"
    }

## Custom icons

-   https://oblador.github.io/react-native-vector-icons/

## Layout quirks

-   Bottom bar on Android overlapping the bottom of ScrollView? Throw in an inner View, and add some padding-bottom to it.
