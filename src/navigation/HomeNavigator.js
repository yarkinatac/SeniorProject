import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AdoptionNavigator from './AdoptionNavigator';
import BreedingNavigator from './BreedingNavigator';
import PetSittingNavigator from './PetSittingNavigator';
import ServiceLocator from '../screens/locServices/ServiceLocator';
import MainMenu from '../screens/home/MainMenu';



const Stack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='MainMenu' component={MainMenu}/>
      <Stack.Screen name="AdoptionHome" component={AdoptionNavigator} />
      <Stack.Screen name="BreedingHome" component={BreedingNavigator} />
      <Stack.Screen name="PetSittingHome" component={PetSittingNavigator} />
      <Stack.Screen name="ServiceLocator" component={ServiceLocator} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;