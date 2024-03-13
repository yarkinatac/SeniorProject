import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LandingPage from '../screens/login/LandingPage';
import SignIn from '../screens/login/SignIn';
import SignUp from '../screens/login/SignUp';
import ForgotPassword1 from '../screens/login/ForgotPassword1';
import ForgotPassword2 from "../screens/login/ForgotPassword2"
import HomeScreen from '../screens/home/HomeScreen';
import NavBar from '../navigation/NavBar';
import AdoptionMenu from '../screens/adoption/AdoptionMenu';
import AdoptPet from "../screens/adoption/AdoptPet";
import AdoptSearch1 from "../screens/adoption/AdoptSearch1";
import AdoptSearch2 from "../screens/adoption/AdoptSearch2";
import AdoptSearch3 from "../screens/adoption/AdoptSearch3";
import BreedingMenu from '../screens/breeding/BreedingMenu';
import BreedPet1 from "../screens/breeding/BreedPet1";
import BreedPet2 from '../screens/breeding/BreedPet2';
import SearchBreed from "../screens/breeding/SearchBreed";
import BoardingServices from "../screens/locServices/BoardingServices";
import GroomingServices from "../screens/locServices/GroomingServices";
import VeterinaryServices from "../screens/locServices/VeterinaryServices";
import BecomePetSitter from "../screens/petSitting/BecomePetSitter";
import PetSittingMenu from '../screens/petSitting/PetSittingMenu';
import SearchPetSitter1 from '../screens/petSitting/SearchPetSitter1';
import SearchPetSitter2 from '../screens/petSitting/SearchPetSitter2';
import SearchPetSitter3 from '../screens/petSitting/SearchPetSitter3';


const Stack = createStackNavigator();

function MainAppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LandingPage" component={LandingPage} options={{ headerShown: false }} />
      <Stack.Screen name='SignIn' component={SignIn} options={{headerShown: false}}/>
      <Stack.Screen name='SignUp' component={SignUp} options={{headerShown: false}}/>
      <Stack.Screen name="ForgotPassword1" component={ForgotPassword1} options={{headerShown: false}}/>
      <Stack.Screen name='ForgotPassword2' component={ForgotPassword2} options={{headerShown: false}}/> 
      <Stack.Screen name='HomeScreen' component={HomeScreen} options={{headerShown: false}}/> 
      <Stack.Screen name='AdoptionMenu' component={AdoptionMenu} options={{headerShown:false}}/>
      <Stack.Screen name='AdoptPet' component={AdoptPet} options={{headerShown:false}}/>
      <Stack.Screen name='AdoptSearch1' component={AdoptSearch1} options={{headerShown:false}}/>
      <Stack.Screen name='AdoptSearch2' component={AdoptSearch2} options={{headerShown:false}}/>
      <Stack.Screen name='AdoptSearch3' component={AdoptSearch3} options={{headerShown:false}}/>
      <Stack.Screen name='BreedingMenu' component={BreedingMenu} options={{headerShown:false}}/>
      <Stack.Screen name='BreedPet1' component={BreedPet1} options={{headerShown:false}}/>
      <Stack.Screen name='BreedPet2' component={BreedPet2} options={{headerShown:false}}/>
      <Stack.Screen name='SearchBreed' component={SearchBreed} options={{headerShown:false}}/>
      <Stack.Screen name='BoardingServices' component={BoardingServices} options={{headerShown:false}}/>
      <Stack.Screen name='GroomingServices' component={GroomingServices} options={{headerShown:false}}/>
      <Stack.Screen name='VeterinaryServices' component={VeterinaryServices} options={{headerShown:false}}/>
      <Stack.Screen name='BecomePetSitter' component={BecomePetSitter} options={{headerShown:false}}/>
      <Stack.Screen name='PetSittingMenu' component={PetSittingMenu} options={{headerShown:false}}/>
      <Stack.Screen name='SearchPetSitter1' component={SearchPetSitter1} options={{headerShown:false}}/>
      <Stack.Screen name='SearchPetSitter2' component={SearchPetSitter2} options={{headerShown:false}}/>
      <Stack.Screen name='SearchPetSitter3' component={SearchPetSitter3} options={{headerShown:false}}/>

      {/* <MainStack.Screen name='Home' component={NavBar} options={{headerShown: false}}/> */}
      </Stack.Navigator>
  );
}

export default MainAppNavigator;
