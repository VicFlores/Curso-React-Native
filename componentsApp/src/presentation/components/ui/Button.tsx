import React from 'react';
import {Text, StyleProp, ViewStyle, Pressable} from 'react-native';
import {colors, globalStyles} from '../../../config/theme';

interface Props {
  title: string;
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
}

export const Button = ({title, style, onPress}: Props) => {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        globalStyles.btnPrimary,
        {
          opacity: pressed ? 0.8 : 1,
          backgroundColor: colors.primary,
        },
      ]}>
      <Text
        style={[
          globalStyles.btnPrimaryText,
          {
            color: colors.buttonTextColor,
          },
        ]}>
        Button
      </Text>
    </Pressable>
  );
};
