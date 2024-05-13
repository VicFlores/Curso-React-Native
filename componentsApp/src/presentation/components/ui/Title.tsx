/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text} from 'react-native';
import {colors, globalStyles} from '../../../config/theme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface Props {
  text: string;
  safeArea?: boolean;
  white?: boolean;
}

export const Title = ({text, safeArea = false, white = false}: Props) => {
  const {top} = useSafeAreaInsets();

  return (
    <Text
      style={{
        ...globalStyles.title,
        marginTop: safeArea ? top : 0,
        color: white ? 'white' : colors.text,
      }}>
      {text}
    </Text>
  );
};
