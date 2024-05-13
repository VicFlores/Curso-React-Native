import React from 'react';
import {View, ScrollView} from 'react-native';
import {useMovies} from '../../hooks/useMovies';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {PosterCarousel} from '../../components/Movies/PosterCarousel';
import {HorizontalCarousel} from '../../components/Movies/HorizontalCarousel';
import {FullScreenLoader} from '../../components/loaders/FullScreenLoader';

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const {
    isLoading,
    nowPlayingMovie,
    popularMovie,
    topRatedMovie,
    upCommingMovie,
    popularNextPage,
  } = useMovies();

  if (isLoading) {
    return <FullScreenLoader />;
  }

  return (
    <ScrollView>
      <View style={{marginTop: top + 20, paddingBottom: 30}}>
        <PosterCarousel movies={nowPlayingMovie} />

        <HorizontalCarousel
          movies={popularMovie}
          title="Populares"
          loadNextPage={popularNextPage}
        />

        <HorizontalCarousel movies={topRatedMovie} title="Top Rated" />

        <HorizontalCarousel movies={upCommingMovie} title="Upcomming" />
      </View>
    </ScrollView>
  );
};
