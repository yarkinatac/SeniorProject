import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen1 from "../screens/getStarted/WelcomeScreen1";
import WelcomeScreen2 from "../screens/getStarted/WelcomeScreen2";
import WelcomeScreen3 from "../screens/getStarted/WelcomeScreen3";
import BreedingHome from "../screens/breeding/BreedingHome";
import BreedPet1 from "../screens/breeding/BreedPet1";
import BreedPet2 from "../screens/breeding/BreedPet2";
import SearchBreed from "../screens/breeding/SearchBreed";
import AdoptionHome from "../screens/adoption/AdoptionHome";
import AdoptPet from "../screens/adoption/AdoptPet";
import AdoptionFeatureSelection from "../screens/adoption/AdoptionFeatureSelection";

import LandingPage from "../screens/auth/LandingPage";
import SignIn from "../screens/auth/SignIn";
import ForgotPassword1 from "../screens/auth/ForgotPassword1";
import ForgotPassword2 from "../screens/auth/ForgotPassword2";
import MainMenu from "../screens/home/MainMenu";
import PetSittingHome from "../screens/petSitting/PetSittingHome";
import BecomePetSitter from "../screens/petSitting/BecomePetSitter";
import SearchPetSitter1 from "../screens/petSitting/SearchPetSitter1";
import PetSitterDatePicker from "../screens/petSitting/PetSitterDatePicker";
import ProfileScreen from "../screens/profile/ProfileScreen";
import PetProfile from "../screens/profile/PetProfile";
import PetProfileEdit from "../screens/profile/PetProfileEdit";
import ProfileMyPets from "../screens/profile/ProfileMyPets";
import ProfileFavPets from "../screens/profile/ProfileFavPets";
import ProfileSettings from "../screens/profile/ProfileSettings";
import PetSelection from "../screens/petCreation/PetSelection";
import PetInformation from "../screens/petScreen/PetInformation";
import SplashScreen from "../screens/SplashScreen";
import SignUp from "../screens/auth/SignUp";
import ChatsMenu from "../screens/chat/ChatsHome";
import PetSittingOnboarding1 from "../screens/petSitting/PetSittingOnboarding1";
import PetSittingOnboarding2 from "../screens/petSitting/PetSittingOnboarding2";
import PetSittingOnboarding3 from "../screens/petSitting/PetSittingOnboarding3";
import PetSittingOnboarding4 from "../screens/petSitting/PetSittingOnboarding4";
import PetSittingOnboarding5 from "../screens/petSitting/PetSittingOnboarding5";
import FilterScreen from "../screens/shared/FilterScreen";
import PetRegistration from "../screens/petCreation/PetRegistration";
import PhotoUpload from "../screens/petCreation/PhotoUpload";
import ServiceLocator from "../screens/locServices/ServiceLocator";
import PetRegisteredSuccessfully from "../screens/petCreation/PetRegisteredSuccessfully";

const Stack = createStackNavigator();

function TestNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="WelcomeScreen1" component={WelcomeScreen1} />
      <Stack.Screen name="WelcomeScreen2" component={WelcomeScreen2} />
      <Stack.Screen name="WelcomeScreen3" component={WelcomeScreen3} /> 
      <Stack.Screen name="LandingPage" component={LandingPage} /> 
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ForgotPassword1" component={ForgotPassword1} />
      <Stack.Screen name="ForgotPassword2" component={ForgotPassword2} />
      <Stack.Screen name="MainScreen" component={MainMenu} />
      <Stack.Screen name="AdoptionHome" component={AdoptionHome} />
      <Stack.Screen name="AdoptPet" component={AdoptPet} />
      <Stack.Screen
        name="AdoptionFeatureSelection"
        component={AdoptionFeatureSelection}
      />

      <Stack.Screen name="BreedingHome" component={BreedingHome} />
      <Stack.Screen name="BreedPet1" component={BreedPet1} />
      <Stack.Screen name="BreedPet2" component={BreedPet2} />
      <Stack.Screen name="SearchBreed" component={SearchBreed} />
      <Stack.Screen name="PetSittingHome" component={PetSittingHome} />
      <Stack.Screen name="BecomePetSitter" component={BecomePetSitter} />
      <Stack.Screen name="SearchPetSitter1" component={SearchPetSitter1} />
       <Stack.Screen name="PetSitterDatePicker" component={PetSitterDatePicker} /> 

       <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="PetInformation" component={PetInformation} /> 
       <Stack.Screen name="PetProfile" component={PetProfile} />
      <Stack.Screen name="PetProfileEdit" component={PetProfileEdit} /> 
      <Stack.Screen name="ProfileMyPets" component={ProfileMyPets} />
      <Stack.Screen name="ProfileFavPets" component={ProfileFavPets} />
      <Stack.Screen name="ProfileSettings" component={ProfileSettings} />
      <Stack.Screen name="PetSelection" component={PetSelection} />
      <Stack.Screen name="PetRegistration" component={PetRegistration} />
      <Stack.Screen name="PhotoUpload" component={PhotoUpload} />
      <Stack.Screen
        name="PetRegisteredSuccessfully"
        component={PetRegisteredSuccessfully}
      />
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="ChatsScreen" component={ChatsMenu} />
      <Stack.Screen
        name="PetSittingOnboarding1"
        component={PetSittingOnboarding1}
      />
      <Stack.Screen
        name="PetSittingOnboarding2"
        component={PetSittingOnboarding2}
      />
      <Stack.Screen
        name="PetSittingOnboarding3"
        component={PetSittingOnboarding3}
      />
      <Stack.Screen
        name="PetSittingOnboarding4"
        component={PetSittingOnboarding4}
      />
      <Stack.Screen
        name="PetSittingOnboarding5"
        component={PetSittingOnboarding5}
      />
      <Stack.Screen name="ServiceLocator" component={ServiceLocator} />
      <Stack.Screen name="FilterScreen" component={FilterScreen} />
    </Stack.Navigator>
  );
}

export default TestNavigator;
