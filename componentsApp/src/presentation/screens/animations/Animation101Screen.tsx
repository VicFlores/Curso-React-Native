/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  StyleSheet,
  Pressable,
  Text,
  Animated,
  Easing,
} from 'react-native';
import {useAnimation} from '../../hooks/useAnimation';

export const Animation101Screen = () => {
  const {
    animatedOpcaity,
    animatedTop,
    fadeIn,
    fadeOut,
    startMovingTopPosition,
  } = useAnimation();

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.purpleBox,
          opacity: animatedOpcaity,
          transform: [{translateY: animatedTop}],
        }}
      />

      <Pressable
        style={{marginTop: 10}}
        onPress={() => {
          fadeIn({});
          startMovingTopPosition({
            initialPosition: -100,
            easing: Easing.bounce,
            duration: 750,
          });
        }}>
        <Text>Fade In</Text>
      </Pressable>

      <Pressable style={{marginTop: 10}} onPress={() => fadeOut({})}>
        <Text>Fade Out</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  purpleBox: {
    backgroundColor: '#5856D6',
    width: 150,
    height: 150,
  },
});
