import React from 'react';
import {View} from 'react-native';
import {HamburgerMenu, PrimaryButton} from '../../components';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {globalStyles} from '../../theme';
import {RootStackParams} from '../../routes';

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <>
      <HamburgerMenu />

      <View style={globalStyles.container}>
        <PrimaryButton
          label="Productos"
          onPress={() => navigation.navigate('Products')}
        />

        <PrimaryButton
          label="Ajustes"
          onPress={() => navigation.navigate('Settings')}
        />
      </View>
    </>
  );
};
