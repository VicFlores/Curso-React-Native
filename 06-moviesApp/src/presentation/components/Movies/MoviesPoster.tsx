import React, {FC} from 'react';
import {View, Image, StyleSheet, Pressable} from 'react-native';
import {Movie} from '../../../core/entities/movieEntiti';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParams} from '../../routes';

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
}

export const MoviesPoster: FC<Props> = ({movie, height = 420, width = 300}) => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <Pressable
      onPress={() => navigation.navigate('Details', {movieId: movie.id})}
      style={({pressed}) => ({
        width,
        height,
        opacity: pressed ? 0.9 : 1,
        paddingHorizontal: 7,
        marginHorizontal: 4,
        paddinBottom: 20,
      })}>
      <View style={styles.imageContainer}>
        <Image source={{uri: movie.poster}} style={styles.image} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 18,
  },

  imageContainer: {
    flex: 1,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9,
  },
});
