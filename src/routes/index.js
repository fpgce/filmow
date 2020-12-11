import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import home from '~/pages/home';
import moviedetail from '~/pages/moviedetail';

const Stack = createStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="home" component={home} />
        <Stack.Screen name="moviedetail" component={moviedetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
