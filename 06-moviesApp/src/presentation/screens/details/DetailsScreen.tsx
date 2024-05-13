import {StackScreenProps} from '@react-navigation/stack';
import React, {FC} from 'react';
import {RootStackParams} from '../../routes';
import {useMovie} from '../../hooks/useMovie';
import {MovieHeader} from '../../components/Movies/Header';
import {MovieDetails} from '../../components/Movies/MovieDetails';
import {ScrollView} from 'react-native-gesture-handler';
import {FullScreenLoader} from '../../components/loaders/FullScreenLoader';

interface Props extends StackScreenProps<RootStackParams, 'Details'> {}

export const DetailsScreen: FC<Props> = ({route}) => {
  const {movieId} = route.params;

  const {movie, isLoading, cast = []} = useMovie(movieId);

  if (isLoading) {
    return <FullScreenLoader />;
  }

  return (
    <ScrollView>
      <MovieHeader
        poster={movie!.poster}
        originalTitle={movie!.originalTitle}
        title={movie!.title}
      />

      <MovieDetails movie={movie!} cast={cast} />
    </ScrollView>
  );
};
