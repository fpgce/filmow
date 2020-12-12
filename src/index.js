import 'react-native-gesture-handler';
import '~/config/reactotron';
import React, {useEffect} from 'react';

import ThemeProvider from './style/themeProvider';

import Statusbar from './components/statusbar/default';

import ModalMoviesComponent from './components/modal/movies';
import ModalRateComponent from './components/modal/rate';

import LoadingMovieFullscreen from '~/components/loading/movie/fullscreen';

import Routes from '~/routes';

const App = () => {
  return (
    <ThemeProvider>
      <Statusbar />
      <Routes />
      <ModalMoviesComponent />
      <ModalRateComponent />
      <LoadingMovieFullscreen />
    </ThemeProvider>
  );
};

export default App;
