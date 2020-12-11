import create from 'zustand';

import {setStorageState, getStorageState} from '~/services/storage';

import {
  requestPageOfPopularMovies,
  requestPageOfNowPlayingMovies,
  requestTopRatedMovies,
} from '~/services/api/movies';

const requestOneOfTypes = [
  requestPageOfPopularMovies,
  requestPageOfNowPlayingMovies,
  requestTopRatedMovies,
];

async function updateLocalState(get) {
  try {
    const state = get();
    await setStorageState(state);
  } catch (err) {
    console.log(`FAIL updateLocalState`, err);
  }
}

async function init(set, get) {
  try {
    const state = await getStorageState();
    if (state) {
      set((st) => ({...st, ...state, modalSearchOpen: false}));
    } else {
      requestMovies(set, get, 0);
    }
  } catch (err) {
    requestMovies(set, get, 0);
    console.log(`FAIL updateLocalState`, err);
  }
}

async function requestMovies(set, get, currentTabIndex) {
  try {
    const toExec = requestOneOfTypes[currentTabIndex || 0];
    set((state) => ({
      ...state,
      loading: true,
      error: false,
      currentTabIndex: currentTabIndex || 0,
    }));
    const {data} = await toExec({page: 1});
    set((state) => ({...state, loading: false, movies: data.results}));
    updateLocalState(get);
  } catch (error) {
    set((state) => ({
      ...state,
      loading: false,
      error: true,
    }));
  }
}

function toggleTagSelected(tag, set, get) {
  try {
    set((state) => {
      let tags = [...state.selectedTags];
      const index = state.selectedTags.indexOf(tag);
      if (index < 0) {
        tags.push(tag);
      } else {
        tags.splice(index, 1);
      }
      return {...state, selectedTags: tags};
    });
    updateLocalState(get);
  } catch (error) {}
}

function setRecents(movie, set, get) {
  let recents = get().recents;
  const exist = recents.find((m) => m.id === movie.id);
  if (!exist) {
    set((state) => ({...state, recents: [...recents, movie]}));
    updateLocalState(get);
  }
}

const useMovies = create((set, get) => ({
  modalSearchOpen: false,
  movies: [],
  loading: false,
  error: false,
  tags: ['Ação', 'Comédia', 'Drama', 'Romance', 'Aventura', 'Documentário'],
  selectedTags: [],
  recents: [],
  currentTabIndex: 0,
  init: () => init(set, get),
  setCurrentTabIndex: (currentTabIndex) => {
    requestMovies(set, get, currentTabIndex);
  },
  setRecents: (movie) => setRecents(movie, set, get),
  toggleTagSelected: (tag) => toggleTagSelected(tag, set, get),
  toggleModal: () =>
    set((state) => ({modalSearchOpen: !state.modalSearchOpen})),
  requestMovies: () => requestMovies(set, get),
}));

export default useMovies;
