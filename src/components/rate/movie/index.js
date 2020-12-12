import React, {memo, useCallback} from 'react';

import {useTheme} from 'styled-components/native';
import useRate from '~/context/rate';
import StarSourceImage from '~/assets/png/star.png';
import StarCleanSourceImage from '~/assets/png/star_clean.png';

import * as R from './styles';
import PropTypes from 'prop-types';

const RateMovieComponent = ({movie}) => {
  const theme = useTheme();
  const {toggleModal, setCurrentMovie} = useRate();

  const handlePressToggleModal = useCallback(() => {
    setCurrentMovie(movie);
    toggleModal();
  }, [movie, toggleModal, setCurrentMovie]);

  return (
    <R.Container style={[theme.shadow]}>
      <R.View>
        <R.Star source={StarSourceImage} />
        <R.Small>{movie?.vote_average} / 10</R.Small>
        <R.Small>{movie?.vote_count}</R.Small>
      </R.View>
      <R.Button onPress={handlePressToggleModal}>
        <R.Star source={StarCleanSourceImage} />
        <R.Small>Avalie</R.Small>
      </R.Button>
    </R.Container>
  );
};

RateMovieComponent.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    poster_path: PropTypes.string,
    title: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
    vote_count: PropTypes.number,
  }).isRequired,
};

export default memo(RateMovieComponent);
