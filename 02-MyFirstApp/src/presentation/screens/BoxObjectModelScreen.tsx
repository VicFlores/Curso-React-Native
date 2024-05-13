import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Box Object Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },

  title: {
    fontSize: 30,
    color: 'black',
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginVertical: 20,
    marginHorizontal: 20,
    borderWidth: 10,
  },
});
