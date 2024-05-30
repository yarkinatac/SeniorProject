import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useFlow } from "../context/FlowContext";
import AdoptionHome from "../screens/adoption/AdoptionHome";
import AdoptPet from "../screens/adoption/AdoptPet";
import AdoptionFeatureSelection from "../screens/adoption/AdoptionFeatureSelection";
import PetSelection from "../screens/petCreation/PetSelection";
import PetRegistration from "../screens/petCreation/PetRegistration";
import PhotoUploadScreen from "../screens/petCreation/PhotoUpload";
import FilterScreen from "../screens/shared/FilterScreen";
import PetInformation from "../screens/petScreen/PetInformation";

const Stack = createStackNavigator();

function AdoptionNavigator() {
  const { setCurrentFlow, setAdvertType } = useFlow();

  useEffect(() => {
    setCurrentFlow("Adoption");
    setAdvertType("Adoption");
  }, [setCurrentFlow, setAdvertType]);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AdoptionMenu" component={AdoptionHome} />
      <Stack.Screen
        name="AdoptionFeatureSelection"
        component={AdoptionFeatureSelection}
      />
      <Stack.Screen name="AdoptPet" component={AdoptPet} />
      <Stack.Screen name="PetInformation" component={PetInformation} />
      <Stack.Screen name="PetRegistration" component={PetRegistration} />
      <Stack.Screen name="PetSelection" component={PetSelection} />
      <Stack.Screen name="PhotoUpload" component={PhotoUploadScreen} />
      <Stack.Screen name="FilterScreen" component={FilterScreen}/>  

    </Stack.Navigator>
  );
}

export default AdoptionNavigator;
