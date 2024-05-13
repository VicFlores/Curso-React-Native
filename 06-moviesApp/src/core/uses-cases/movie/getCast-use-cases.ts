import {HttpAdapter} from '../../../config/adapters/http/httpAdapter';
import {MovieDBCastResponse} from '../../../infrastructure/interfaces/movieDbResponses';
import {CastMapper} from '../../../infrastructure/mappers/castMapper';
import {Cast} from '../../entities/castEntity';

export const getMovieCastUseCase = async (
  fetcher: HttpAdapter,
  movieId: number,
): Promise<Cast[]> => {
  try {
    const {cast} = await fetcher.get<MovieDBCastResponse>(
      `/${movieId}/credits`,
    );

    const actors = cast.map(CastMapper.fromMovieDBCastEntity);

    return actors;
  } catch (error) {
    throw new Error('Error getting movie cast');
  }
};
