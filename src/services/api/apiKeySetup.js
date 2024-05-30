import { storeApiKey } from '../secureStorageService';
import * as SecureStore from 'expo-secure-store';
import { API_KEY_DOGS, API_KEY_CATS } from '@env';

const setupApiKeys = async () => {
  try {
    // Check if API keys are already stored
    const dogApiKey = await SecureStore.getItemAsync('API_KEY_DOGS');
    const catApiKey = await SecureStore.getItemAsync('API_KEY_CATS');

    // Store API keys if they are not already stored
    if (!dogApiKey) {
      await storeApiKey('API_KEY_DOGS', API_KEY_DOGS);
    }

    if (!catApiKey) {
      await storeApiKey('API_KEY_CATS', API_KEY_CATS);
    }
  } catch (error) {
    console.error('Error setting up API keys', error);
  }
};

export default setupApiKeys;