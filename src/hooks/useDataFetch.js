import { useState, useEffect } from 'react';
import axios from 'axios';

export function useDataFetch(url, initialData) {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}
