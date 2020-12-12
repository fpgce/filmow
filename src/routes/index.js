import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {setNavigationRef} from '~/services/navigation/ref';

import components from '~/pages/__dev__/components';
import home from '~/pages/home';
import moviedetail from '~/pages/moviedetail';
import settings from '~/pages/settingsscreen';

const Stack = createStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer ref={setNavigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {__DEV__ && <Stack.Screen name="components" component={components} />}
        <Stack.Screen name="home" component={home} />
        <Stack.Screen name="moviedetail" component={moviedetail} />
        <Stack.Screen name="settings" component={settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
