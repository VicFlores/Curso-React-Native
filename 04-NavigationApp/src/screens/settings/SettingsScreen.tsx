import React from 'react';
import {View, Text} from 'react-native';
import {globalStyles} from '../../theme';
import {PrimaryButton} from '../../components';
import {StackActions, useNavigation} from '@react-navigation/native';

export const SettingsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>SettingsScreen</Text>

      <PrimaryButton label="Regresar" onPress={() => navigation.goBack()} />

      <PrimaryButton
        label="Regresar a inicio"
        onPress={() => navigation.dispatch(StackActions.popToTop())}
      />
    </View>
  );
};
