import * as SecureStore from 'expo-secure-store';

const FIRST_LAUNCH_KEY = 'hasLaunched';

export const setAppLaunched = async () => {
  try {
    await SecureStore.setItemAsync(FIRST_LAUNCH_KEY, 'true');
  } catch (error) {
    console.error("Failed to set app as launched:", error);
  }
};

export const checkIfFirstLaunch = async () => {
  try {
    const hasLaunched = await SecureStore.getItemAsync(FIRST_LAUNCH_KEY);
    return hasLaunched === null;
  } catch (error) {
    console.error("Failed to check if app has launched:", error);
    return true; // Default to true if we cannot access the secure store
  }
};