import React from 'react';

import {Container} from './styles';
import LottieView from 'lottie-react-native';
import LoadingMovieJson from '~/assets/json/loading-movie.json';

import useMovies from '~/context/movies';

const LoadingMovieFullscreenComponent = () => {
  const loading = useMovies().loading;

  if (!loading) return null;

  return (
    <Container>
      <LottieView
        autoSize
        styele={{
          width: 60,
          height: 60,
        }}
        autoPlay
        source={LoadingMovieJson}
      />
    </Container>
  );
};

export default LoadingMovieFullscreenComponent;
