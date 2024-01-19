import AsyncStorage from '@react-native-async-storage/async-storage';

const FIRST_LAUNCH_KEY = 'hasLaunched';

export const setAppLaunched = async () => {
  try {
    await AsyncStorage.setItem(FIRST_LAUNCH_KEY, 'true');
  } catch (error) {
    // Handle errors here
  }
};

export const checkIfFirstLaunch = async () => {
  try {
    const hasLaunched = await AsyncStorage.getItem(FIRST_LAUNCH_KEY);
    return hasLaunched === null;
  } catch (error) {
    // Handle errors here
    return false;
  }
};
