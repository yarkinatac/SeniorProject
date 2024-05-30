import { useNavigation } from "@react-navigation/native";
import { useCallback } from "react";
import { Alert } from "react-native";
import { useAuth } from "../context/AuthContext"; // Adjust the path as necessary

const useLogout = () => {
  const navigation = useNavigation();
  const { dispatch } = useAuth();

  const logout = useCallback(async () => {
    try {
      const response = await fetch("https://petsconapi3.azurewebsites.net/api/v2/Account/Logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      if (response.ok) {
        dispatch({ type: 'SIGN_OUT' }); // Update the auth state
        navigation.reset({
          index: 0,
          routes: [{ name: "LandingPage" }], // Ensure this matches your initial auth route
        });
      } else {
        const errorData = await response.json();
        Alert.alert("Logout Failed", errorData.message);
      }
    } catch (error) {
      console.error("Logout error:", error);
      Alert.alert("Logout Error", "An error occurred while logging out. Please try again.");
    }
  }, [navigation, dispatch]);

  return logout;
};

export default useLogout;