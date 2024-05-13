import {useEffect, useState} from 'react';
import {Movie} from '../../core/entities/movieEntiti';
import {moviesNowPlayingUseCase} from '../../core/uses-cases/movies/now-playing-use-case';
import {movieDbFetcher} from '../../config/adapters/movieDbAdapter';
import {moviesPopularUseCase} from '../../core/uses-cases/movies/popular-use-case';
import {moviesTopRatedUseCase} from '../../core/uses-cases/movies/up-comming-use-case';
import {moviesUpCommingUseCase} from '../../core/uses-cases/movies/top-rated-use-case';

let popularPage = 1;

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [nowPlayingMovie, setNowPlaying] = useState<Movie[]>([]);
  const [popularMovie, setPopular] = useState<Movie[]>([]);
  const [topRatedMovie, setTopRated] = useState<Movie[]>([]);
  const [upCommingMovie, setUpComming] = useState<Movie[]>([]);

  useEffect(() => {
    initialLoad();
  }, []);

  const initialLoad = async () => {
    const nowPlayinPromises = moviesNowPlayingUseCase(movieDbFetcher);
    const popularPromises = moviesPopularUseCase(movieDbFetcher);
    const topRatedPromises = moviesTopRatedUseCase(movieDbFetcher);
    const upCommingPromises = moviesUpCommingUseCase(movieDbFetcher);

    const [nowPlaying, popular, topRated, upComming] = await Promise.all([
      nowPlayinPromises,
      popularPromises,
      topRatedPromises,
      upCommingPromises,
    ]);

    setNowPlaying(nowPlaying);
    setPopular(popular);
    setTopRated(topRated);
    setUpComming(upComming);

    setIsLoading(false);
  };

  const popularNextPage = async () => {
    popularPage++;

    const popularMovies = await moviesPopularUseCase(movieDbFetcher, {
      page: popularPage,
    });

    setPopular([...popularMovie, ...popularMovies]);
  };

  return {
    isLoading,
    nowPlayingMovie,
    popularMovie,
    topRatedMovie,
    upCommingMovie,

    popularNextPage,
  };
};
