import {THE_MOVIE_DB_API_KEY} from '@env';
import {AxiosAdapter} from './http/axiosAdapter';
export const movieDbFetcher = new AxiosAdapter({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: THE_MOVIE_DB_API_KEY,
    language: 'es',
  },
});
