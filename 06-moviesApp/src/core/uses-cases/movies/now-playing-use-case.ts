import {HttpAdapter} from '../../../config/adapters/http/httpAdapter';
import {NowPlayinResponse} from '../../../infrastructure/interfaces/movieDbResponses';
import {MovieMapper} from '../../../infrastructure/mappers/movieMapper';
import {Movie} from '../../entities/movieEntiti';

export const moviesNowPlayingUseCase = async (
  fetcher: HttpAdapter,
): Promise<Movie[]> => {
  try {
    const nowPlaying = await fetcher.get<NowPlayinResponse>('/now_playing');

    return nowPlaying.results.map(result =>
      MovieMapper.fromMovieDbResultToEntiti(result),
    );
  } catch (error) {
    throw new Error('Error fetching now playing movies');
  }
};
