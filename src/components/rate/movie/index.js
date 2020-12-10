import React from 'react';

import {useTheme} from 'styled-components/native';
import StarSourceImage from '~/assets/png/star.png';
import StarCleanSourceImage from '~/assets/png/star_clean.png';

import * as R from './styles';

const RateMovieComponent = () => {
  const theme = useTheme();
  return (
    <R.Container style={[theme.shadow]}>
      <R.View>
        <R.Star source={StarSourceImage} />
        <R.Small>5,5 / 10</R.Small>
        <R.Small>1.656</R.Small>
      </R.View>
      <R.View>
        <R.Star source={StarCleanSourceImage} />
        <R.Small>Avalie</R.Small>
      </R.View>
    </R.Container>
  );
};

export default RateMovieComponent;
