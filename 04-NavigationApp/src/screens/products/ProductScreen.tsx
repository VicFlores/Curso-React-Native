/* eslint-disable react-hooks/exhaustive-deps */
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {RootStackParams} from '../../routes';
import {globalStyles} from '../../theme';

export const ProductScreen = () => {
  const params = useRoute<RouteProp<RootStackParams, 'Product'>>().params;
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: params.name,
    });
  }, []);

  return (
    <View style={globalStyles.container}>
      <Text>Product Screen</Text>

      <Text style={{fontSize: 20, textAlign: 'center', marginTop: 20}}>
        ID: {params.id} / Name: {params.name}
      </Text>
    </View>
  );
};