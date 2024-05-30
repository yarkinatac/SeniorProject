import React, { createContext, useState } from 'react';
import useFetchUserData from '../hooks/useFetchUserData';

// Create the context
export const UserContext = createContext();

// Create a provider component
export const UserProvider = ({ children }) => {
  const currentUserId = 'be2a0476-19a3-4297-c78d-08dc7f6f7409'; // Replace this with your logic to get the current user ID
  const { user, loading, error } = useFetchUserData(currentUserId);

  return (
    <UserContext.Provider value={{ user, loading, error }}>
      {children}
    </UserContext.Provider>
  );
};
