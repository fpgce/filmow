import React, {useMemo, useState, useCallback, useEffect} from 'react';

import * as M from './styles';

import CloseIcon from '~/assets/svgIcon/close';

import {useTheme} from 'styled-components/native';

import InputSearchComponent from '~/components/input/search';
import MovieSmallItemComponent from '~/components/item/moviesmall';
import SafeArea from '~/components/safe/default';
import useMovies from '~/context/movies';

import {requestSearchAMovie} from '~/services/api/movies';

import {navigate} from '~/services/navigation/ref';

const ModalMoviesComponent = () => {
  const theme = useTheme();

  const {modalSearchOpen, toggleModal, recents, setRecents} = useMovies();

  const [state, setState] = useState({
    filter: '',
    moviesSearched: [],
  });

  useEffect(() => {
    if (!modalSearchOpen) {
      setState({moviesSearched: [], filter: ''});
    }
  }, [modalSearchOpen]);

  const handlePressMovie = useCallback(
    (movie) => {
      setRecents(movie);
      toggleModal();
      navigate({
        name: 'moviedetail',
        params: {
          movie: {...movie},
        },
      });
    },
    [setRecents, toggleModal],
  );

  const handleFinishSearchAMovie = useCallback(async () => {
    try {
      if (!state.filter) return;
      const {data} = await requestSearchAMovie(state.filter);
      setState((st) => ({...st, moviesSearched: data.results}));
    } catch (error) {}
  }, [state.filter]);

  const callbackSearch = useCallback((text) => {
    setState((st) => ({...st, filter: text}));
  }, []);

  return (
    <M.ModalContainer
      onRequestClose={toggleModal}
      animationType="fade"
      visible={modalSearchOpen}>
      <SafeArea>
        <M.Container>
          <M.Button onPress={toggleModal}>
            <CloseIcon stroke={theme.color.dark_dark} />
          </M.Button>
          <InputSearchComponent
            autocapitalize="none"
            callbackSearch={callbackSearch}
            onEndEditing={handleFinishSearchAMovie}
          />
        </M.Container>
        <M.FlatList
          ListHeaderComponent={
            state.filter ? null : <M.Text>Buscas recentes</M.Text>
          }
          data={state?.moviesSearched?.length ? state?.moviesSearched : recents}
          keyExtractor={(item, index) => String(index)}
          renderItem={({item, index}) => (
            <MovieSmallItemComponent {...{item, onPress: handlePressMovie}} />
          )}
        />
      </SafeArea>
    </M.ModalContainer>
  );
};

export default ModalMoviesComponent;
