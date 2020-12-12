import axios from 'axios';
import config from '~/config/environments';

const BaseGenres = axios.create({
  baseURL: config.domain,
});

BaseGenres.interceptors.request.use(
  (cfg) => {
    cfg.headers.Authorization = `Bearer ${config.read_token}`;
    return cfg;
  },
  (error) => Promise.reject(error),
);

export function requestAllGenres() {
  return BaseGenres.get('/genre/movie/list');
}
