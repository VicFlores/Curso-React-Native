import React from 'react';
import {View, Text} from 'react-native';
import {globalStyles} from '../../theme';
import {FlatList} from 'react-native-gesture-handler';
import {PrimaryButton} from '../../components';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParams} from '../../routes';

const products = [
  {
    id: 1,
    name: 'Product 1',
  },
  {
    id: 2,
    name: 'Product 2',
  },
  {
    id: 3,
    name: 'Product 3',
  },
  {
    id: 4,
    name: 'Product 4',
  },
  {
    id: 5,
    name: 'Product 5',
  },
  {
    id: 6,
    name: 'Product 6',
  },
];

export const ProductsScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Productos</Text>

      <FlatList
        data={products}
        renderItem={({item}) => (
          <PrimaryButton
            label={item.name}
            onPress={() =>
              navigation.navigate('Product', {
                id: item.id,
                name: item.name,
              })
            }
          />
        )}
      />

      <Text style={globalStyles.title}>Ajustes</Text>
      <PrimaryButton
        label="Ajustes"
        onPress={() => navigation.navigate('Settings' as never)}
      />
    </View>
  );
};
