import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { isUserAuthenticated, signOut as authSignOut } from '../services/authCheckService';
import { storeApiKey, fetchApiKey } from '../services/secureStorageService';

export function useAuth() {
  const { state, dispatch } = useContext(AuthContext);


  const signIn = async (email, password) => {
    try {
      const response = await axios.post(
        "https://petsconapi3.azurewebsites.net/api/v2/Account/Login",
        { email, password }
      );
      await storeApiKey('token', response.data.token);  // Store the token
      dispatch({ type: "SIGN_IN", token: response.data.token });
    } catch (error) {
      console.error("SignIn Error:", error.response || error);
      throw new Error(
        error.response?.data?.message || "An error occurred during sign-in."
      );
    }
  };

  const signUp = async (userType, payload) => {
    try {
      const url = userType === 'personal' 
        ? "https://petsconapi3.azurewebsites.net/api/v2/Account/Register"
        : "https://petsconapi3.azurewebsites.net/api/v2/Shelter/AddShelter"; 

      const response = await axios.post(url, payload, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      await storeApiKey('token', response.data.token);  // Store the token
      dispatch({ type: "SIGN_UP", token: response.data.token });
    } catch (error) {
      console.error("SignUp Error:", error.response || error);
      throw new Error(
        error.response?.data?.message || "An error occurred during sign-up."
      );
    }
  };

  useEffect(() => {
    const checkAuthStatus = async () => {
      const isAuthenticated = await isUserAuthenticated();
      if (isAuthenticated) {
        const token = await fetchApiKey('token');  // Fetch the token
        dispatch({ type: "SIGN_IN", token });
      }
    };

    checkAuthStatus();
  }, []);

  const signOut = async () => {
    await authSignOut();
    dispatch({ type: "SIGN_OUT" });
  };

  return {
    isSignedIn: state.isSignedIn,
    userToken: state.userToken,
    signIn,
    signUp,
    signOut
  };
}
