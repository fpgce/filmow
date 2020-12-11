import React from 'react';

import * as M from './styles';

import {useTheme} from 'styled-components/native';

const MovieSmallComponent = ({item}) => {
  const theme = useTheme();

  return (
    <M.Container style={[theme.shadow]}>
      <M.Thumb></M.Thumb>
      <M.View>
        <M.Title>O presente de Natal da Angela</M.Title>
        <M.Row>
          <M.Small>2020</M.Small>
          <M.Circle />
          <M.Small>50m</M.Small>
        </M.Row>
      </M.View>
    </M.Container>
  );
};

export default MovieSmallComponent;
