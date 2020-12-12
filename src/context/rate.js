import create from 'zustand';

import {requestSendARate} from '~/services/api/rate';
import {requestGuesSessionState} from '~/services/api/auth';

async function sendARate(set, get, value) {
  try {
    const movie = get().movie;
    set((state) => ({...state, loading: true, error: false}));

    const {guest_session_id} = await requestGuesSessionState();

    await requestSendARate({movie_id: movie.id, value, guest_session_id});

    set((state) => ({...state, loading: false, error: false, success: true}));
  } catch (error) {
    set((state) => ({...state, loading: false, error: true}));
  }
}

const useRate = create((set, get) => ({
  modalOpen: false,
  loading: false,
  error: false,
  success: false,
  movie: null,
  setCurrentMovie: (movie) => set((state) => ({...state, movie})),
  sendARate: ({value, guest_session_id}) => sendARate(set, get, value),
  toggleModal: () =>
    set((state) => ({...state, success: false, modalOpen: !state.modalOpen})),
}));

export default useRate;
