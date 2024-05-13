import {HttpAdapter} from '../../../config/adapters/http/httpAdapter';
import {MovieDBMovie} from '../../../infrastructure/interfaces/movieDbResponses';
import {MovieMapper} from '../../../infrastructure/mappers/movieMapper';
import {FullMovie} from '../../entities/movieEntiti';

export const getMovieByIdUseCase = async (
  fetcher: HttpAdapter,
  movieId: number,
): Promise<FullMovie> => {
  try {
    const movie = await fetcher.get<MovieDBMovie>(`/${movieId}`);

    const fullMovie = MovieMapper.fromMovieDBEntity(movie);

    return fullMovie;
  } catch (error) {
    throw new Error('Error getting movie by id');
  }
};
