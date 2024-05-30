import { useState, useEffect } from 'react';
import axios from 'axios';

const usePetsData = (token) => {
  const [petsData, setPetsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPetsData = async (retryCount = 0) => {
    try {
      const response = await axios.get('https://petsconapi3.azurewebsites.net/api/v2/Pet', {
        headers: { 
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      setPetsData(response.data);
    } catch (err) {
      console.error(`Error fetching pets data: Attempt ${retryCount + 1}`, err.response ? err.response.data : err.message);
      if (retryCount < 3) {
        setTimeout(() => {
          fetchPetsData(retryCount + 1);
        }, 1000);
      } else {
        setError(err);
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (token) {
      fetchPetsData();
    }
  }, [token]);

  return { petsData, isLoading, error };
};

export default usePetsData;
