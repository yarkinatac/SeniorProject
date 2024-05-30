import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen1 from '../screens/getStarted/WelcomeScreen1';
import WelcomeScreen2 from '../screens/getStarted/WelcomeScreen2';
import WelcomeScreen3 from '../screens/getStarted/WelcomeScreen3';
import LandingPage from '../screens/auth/LandingPage';

const Stack = createStackNavigator();


const OnboardingNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="WelcomeScreen1" component={WelcomeScreen1} />
      <Stack.Screen name="WelcomeScreen2" component={WelcomeScreen2} />
      <Stack.Screen name="WelcomeScreen3" component={WelcomeScreen3} />
      <Stack.Screen name="LandingPage" component={LandingPage} />
    </Stack.Navigator>
  );
};

export default OnboardingNavigator;
