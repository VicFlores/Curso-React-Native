import React, {FC} from 'react';
import {Text, Pressable} from 'react-native';
import {globalStyles} from '../../theme';

interface Props {
  label: string;
  onPress: () => void;
}

export const PrimaryButton: FC<Props> = ({label, onPress}) => {
  return (
    <Pressable style={globalStyles.primaryButton} onPress={onPress}>
      <Text style={globalStyles.buttonText}>{label}</Text>
    </Pressable>
  );
};
