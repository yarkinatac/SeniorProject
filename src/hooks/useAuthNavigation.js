import { useNavigation } from '@react-navigation/native';
import { useAuth } from './useAuth';

export const useAuthNavigation = () => {
  const navigation = useNavigation();
  const { isSignedIn } = useAuth();

  const handleNavigation = (screenName, params) => {
    if (isSignedIn) {
      navigation.navigate(screenName, params);
    } else {
      navigation.navigate('AuthNavigator', { screen: 'SignIn' });
    }
  };

  return { handleNavigation };
};
