import axios from 'axios';
import config from '~/config/environments';

const BaseRate = axios.create({
  baseURL: config.domain,
});

BaseRate.interceptors.request.use(
  (cfg) => {
    cfg.headers.Authorization = `Bearer ${config.read_token}`;
    return cfg;
  },
  (error) => Promise.reject(error),
);

export function requestSendARate({movie_id, value, guest_session_id}) {
  return BaseRate.post(
    `/movie/${movie_id}/rating?api_key=${config.api_key}&guest_session_id=${guest_session_id}`,
    {
      value,
    },
  );
}
