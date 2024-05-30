import { useState } from 'react';
import axios from 'axios';
import { fetchApiKey } from '../services/secureStorageService';  // Token almak için import et

const usePetRegistration = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [registrationError, setRegistrationError] = useState(null);

  const registerPet = async (petData, photos) => {
    setIsSubmitting(true);
    setRegistrationError(null);
    try {
      const token = await fetchApiKey('token');  // Token'ı al
      console.log("User token:", token); // Token'ı logla
      if (!token) {
        throw new Error("User must be logged in to register a pet.");
      }

      const formData = new FormData();
      Object.keys(petData).forEach(key => {
        formData.append(key, petData[key]);
      });

      // AdvertType'ı hardcoded bir değer olarak ekleyin
      formData.append('advertType', '0');

      photos.forEach((photo, index) => {
        formData.append('photos', {
          uri: photo.uri,
          type: 'image/jpeg',
          name: `photo${index}.jpg`,
        });
      });


      const response = await axios.post(
        'https://petsconapi3.azurewebsites.net/api/v2/Pet/AddPet',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Response: ",response.data);        
      setIsSubmitting(false);
      return response.data;
    } catch (error) {
      console.log("Response: ",response.data);        

      setIsSubmitting(false);
      setRegistrationError(error.message);
      return null;
    }
  };

  return { registerPet, isSubmitting, registrationError };
};

export default usePetRegistration;