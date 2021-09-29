import React, {useEffect, useMemo} from 'react';
import {Animated, StyleSheet, View, ViewStyle} from 'react-native';

interface Props {
    color?: string;
    diameter?: number;
    duration?: number;
    initialDiameter?: number;
    numPulses?: number;
    pulseStyle?: ViewStyle;
    speed?: number;
    style?: ViewStyle;
}

interface Pulse {
    pulseKey: number;
    diameter: Animated.Value;
    opacity: Animated.Value;
    borderRadius: Animated.Value;
    centerOffset: number;
}

const initialProps: Props = {
    color: 'blue',
    diameter: 400,
    duration: 2000,
    initialDiameter: 0,
    numPulses: 3,
    pulseStyle: {},
    speed: 300,
    style: {
        top: 0,
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
};

export const PulseAnimation = (props = initialProps) => {
    const {color, diameter, pulseStyle, style, duration, speed, numPulses} = props;

    const pulses = useMemo<Pulse[]>(
        () =>
            Array(numPulses).fill(0).map((_item, index) => {
                return {
                    centerOffset: 0,
                    pulseKey: index,
                    opacity: new Animated.Value(0.8),
                    diameter: new Animated.Value(0),
                    borderRadius: new Animated.Value(0),
                };
            }),
        [numPulses],
    );

    useEffect(() => {
        pulses.forEach((pulse, index) => {
            setTimeout(() => {
                Animated.loop(
                    Animated.parallel([
                        Animated.timing(pulse.diameter, {
                            toValue: diameter,
                            duration: speed,
                            useNativeDriver: false,
                        }),
                        Animated.timing(pulse.opacity, {
                            toValue: 0.2,
                            duration: speed,
                            useNativeDriver: false,
                        }),
                        Animated.timing(pulse.borderRadius, {
                            toValue: diameter / 2,
                            duration: speed,
                            useNativeDriver: false,
                        }),
                    ]),
                ).start();
            }, index * duration)
        });
    }, [diameter, duration, pulses]);

    const containerStyle = [styles.container, style, {width: diameter}];

    return (
        <View style={containerStyle}>
            {pulses.map(pulse => (
                <Animated.View
                    key={`animated_pulse_${pulse.pulseKey}`}
                    style={[
                        styles.pulse,
                        {
                            backgroundColor: color,
                            width: pulse.diameter,
                            height: pulse.diameter,
                            opacity: pulse.opacity,
                            borderRadius: pulse.borderRadius,
                        },
                        pulseStyle,
                    ]}
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    pulse: {
        position: 'absolute',
        flex: 1,
    },
});
