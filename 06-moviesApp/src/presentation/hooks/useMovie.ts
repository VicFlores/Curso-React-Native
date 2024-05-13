/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from 'react';
import {getMovieByIdUseCase} from '../../core/uses-cases/movie/getById-use-cases';
import {movieDbFetcher} from '../../config/adapters/movieDbAdapter';
import {FullMovie} from '../../core/entities/movieEntiti';
import {Cast} from '../../core/entities/castEntity';
import {getMovieCastUseCase} from '../../core/uses-cases/movie/getCast-use-cases';

export const useMovie = (movieId: number) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState<FullMovie>();
  const [cast, setCast] = useState<Cast[]>();

  useEffect(() => {
    loadMovie();
  }, [movieId]);

  const loadMovie = async () => {
    setIsLoading(true);

    const fullMoviePromise = getMovieByIdUseCase(movieDbFetcher, movieId);

    const castPromise = getMovieCastUseCase(movieDbFetcher, movieId);

    const [fullMovie, cast] = await Promise.all([
      fullMoviePromise,
      castPromise,
    ]);

    setMovie(fullMovie);
    setCast(cast);
    setIsLoading(false);
  };

  return {
    isLoading,
    movie,
    cast,
  };
};
