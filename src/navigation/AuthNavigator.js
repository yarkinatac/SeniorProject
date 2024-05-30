import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LandingPage from '../screens/auth/LandingPage';
import SignIn from '../screens/auth/SignIn';
import SignUp from '../screens/auth/SignUp';
import ForgotPassword1 from '../screens/auth/ForgotPassword1';
import ForgotPassword2 from "../screens/auth/ForgotPassword2";
import MainMenu from '../screens/home/MainMenu';



const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LandingPage" component={LandingPage} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ForgotPassword1" component={ForgotPassword1} />
      <Stack.Screen name="ForgotPassword2" component={ForgotPassword2} />
      <Stack.Screen name="MainScreen" component={MainMenu} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;