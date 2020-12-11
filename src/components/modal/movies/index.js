import React from 'react';

import * as M from './styles';

import InputSearchComponent from '~/components/input/search';
import MovieSmallItemComponent from '~/components/item/moviesmall';
import SafeArea from '~/components/safe/default';

const ModalMoviesComponent = () => {
  return (
    <M.ModalContainer visible={false}>
      <SafeArea>
        <M.Container>
          <InputSearchComponent callbackSearch={() => {}} />
          <M.Text>Buscas recentes</M.Text>
          <MovieSmallItemComponent />
          <MovieSmallItemComponent />
          <MovieSmallItemComponent />
        </M.Container>
      </SafeArea>
    </M.ModalContainer>
  );
};

export default ModalMoviesComponent;
