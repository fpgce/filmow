import React, {useEffect, useMemo, useCallback} from 'react';

import * as H from './styles';

import SafeArea from '~/components/safe/default';

import CategoryComponent from '~/components/button/category';

import useTheme from '~/context/theme';

const SettingsScreen = ({navigation}) => {
  const {theme, setTheme} = useTheme();

  return (
    <SafeArea>
      <H.Container>
        <H.Title>Select your theme</H.Title>
        <H.Row>
          <CategoryComponent
            onPress={() => setTheme('light')}
            active={theme === 'light'}>
            light
          </CategoryComponent>
          <CategoryComponent
            onPress={() => setTheme('dark')}
            active={theme === 'dark'}>
            dark
          </CategoryComponent>
        </H.Row>
      </H.Container>
    </SafeArea>
  );
};

export default SettingsScreen;
