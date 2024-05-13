import React, {FC} from 'react';
import {Text, Pressable} from 'react-native';
import {globalStyles, colors} from '../../config';

interface Props {
  label: string;
  color?: string;
  doubleSize?: boolean;
  blackText?: boolean;
  onPress: () => void;
}

export const CalculatorButton: FC<Props> = ({
  label,
  color = colors.darkGray,
  doubleSize = false,
  blackText = false,
  onPress,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => ({
        ...globalStyles.button,
        backgroundColor: color,
        width: doubleSize ? 180 : 80,
        opacity: pressed ? 0.7 : 1,
      })}>
      <Text
        style={{
          ...globalStyles.buttonText,
          color: blackText ? colors.darkGray : colors.textPrimary,
        }}>
        {label}
      </Text>
    </Pressable>
  );
};
