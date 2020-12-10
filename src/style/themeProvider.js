import React from 'react';
import {ThemeProvider} from 'styled-components';
import themes from './theme';
export default function ThemeChange({children}) {
  return <ThemeProvider theme={themes.light}>{children}</ThemeProvider>;
}
