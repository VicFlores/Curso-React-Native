import React from 'react';
import {StyleSheet, Text, useWindowDimensions, View} from 'react-native';

// const dimensions = Dimensions.get('window');

// const {width, height} = dimensions;

export const DimensionsScreen = () => {
  const dimensions = useWindowDimensions();

  const {width, height} = dimensions;

  return (
    <View>
      <View style={styles.container}>
        <Text
          style={{
            ...styles.orangeBox,
            width: width * 0.6,
          }}
        />
      </View>

      <Text>
        w: {width} h: {height}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 300,

    backgroundColor: 'purple',
  },

  orangeBox: {
    backgroundColor: 'orange',
    height: '50%',
    width: '50%',
  },
});
