import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useFlow } from "../context/FlowContext";
import BreedingHome from "../screens/breeding/BreedingHome";
import BreedPet1 from "../screens/breeding/BreedPet1";
import BreedPet2 from "../screens/breeding/BreedPet2";
import SearchBreed from "../screens/breeding/SearchBreed";
import PetSelection from "../screens/petCreation/PetSelection";
import PetRegistration from "../screens/petCreation/PetRegistration";
import PhotoUploadScreen from "../screens/petCreation/PhotoUpload";
import PetInformation from "../screens/petScreen/PetInformation";
import BreedingPetSelection from "../screens/breeding/BreedingFeatureSelection";

const Stack = createStackNavigator();

function BreedingNavigator() {
  const { setCurrentFlow, setAdvertType } = useFlow();

  useEffect(() => {
    setCurrentFlow("BreedingHome");
    setAdvertType("Breeding");
  }, [setCurrentFlow, setAdvertType]);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BreedingMenu" component={BreedingHome} />
      <Stack.Screen name="BreedPet1" component={BreedPet1} />
      <Stack.Screen name="BreedPet2" component={BreedPet2} />
      <Stack.Screen name="BreedingPetSelection" component={BreedingPetSelection} />
      <Stack.Screen name="SearchBreed" component={SearchBreed} />
      <Stack.Screen name="PetSelection" component={PetSelection} />
      <Stack.Screen name="PetRegistration" component={PetRegistration} />
      <Stack.Screen name="PetInformation" component={PetInformation} />
      <Stack.Screen name="PhotoUploadScreen" component={PhotoUploadScreen} />
    </Stack.Navigator>
  );
}

export default BreedingNavigator;
