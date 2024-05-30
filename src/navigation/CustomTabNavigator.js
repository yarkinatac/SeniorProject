import React from 'react';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import { useNavigationState } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const CustomTabNavigator = ({ children, hiddenScreens }) => {
  const state = useNavigationState(state => state);

  // Check if the current route is in the hiddenScreens list
  const isHidden = state?.routes.some(route => hiddenScreens.includes(route.name));

  return (
    <Tab.Navigator tabBar={props => (!isHidden ? <BottomTabBar {...props} /> : null)}>
      {children}
    </Tab.Navigator>
  );
};

export default CustomTabNavigator;
