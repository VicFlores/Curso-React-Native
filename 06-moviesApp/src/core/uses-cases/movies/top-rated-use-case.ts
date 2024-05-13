import {HttpAdapter} from '../../../config/adapters/http/httpAdapter';
import {MoviePopularResult} from '../../../infrastructure/interfaces/movieDbResponses';
import {MovieMapper} from '../../../infrastructure/mappers/movieMapper';
import {Movie} from '../../entities/movieEntiti';

export const moviesUpCommingUseCase = async (
  fetcher: HttpAdapter,
): Promise<Movie[]> => {
  try {
    const upComming = await fetcher.get<MoviePopularResult>('/upcoming');

    return upComming.results.map(result =>
      MovieMapper.fromMovieDbResultToEntiti(result),
    );
  } catch (error) {
    throw new Error('Error fetching upcoming movies');
  }
};
