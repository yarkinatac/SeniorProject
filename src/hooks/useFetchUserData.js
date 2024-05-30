import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchUserData = (currentUserId) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('https://petsconapi3.azurewebsites.net/api/v2/Account');
        const currentUser = response.data.find(user => user.userId === currentUserId);
        setUser(currentUser);
      } catch (err) {
        console.error('Error fetching user data:', err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [currentUserId]);

  return { user, loading, error };
};

export default useFetchUserData;
