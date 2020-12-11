import React from 'react';
import {StatusBar} from 'react-native';

import {useTheme} from 'styled-components/native';

const StatusbarComponent = () => {
  const theme = useTheme();
  return <StatusBar {...theme.statusBar} />;
};

export default StatusbarComponent;
