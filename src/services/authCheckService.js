import * as SecureStore from 'expo-secure-store';

export const signIn = async (credentials) => {
  try {
    // Perform API call...
    const response = await fetch('https://petsconapi.azurewebsites.net/api/v2/Account/Login', {
      method: 'POST',
      body: JSON.stringify(credentials),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    if (response.status === 200 && data) {
      await SecureStore.setItemAsync('token', data.token);
      return { success: true, token: data.token };
    }
  } catch (error) {
    return { success: false, message: error.message };
  }
};

export const isUserAuthenticated = async () => {
  try {
    const token = await SecureStore.getItemAsync('token');
    return token ? true : false;
  } catch (error) {
    return false;
  }
};

export const signOut = async () => {
  try {
    await SecureStore.deleteItemAsync('token');
    return true;
  } catch (error) {
    return false;
  }
};