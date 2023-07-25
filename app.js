import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ResultsDish from './ResultsDish';
import DishDetails from './DishDetails';
import Favorites from './Favorites';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ResultsDish" component={ResultsDish} options={{ headerShown: false }} />
        <Stack.Screen name="DishDetails" component={DishDetails} />
        <Stack.Screen name="Favorites" component={Favorites} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
