import React from 'react';
import {StyleSheet, View} from 'react-native';

export const FlexDirectionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.box1]} />
      <View style={[styles.box, styles.box2]} />
      <View style={[styles.box, styles.box3]} />

      <View style={[styles.box, styles.box2]} />
      <View style={[styles.box, styles.box3]} />
      <View style={[styles.box, styles.box1]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'flex-start',
    flexWrap: 'wrap',
    columnGap: 5,
  },

  box: {
    // flex: 1,
    width: 100,
    height: 100,
  },

  box1: {
    backgroundColor: '#5856D6',
    // bottom: 100,
  },

  box2: {
    backgroundColor: '#FFAD00',
    // alignSelf: 'center',
  },

  box3: {
    backgroundColor: '#30C7EC',
    // top: 100,
  },
});
