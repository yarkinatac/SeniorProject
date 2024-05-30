import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import MainAppNavigator from "./navigation/MainAppNavigator";
import TestNavigator from "./navigation/test";
import { AuthProvider } from "./context/AuthContext";
import { FlowProvider } from "./context/FlowContext";
import * as SplashScreen from "expo-splash-screen";
import { ThemeProvider, createTheme } from "@rneui/themed";
import { UserProvider } from "./context/UserContext"; // 
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
import setupApiKeys from "./services/api/apiKeySetup";

export default function App() {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);

  let [fontsLoaded] = useFonts({
    Fredoka_400Regular,
    Fredoka_500Medium,
    Fredoka_600SemiBold,
  });

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        const isFirst = await checkIfFirstLaunch();
        await setupApiKeys();
        setIsFirstLaunch(isFirst);
      } catch (e) {
        console.warn("Error during app preparation:", e);
      } finally {
        if (fontsLoaded) {
          await SplashScreen.hideAsync();
        }
      }
    }

    prepare();
  }, [fontsLoaded]);

  if (!fontsLoaded || isFirstLaunch === null) {
    return null; // Consider returning a basic loading indicator here
  }

  const theme = createTheme({
    colors: {
      background: "#F4DFBA",
      primary: "#65451F",
      secondary: "#EBAF78",
    },
  });

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <UserProvider> 
            <NavigationContainer>
              <MainAppNavigator />
            </NavigationContainer>
          </UserProvider>
        </AuthProvider>
      </ThemeProvider>
    </SafeAreaProvider>
    /* <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <FlowProvider>
            <NavigationContainer>
              <TestNavigator />
            </NavigationContainer>
          </FlowProvider>
        </AuthProvider>
      </ThemeProvider>
    </SafeAreaProvider>   */
  );
}
