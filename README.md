# React Native Animated Pulse

![react native animated pulse](https://raw.githubusercontent.com/TheRogue76/react-native-animated-pulse/master/demo.gif)

## Introduction

This project was created as a rewrite of ```react-native-pulse``` using React Native's own Animated API to solve that packages performance issues by removing the work from the JS thread and moving it to the UI thread. It is also written with TypeScript, should you care for type safety.

The API has mostly stayed the same in order to allow user's of that package to be able to switch without much of a fuss (with the exception of removing the old Image prop). Contributions and PRs are welcome.

## Installation

NPM users:

```
  npm react-native-animated-pulse --save
```
Yarn users:
```
  yarn add react-native-animated-pulse
```


## Usage

```tsx
import {PulseAnimation} from 'react-native-animated-pulse';

function App() {
    return (
        <View style={styles.container}>
            <Pulse color='orange' numPulses={3} diameter={400} speed={20} duration={2000} />
        </View>
    );
}
```

## Props

Component accepts several self-descriptive properties:


- **`color`** _(String)_ - Backgroundcolor for pulse. React-native colors supported. Default color is blue.
- **`diameter`** _(Number)_ - This is the maximum diameter that a pulse will be. Defaults to 400.
- **`duration`** _(Number)_ - Duration in milliseconds this is the delay new pulses will be created. Defaults to 2000.
- **`initialDiameter`** _(Number)_ - The diameter new pulses will start with. Defaults to 0.
- **`numPulses`** _(Number)_ - This is the number of pulses that will be rendered. Defaults to 3.
- **`pulseStyle`** _(ViewStyle)_ - Style properties for pulses (borderColor eg.)
- **`speed`** _(Number)_ - Speed in milliseconds pulse will redraw. Defaults to 300.
- **`style`** _(ViewStyle)_ - Style properties for pulse container (positioning eg.)
