// MainMenuNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ProfileNavigator from './ProfileNavigator';
import ChatsScreen from '../screens/chat/ChatsHome';
import HomeNavigator from './HomeNavigator';
import MyListScreen from '../screens/profile/ProfileMyPets';
import MainMenu from '../screens/home/MainMenu';
import { useFlow } from '../context/FlowContext';
import CustomTabNavigator from './CustomTabNavigator';
import ListNavigator from './ListNavigator';

const Tab = createBottomTabNavigator();

const MainMenuNavigator = () => {
  const { currentFlow } = useFlow();
  const navigation = useNavigation();

  const navigateToHomeScreen = () => {
    switch (currentFlow) {
      case 'Adoption':
        navigation.navigate("AdoptionHome");
        break;
      case 'Breeding':
        navigation.navigate('BreedingHome');
        break;
      case 'PetSitting':
        navigation.navigate('PetSittingHome');
        break;
      case 'ServiceLocator':
        navigation.navigate('ServiceLocator');
        break;
      default:
        navigation.navigate('MainMenu');
        break;
    }
  };

  const { width } = Dimensions.get("window");
  const baseUnit = width / 100;

  return (
    <CustomTabNavigator hiddenScreens={['WelcomeScreen1', 'WelcomeScreen2', 'WelcomeScreen3', 'SignIn', 'SignUp', 'AdoptionHome', 'FilterScreen']}>
      <Tab.Screen
        name="HOME"
        component={HomeNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName = 'home';
            let IconComponent = Ionicons;
            size = baseUnit * 7;
            return <IconComponent name={iconName} size={size} color={color} />;
          },
          tabBarButton: (props) => (
            <TouchableOpacity {...props} onPress={navigateToHomeScreen} />
          ),
          tabBarActiveTintColor: '#FFCC80',
          tabBarInactiveTintColor: 'white',
          tabBarLabelStyle: { fontSize: baseUnit * 2.5, fontFamily: "Fredoka_500Medium" },
          tabBarStyle: { backgroundColor: '#775227', height: "10%", paddingTop: "2%", paddingBottom: "5%"}
        }}
      />
      <Tab.Screen
        name="CHATS"
        component={ChatsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName = 'chatbubbles';
            let IconComponent = Ionicons;
            size = baseUnit * 7;
            return <IconComponent name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#FFCC80',
          tabBarInactiveTintColor: 'white',
          tabBarLabelStyle: { fontSize: baseUnit * 2.5, fontFamily: "Fredoka_500Medium" },
          tabBarStyle: { backgroundColor: '#775227', height: "10%", paddingTop: "2%", paddingBottom: "5%"}
        }}
      />
      <Tab.Screen
        name="MainMenu"
        component={MainMenu}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName = 'earth';
            let IconComponent = Ionicons;
            size = baseUnit * 11;
            return <IconComponent name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#FFCC80',
          tabBarInactiveTintColor: 'white',
          tabBarLabelStyle: { fontSize: baseUnit * 2.5, fontFamily: "Fredoka_500Medium" },
          tabBarStyle: { backgroundColor: '#775227', height: "10%", paddingTop: "2%", paddingBottom: "5%"}
        }}
      />
      <Tab.Screen
        name="MY LIST"
        component={ListNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName = 'heart';
            let IconComponent = FontAwesome;
            size = baseUnit * 7;
            return <IconComponent name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#FFCC80',
          tabBarInactiveTintColor: 'white',
          tabBarLabelStyle: { fontSize: baseUnit * 2.5, fontFamily: "Fredoka_500Medium" },
          tabBarStyle: { backgroundColor: '#775227', height: "10%", paddingTop: "2%", paddingBottom: "5%"}
        }}
      />
      <Tab.Screen
        name="PROFILE"
        component={ProfileNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName = 'user';
            let IconComponent = FontAwesome;
            size = baseUnit * 7;
            return <IconComponent name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#FFCC80',
          tabBarInactiveTintColor: 'white',
          tabBarLabelStyle: { fontSize: baseUnit * 2.5, fontFamily: "Fredoka_500Medium" },
          tabBarStyle: { backgroundColor: '#775227', height: "10%", paddingTop: "2%", paddingBottom: "5%"}
        }}
      />
    </CustomTabNavigator>
  );
};

export default MainMenuNavigator;
