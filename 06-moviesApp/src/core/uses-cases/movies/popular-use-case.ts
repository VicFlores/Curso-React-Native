import {HttpAdapter} from '../../../config/adapters/http/httpAdapter';
import {MoviePopularResult} from '../../../infrastructure/interfaces/movieDbResponses';
import {MovieMapper} from '../../../infrastructure/mappers/movieMapper';
import {Movie} from '../../entities/movieEntiti';

interface Options {
  page?: number;
  limit?: number;
}

export const moviesPopularUseCase = async (
  fetcher: HttpAdapter,
  options?: Options,
): Promise<Movie[]> => {
  try {
    const popular = await fetcher.get<MoviePopularResult>('/popular', {
      params: {
        page: options?.page || 1,
      },
    });

    return popular.results.map(result =>
      MovieMapper.fromMovieDbResultToEntiti(result),
    );
  } catch (error) {
    throw new Error('Error fetching popular movies');
  }
};
