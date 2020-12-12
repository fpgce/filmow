import create from 'zustand';

import {setStorageState, getStorageState} from '~/services/storage';

import {requestAllGenres} from '~/services/api/genres';

async function init(set) {
  try {
    const state = await getStorageState({context: 'theme'});
    if (state) {
      set(state);
    }
  } catch (error) {}
}

async function setTheme(set, get, theme) {
  try {
    set({theme});
    await setStorageState({context: 'theme', theme});
  } catch (err) {
    console.log(`FAIL updateLocalState`, err);
  }
}

const useTheme = create((set, get) => ({
  theme: 'light',
  setTheme: (theme) => setTheme(set, get, theme),
  init: () => init(set),
}));

export default useTheme;
