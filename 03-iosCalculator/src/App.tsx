import React from 'react';
import {View, StatusBar} from 'react-native';
import {CalculatorScreen} from './presentation';
import {globalStyles} from './config';

export const App = () => {
  return (
    <View style={globalStyles.background}>
      <StatusBar barStyle="light-content" backgroundColor={'black'} />

      <CalculatorScreen />
    </View>
  );
};
