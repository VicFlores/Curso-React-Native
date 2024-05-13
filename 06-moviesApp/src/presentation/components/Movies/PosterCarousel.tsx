import React, {FC} from 'react';
import {View} from 'react-native';
import {Movie} from '../../../core/entities/movieEntiti';
import {ScrollView} from 'react-native-gesture-handler';
import {MoviesPoster} from './MoviesPoster';

interface Props {
  movies: Movie[];
  height?: number;
}

export const PosterCarousel: FC<Props> = ({movies, height = 440}) => {
  return (
    <View style={{height}}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {movies.map(movie => (
          <MoviesPoster key={movie.id} movie={movie} />
        ))}
      </ScrollView>
    </View>
  );
};
