import {HttpAdapter} from '../../../config/adapters/http/httpAdapter';
import {MoviePopularResult} from '../../../infrastructure/interfaces/movieDbResponses';
import {MovieMapper} from '../../../infrastructure/mappers/movieMapper';
import {Movie} from '../../entities/movieEntiti';

export const moviesTopRatedUseCase = async (
  fetcher: HttpAdapter,
): Promise<Movie[]> => {
  try {
    const topRated = await fetcher.get<MoviePopularResult>('/top_rated');

    return topRated.results.map(result =>
      MovieMapper.fromMovieDbResultToEntiti(result),
    );
  } catch (error) {
    throw new Error('Error fetching popular movies');
  }
};
