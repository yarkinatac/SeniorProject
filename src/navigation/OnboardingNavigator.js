import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen1 from '../screens/getStarted/WelcomeScreen1';
import WelcomeScreen2 from '../screens/getStarted/WelcomeScreen2';
import WelcomeScreen3 from '../screens/getStarted/WelcomeScreen3';
import LandingPage from '../screens/login/LandingPage';


const Stack = createStackNavigator();

function OnboardingNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="WelcomeScreen1" component={WelcomeScreen1} options={{ headerShown: false }} />
      <Stack.Screen name="WelcomeScreen2" component={WelcomeScreen2} options={{ headerShown: false }} />
      <Stack.Screen name="WelcomeScreen3" component={WelcomeScreen3} options={{ headerShown: false }} />
      <Stack.Screen name="LandingPage" component={LandingPage} options={{ headerShown: false }} />
      
    </Stack.Navigator>
  );
}

export default OnboardingNavigator;
