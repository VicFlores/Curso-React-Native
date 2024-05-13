import {useRef} from 'react';
import {Animated, Easing} from 'react-native';

export const useAnimation = () => {
  const animatedOpcaity = useRef(new Animated.Value(0)).current;
  const animatedTop = useRef(new Animated.Value(0)).current;

  const fadeIn = ({duration = 300, toValue = 1, callback = () => {}}) => {
    //  Animated.timing(animatedTop, {
    //    toValue: 0,
    //    duration: 700,
    //    useNativeDriver: true,
    //    easing: Easing.bounce,
    //  }).start(() => console.log('Animation finished'));

    Animated.timing(animatedOpcaity, {
      toValue,
      duration,
      useNativeDriver: true,
    }).start(callback);
  };

  const fadeOut = ({duration = 300, toValue = 0, callback = () => {}}) => {
    Animated.timing(animatedOpcaity, {
      toValue,
      duration,
      useNativeDriver: true,
    }).start(callback);

    // () => animatedTop.resetAnimation()
  };

  const startMovingTopPosition = ({
    initialPosition = 0,
    duration = 300,
    toValue = 0,
    easing = Easing.linear,
    callback = () => {},
  }) => {
    animatedTop.setValue(initialPosition);

    Animated.timing(animatedTop, {
      toValue,
      duration,
      useNativeDriver: true,
      easing,
    }).start(callback);
  };

  return {
    fadeIn,
    fadeOut,
    startMovingTopPosition,
    animatedOpcaity,
    animatedTop,
  };
};
