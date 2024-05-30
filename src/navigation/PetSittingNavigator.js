import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useFlow } from "../context/FlowContext";
import PetSittingHome from "../screens/petSitting/PetSittingHome";
import PetSittingOnboarding1 from "../screens/petSitting/PetSittingOnboarding1"
import PetSittingOnboarding2 from "../screens/petSitting/PetSittingOnboarding2"
import PetSittingOnboarding3 from "../screens/petSitting/PetSittingOnboarding3"
import PetSittingOnboarding4 from "../screens/petSitting/PetSittingOnboarding4"
import PetSittingOnboarding5 from "../screens/petSitting/PetSittingOnboarding5"
import BecomePetSitter from "../screens/petSitting/BecomePetSitter";
import SearchPetSitter1 from "../screens/petSitting/SearchPetSitter1";
import PetSitterDatePicker from "../screens/petSitting/PetSitterDatePicker";
import PetSelection from "../screens/petCreation/PetSelection";
import PetRegistration from "../screens/petCreation/PetRegistration";
import PhotoUploadScreen from "../screens/petCreation/PhotoUpload";
import SitMyPet from "../screens/petSitting/SitMyPet";
import PetInformation from "../screens/petScreen/PetInformation";

const Stack = createStackNavigator();

function PetSittingNavigator() {
  const { setCurrentFlow, setAdvertType } = useFlow();

  useEffect(() => {
    setCurrentFlow("PetSittingHome");
    setAdvertType("Sitting");
  }, [setCurrentFlow, setAdvertType]);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="PetSittingMenu" component={PetSittingHome} />
      <Stack.Screen name="BecomePetSitter" component={BecomePetSitter} />
      <Stack.Screen name="PetSittingOnboarding1" component={PetSittingOnboarding1} />
      <Stack.Screen name="PetSittingOnboarding2" component={PetSittingOnboarding2} />
      <Stack.Screen name="PetSittingOnboarding3" component={PetSittingOnboarding3} />
      <Stack.Screen name="PetSittingOnboarding4" component={PetSittingOnboarding4} />
      <Stack.Screen name="PetSittingOnboarding5" component={PetSittingOnboarding5} />
      <Stack.Screen name="SearchPetSitter1" component={SearchPetSitter1} />
      <Stack.Screen name="SitMyPet" component={SitMyPet} />
      <Stack.Screen name="PetInformation" component={PetInformation} />

      <Stack.Screen name="PetSitterDatePicker" component={PetSitterDatePicker} />
      <Stack.Screen name="PetSelection" component={PetSelection} />
      <Stack.Screen name="PetRegistration" component={PetRegistration} />
      <Stack.Screen name="PhotoUploadScreen" component={PhotoUploadScreen} />
    </Stack.Navigator>
  );
}

export default PetSittingNavigator;
