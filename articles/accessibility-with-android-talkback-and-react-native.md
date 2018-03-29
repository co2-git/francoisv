Accessibility with Android, Talkback and React Native
===

In this post, we’ll take a look at Talkback support in React Native.

# What is Talkback?

Talkback is [Android’s official voice reader for people with viewing disabilities](https://www.androidcentral.com/what-google-talk-back). Talkback allows discovering content via touching hotspots on the screen. Touching a text block will read it aloud. Touching a button would announce it as a touchable so that the user will know its role (button, checkbox, etc.).

It is important to get familiar with using Talkback before even considering supporting it via your app. Since Talkback works with touching parts of the screen, some gestures would be affected. A simple tap to trigger a call to action would be replaced by a double tap. Likewise, scrolling will be done with two fingers instead of one. Also, [there are special gestures](https://support.google.com/accessibility/android/answer/6151827?hl=en&ref_topic=3529932), like drawing a L from right to top in order to trigger a menu that gives an overview of all the accessible content present on the screen.

# Talkback support in React Native

React Native is doing a nice job by offering out-of-the-box support for voice readers. React Native components are accessible by default:

```jsx
<Text>This text will be read aloud if you touch it</Text>
```

```jsx
<TouchableNativeFeedback>
 <Text>This text will be read and announced as a touchable</Text>
</TouchableNativeFeedback>
```

You can turn accessibility off (`<Text accessible={false} />`) or specify a different text to be read (`<Text accessibilityLabel=”This text will be read”>This text will not be read</Text>`)

# Touchable

You can fine-grain the description of a touchable via the `[accessibilityComponentType](https://facebook.github.io/react-native/docs/accessibility.html#accessibilitycomponenttype-android)` property. Accepted values are:

- none
- button
- radiobutton_checked
- radiobutton_unchecked

# Dynamic content

An advanced feature is a [dynamic text](https://facebook.github.io/react-native/docs/accessibility.html#accessibilityliveregion-android) that will be announced when first mounted and every time it changes:

```jsx
<Text accessibilityLiveRegion=”polite”>
 Clicked {this.state.clicks} time(s)
</Text>
```

Possible values are

- none (will only be read at mount time)
- polite (if there are other announcements in progress, it will wait for them to be over)
- assertive (if there are other announcements in progress, they will be stopped to give priority to this one)

# Links

There is no out-of-the-box support for links in React Native. I suggest you use the [react-native-linktextview](https://www.npmjs.com/package/react-native-linktextview) library to this effect.

# Advanced use

Since we are talking about third-party libraries, I’ll also recommend using [react-native-accessibility](https://www.npmjs.com/package/react-native-accessibility) for a better control of accessibility in your React Native app.

This is it. I hope this brief introduction lays down sufficient foundations to give you a better understanding of how to make your React Native apps fully accessible. Cheers!
