import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {
  name?: string;
}

export const HelloWorldScreen: FC<Props> = ({name = 'Vic'}) => {
  return (
    <View style={styles.container}>
      <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>
        Bienvenido, {name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    fontSize: 45,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
    padding: 20,
  },
});
