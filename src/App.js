import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import OnboardingNavigator from "./navigation/OnboardingNavigator";
import MainAppNavigator from "./navigation/MainAppNavigator";
import * as SplashScreen from "expo-splash-screen";

import {
  checkIfFirstLaunch,
  setAppLaunched,
} from "./services/firstLaunchService";
import {
  useFonts,
  Fredoka_400Regular,
  Fredoka_500Medium,
  Fredoka_600SemiBold,
} from "@expo-google-fonts/fredoka";

export default function App() {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  //const isFirstLaunch = true; // Temporarily force first launch
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(false);

  let [fontsLoaded] = useFonts({
    Fredoka_400Regular,
    Fredoka_500Medium,
    Fredoka_600SemiBold,
  });

  useEffect(() => {
    async function prepare() {
      try {
        // Prevent the splash screen from hiding
        await SplashScreen.preventAutoHideAsync();

        // Check if it's the first launch
        const isFirst = await checkIfFirstLaunch();
        setIsFirstLaunch(isFirst);
        if (isFirst) {
          await setAppLaunched();
        }

        // Hide the splash screen once the fonts are loaded and first launch check is done
        if (fontsLoaded) {
          await SplashScreen.hideAsync();
        }
      } catch (e) {
        console.warn(e);
      }
    }

    prepare();
  }, [fontsLoaded, isFirstLaunch]);

  if (!fontsLoaded || isFirstLaunch === null) {
    return null; // Return null or a loading indicator while fonts are loading and checking first launch
  }

  return (
     <NavigationContainer>
    {isFirstLaunch ? (<OnboardingNavigator /> 
    ): <MainAppNavigator /> } 
   </NavigationContainer>
  );
}