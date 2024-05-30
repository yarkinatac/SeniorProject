import * as SecureStore from 'expo-secure-store';

export const storeApiKey = async (key, value) => {
  try {
    await SecureStore.setItemAsync(key, value);
  } catch (error) {
    console.error('Error storing API key', error);
  }
};

export const fetchApiKey = async (key) => {
  try {
    const result = await SecureStore.getItemAsync(key);
    if (result) {
      return result;
    } else {
      console.error('No value stored for key', key);
      return '';
    }
  } catch (error) {
    console.error('Error retrieving API key', error);
    return '';
  }
};
