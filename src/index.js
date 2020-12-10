import React from 'react';

import ThemeProvider from './style/themeProvider';

import SafeArea from './components/safe/default';
import Statusbar from './components/statusbar/default';

import Home from './pages/home';
import MovieDetail from './pages/moviedetail';

const App = () => {
  return (
    <ThemeProvider>
      <Statusbar />
      {/* <Home /> */}
      <MovieDetail />
    </ThemeProvider>
  );
};

export default App;
