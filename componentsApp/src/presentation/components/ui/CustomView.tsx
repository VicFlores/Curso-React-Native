import React from 'react';
import {View, ViewStyle} from 'react-native';
import {globalStyles} from '../../../config/theme';
import {StyleProp} from 'react-native';

interface Props {
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
}

export const CustomView = ({style, children}: Props) => {
  return <View style={[globalStyles.mainContainer, style]}>{children}</View>;
};
