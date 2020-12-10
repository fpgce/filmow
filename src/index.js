import React from 'react';
import {SafeAreaView} from 'react-native';

import ThemeProvider from './style/themeProvider';

import SafeArea from './components/safe/default';
import Statusbar from './components/statusbar/default';

import Home from './pages/home';

const App = () => {
  return (
    <ThemeProvider>
      <SafeArea>
        <Statusbar />
        <Home />
      </SafeArea>
    </ThemeProvider>
  );
};

export default App;
