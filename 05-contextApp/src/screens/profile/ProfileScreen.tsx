import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {styles} from '../../config/app.theme';
import {useProfileStore} from '../../store/profile.store';

export const ProfileScreen = () => {
  const name = useProfileStore(state => state.name);
  const email = useProfileStore(state => state.email);
  const changeInfo = useProfileStore(state => state.changeInfo);

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Name: {name} </Text>
      <Text style={styles.title}> Email: {email} </Text>

      <Pressable
        style={styles.primaryButton}
        onPress={() => changeInfo('Vic Flores', 'vicflores2211@gmail.com')}>
        <Text>Cambiar nombre</Text>
      </Pressable>
    </View>
  );
};
