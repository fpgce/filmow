import React, {useEffect} from 'react';
import {ThemeProvider} from 'styled-components';
import themes from './theme';

import useTheme from '~/context/theme';

export default function ThemeChange({children}) {
  const {theme, init} = useTheme();

  useEffect(() => {
    init();
  }, [init]);

  return <ThemeProvider theme={themes[theme]}>{children}</ThemeProvider>;
}
