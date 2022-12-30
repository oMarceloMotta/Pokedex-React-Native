import * as React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import * as screens from './screens.json';
import { PokedexScreen } from '../screens/pokedex/PokedexScreen';
const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName={screens.pokedex}>
      <Stack.Screen name={screens.pokedex} component={PokedexScreen} />
    </Stack.Navigator>
  );
}
export default AppNavigator;
