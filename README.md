# React Native Animated Pulse



## Installation

```
  npm react-native-animated-pulse --save
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
