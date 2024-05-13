import React from 'react';
import {View, Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {PrimaryButton} from '../../components';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {globalStyles} from '../../theme';

export const ProfileScreen = () => {
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, paddingHorizontal: 20, marginTop: top}}>
      <Text style={globalStyles.title}>ProfileScreen</Text>

      <PrimaryButton
        label="Abrir Menu"
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}
      />
    </View>
  );
};
