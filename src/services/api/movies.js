import axios from 'axios';
import querystring from 'querystring';
import config from '~/config/environments';

const BaseMovies = axios.create({
  baseURL: config.domain,
});

BaseMovies.interceptors.request.use(
  (cfg) => {
    cfg.headers.Authorization = `Bearer ${config.read_token}`;
    return cfg;
  },
  (error) => Promise.reject(error),
);

export function requestPageOfPopularMovies({page}) {
  return BaseMovies.get(`/movie/popular?page=${page}`);
}

export function requestPageOfNowPlayingMovies({page}) {
  return BaseMovies.get(`/movie/now_playing?page=${page}`);
}

export function requestTopRatedMovies({page}) {
  return BaseMovies.get(`/movie/top_rated?page=${page}`);
}

export function requestSearchAMovie(queryToFind) {
  const data = {
    api_key: config.api_key,
    query: queryToFind,
    page: 1,
  };
  const query = querystring.encode(data);
  return BaseMovies.get(`/search/movie?${query}`);
}
