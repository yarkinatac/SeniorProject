import React, { createContext, useReducer, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';
import { signIn as authSignIn, signOut as authSignOut, isUserAuthenticated } from '../services/authCheckService';
import { checkIfFirstLaunch, setAppLaunched } from '../services/firstLaunchService';

export const AuthContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      return {
        ...state,
        isSignedIn: true,
        userToken: action.token,
      };
    case 'SIGN_OUT':
      return {
        ...state,
        isSignedIn: false,
        userToken: null,
      };
    case 'SET_AUTH':
      return {
        ...state,
        isSignedIn: action.isSignedIn,
        userToken: action.token,
      };
    case 'COMPLETE_ONBOARDING':
      return {
        ...state,
        isFirstTime: false,
      };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    isSignedIn: false,
    userToken: null,
    isFirstTime: true,  // Default to true for first-time users
  });

  useEffect(() => {
    const checkAuthStatus = async () => {
      const isAuthenticated = await isUserAuthenticated();
      const token = isAuthenticated ? await SecureStore.getItemAsync('token') : null;
      dispatch({ type: 'SET_AUTH', isSignedIn: isAuthenticated, token });
    };

    const checkFirstLaunchStatus = async () => {
      const isFirstLaunch = await checkIfFirstLaunch();
      dispatch({ type: 'COMPLETE_ONBOARDING', isFirstTime: isFirstLaunch });
      if (isFirstLaunch) {
        await setAppLaunched();
      }
    };

    checkAuthStatus();
    checkFirstLaunchStatus();
  }, []);

  const signIn = async (credentials) => {
    const result = await authSignIn(credentials);
    if (result.success) {
      dispatch({ type: 'SIGN_IN', token: result.token });
    }
    return result;
  };

  const signOut = async () => {
    const result = await authSignOut();
    if (result) {
      dispatch({ type: 'SIGN_OUT' });
    }
    return result;
  };

  return (
    <AuthContext.Provider value={{ state, dispatch, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
