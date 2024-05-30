import React, { createContext, useState, useContext } from 'react';

const FlowContext = createContext();

export const FlowProvider = ({ children }) => {
  const [currentFlow, setCurrentFlow] = useState('MainMenu');
  const [advertType, setAdvertType] = useState(null);

  return (
    <FlowContext.Provider value={{ currentFlow, setCurrentFlow, advertType, setAdvertType }}>
      {children}
    </FlowContext.Provider>
  );
};

export const useFlow = () => useContext(FlowContext);
