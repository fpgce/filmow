import create from 'zustand';

import {setStorageState, getStorageState} from '~/services/storage';

import {requestAllGenres} from '~/services/api/genres';

async function updateLocalState(get) {
  try {
    const state = get();
    await setStorageState({context: 'genres', state});
  } catch (err) {
    console.log(`FAIL updateLocalState`, err);
  }
}

async function requestGenres(set, get, currentTabIndex) {
  try {
    set((state) => ({
      ...state,
      loading: true,
      error: false,
    }));
    const {data} = await requestAllGenres({page: 1});
    set((state) => ({...state, loading: false, genres: data.genres}));
    updateLocalState(get);
  } catch (error) {
    set((state) => ({
      ...state,
      loading: false,
      error: true,
    }));
  }
}

function toggleActiveGenre(set, genre) {
  try {
    set((state) => {
      const nGenres = state.genres.map((g) =>
        g.id === genre.id ? {...g, active: !g.active} : g,
      );
      return {...state, genres: nGenres};
    });
  } catch (error) {}
}

async function init(set) {
  try {
    const state = await getStorageState({context: 'genres'});
    if (state && state?.genres.length) {
      set((st) => ({...st, ...state, loading: false, error: false}));
    } else {
      requestGenres(set);
    }
  } catch (err) {
    requestGenres(set);
    console.log(`FAIL updateLocalState`, err);
  }
}

const useGenres = create((set, get) => ({
  genres: [],
  loading: false,
  error: false,
  init: init(set),
  requestGenres: () => requestGenres(set, get),
  toggleActiveGenre: (genre) => toggleActiveGenre(set, genre),
}));

export default useGenres;
