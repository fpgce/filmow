import axios from 'axios';
import moment from 'moment';
import {setStorageState, getStorageState} from '~/services/storage';
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

export async function requestGuesSessionState() {
  const state = await getStorageState({context: 'auth'});
  if (!state || moment().isAfter(state.expires_at)) {
    const {data} = await BaseRate.get(
      `/authentication/guest_session/new?api_key=${config.api_key}`,
    );
    await setStorageState({context: 'auth', state: data});
    return data;
  }
  return state;
}
