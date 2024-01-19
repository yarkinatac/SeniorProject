import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "../screens/home/HomeScreen"
import MyListScreen from "../screens/home/HomeScreen"
import ProfileScreen from "../screens/home/HomeScreen"
import ChatsScreen from "../screens/home/HomeScreen"

import { Ionicons, FontAwesome5 } from '@expo/vector-icons'; // or any other icon set

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false, // This will remove the top header
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Chats') {
            iconName = 'chatbubble';
          } else if (route.name === 'MyList') {
            iconName = 'heart';
          } else if (route.name === 'Profile') {
            iconName = 'person';
          } else if (route.name === 'World') {
            // Use FontAwesome for the "World" icon
            return <FontAwesome5 name="globe-americas" size={size} color={color} />;
          }

          // Use Ionicons for the other icons
          return <Ionicons name={iconName + (focused ? '' : '-outline')} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#FFFFFF', // Set your active tint color
        tabBarInactiveTintColor: 'rgba(255, 255, 255, 0.5)', // Set your inactive tint color
        tabBarStyle: { 
          backgroundColor: '#A68D60', // Set the background color
          height: 60, // Adjust height as needed
          paddingBottom: 5, // Adjust padding for iPhone X and similar
          borderTopWidth: 0, // Hide the top border of the tab bar
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Chats" component={ChatsScreen} />
      {/* Add a placeholder screen for the World icon that redirects to Home */}
      <Tab.Screen name="World" component={HomeScreen}/>
      <Tab.Screen name="MyList" component={MyListScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default MyTabs;
