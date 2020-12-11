import 'react-native-gesture-handler';
import '~/config/reactotron';
import React from 'react';

import ThemeProvider from './style/themeProvider';

import SafeArea from './components/safe/default';
import Statusbar from './components/statusbar/default';

import Home from './pages/home';
import MovieDetail from './pages/moviedetail';
import ModalMoviesComponent from './components/modal/movies';

import Routes from '~/routes';

const App = () => {
  return (
    <ThemeProvider>
      <Statusbar />
      <Routes />
      <ModalMoviesComponent />
    </ThemeProvider>
  );
};

export default App;
