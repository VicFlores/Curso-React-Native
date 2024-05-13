import React from 'react';
import {StyleSheet, View} from 'react-native';

export const HomeworkScreen = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.purpleBox]} />
      <View style={[styles.box, styles.orangeBox]} />
      <View style={[styles.box, styles.blueBox]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28425B',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  box: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
  },

  purpleBox: {
    backgroundColor: '#5856D6',
    // alignSelf: 'flex-end', tarea 3
    alignSelf: 'flex-end',
  },

  orangeBox: {
    backgroundColor: '#FFAD00',
    // flex: 1, tarea 1
    // alignSelf: 'flex-start', tarea 3
  },

  blueBox: {
    backgroundColor: '#30C7EC',
    // width: '100%', tarea 2
    alignSelf: 'flex-start',
  },
});
