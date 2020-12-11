import axios from 'axios';
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

export function requestPageOfMovies({page}) {
  return BaseMovies.get(`/list/${page}`);
}
