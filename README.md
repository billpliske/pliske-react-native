# React Native version of billpliske.com

## Set up

-   used Native Code approach
-   Set up Android emulator with these instructions: https://facebook.github.io/react-native/docs/getting-started
-   used teh client: npm install -g react-native-cli

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
