import React, {FC} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  name: string;
  size?: number;
  color?: string;
}

export const Ionicons: FC<Props> = ({name, size = 30, color = 'black'}) => {
  return <Icon name={name} size={size} color={color} />;
};
