import React, { useState, useEffect } from "react";
import { View, Dimensions, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from "react-native";
import { useFlow } from "../../context/FlowContext";
import * as Location from 'expo-location';
import axios from "axios";
import Header from "../../components/header/HeaderSettings";
import ServiceCard from "../../components/cards/ServiceCard";
import LocServiceNav from "../../components/nav/LocServiceNav";
import Divider from "../../components/dividers/Divider";

const GOOGLE_MAPS_API_KEY = "AIzaSyCUuOkxWTSfeGkVuxmp6DwxRibd9g4DbJ8"; // Replace with your actual API key

const ServiceLocator = () => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [activeService, setActiveService] = useState("Veterinaries");
  const [showAllNearby, setShowAllNearby] = useState(false);
  const { setCurrentFlow } = useFlow();
  
  useEffect(() => {
    setCurrentFlow("MainMenu");
  }, [setCurrentFlow]);

  const [servicesData, setServicesData] = useState({
    Veterinaries: { nearby: [] },
    Groomers: { nearby: [] },
    PetShops: { nearby: [] },
    Boardings: { nearby: [] }
  });

  useEffect(() => {
    const requestLocationPermission = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert(
          "Location Permission Denied",
          "We need access to your location to show nearby services. Please enable location services in your settings."
        );
        return;
      }

      fetchCurrentLocation();
    };

    requestLocationPermission();
  }, []);

  const fetchCurrentLocation = async () => {
    try {
      const location = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.High });
      const { latitude, longitude } = location.coords;
      setCurrentLocation({ latitude, longitude });
      fetchNearbyServices(latitude, longitude);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchNearbyServices = async (latitude, longitude) => {
    try {
      const requests = [
        axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=5000&type=veterinary_care&key=${GOOGLE_MAPS_API_KEY}`),
        axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=5000&type=pet_store&key=${GOOGLE_MAPS_API_KEY}`),
        axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=5000&keyword=pet+boarding&key=${GOOGLE_MAPS_API_KEY}`),
        axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=5000&keyword=pet+grooming&key=${GOOGLE_MAPS_API_KEY}`)
      ];
      
      const responses = await Promise.all(requests);

      const newServicesData = {
        Veterinaries: { nearby: responses[0].data.results.map(service => ({
          ...service,
          type: "Veterinary Care",
          photoUrl: service.photos ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${service.photos[0].photo_reference}&key=${GOOGLE_MAPS_API_KEY}` : null
        })) },
        Groomers: { nearby: responses[3].data.results.map(service => ({
          ...service,
          type: "Pet Grooming",
          photoUrl: service.photos ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${service.photos[0].photo_reference}&key=${GOOGLE_MAPS_API_KEY}` : null
        })) },
        PetShops: { nearby: responses[1].data.results.map(service => ({
          ...service,
          type: "Pet Store",
          photoUrl: service.photos ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${service.photos[0].photo_reference}&key=${GOOGLE_MAPS_API_KEY}` : null
        })) },
        Boardings: { nearby: responses[2].data.results.map(service => ({
          ...service,
          type: "Pet Boarding",
          photoUrl: service.photos ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${service.photos[0].photo_reference}&key=${GOOGLE_MAPS_API_KEY}` : null
        })) },
      };

      setServicesData(newServicesData);
    } catch (error) {
      console.error(error);
    }
  };

  const handleServiceSelect = (serviceType) => {
    setActiveService(serviceType);
    setShowAllNearby(false);
  };

  const renderServiceCards = (services) => (
    <View>
      <Divider />
      <View style={styles.sectionContainer}>
        <View style={styles.containerTitle}>
          <Text style={styles.sectionTitle}>Nearby {activeService}</Text>
          <TouchableOpacity onPress={() => setShowAllNearby(!showAllNearby)}>
            <Text style={styles.seeAll}>{showAllNearby ? "Show less" : "See all"}</Text>
          </TouchableOpacity>
        </View>
        {services.nearby.slice(0, showAllNearby ? services.nearby.length : 3).map((service, index) => (
          <ServiceCard
            key={index}
            service={{
              name: service.name,
              rating: service.rating,
              distance: service.vicinity,
              reviews: service.user_ratings_total,
              hours: service.opening_hours ? (service.opening_hours.open_now ? "Open now" : "Closed") : "N/A",
              photoUrl: service.photoUrl,
              geometry: service.geometry,
              formatted_phone_number: service.formatted_phone_number,
              description: service.description, 
              type: service.type,
            }}
            onPress={() => {
              /* navigate to service detail */
            }}
          />
        ))}
      </View>
    </View>
  );

  return (
      <View style={styles.container}>
        <Header />
        <LocServiceNav onServiceSelect={handleServiceSelect} activeService={activeService} />
        <ScrollView>
          {servicesData[activeService] && renderServiceCards(servicesData[activeService])}
        </ScrollView>
      </View>
  );
};

const { width,height } = Dimensions.get("window");
const baseUnit = width / 100;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#F4DFBA",
  },
  containerTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: baseUnit * 5,
    marginTop: baseUnit * 7,
  },
  sectionTitle: {
    fontFamily: "Fredoka_500Medium",
    fontSize: baseUnit * 4.8,
  },
  seeAll: {
    color: "#646464",
    marginTop: baseUnit,
    fontFamily: "Fredoka_400Regular",
    fontSize: baseUnit * 4,
  },
});

export default ServiceLocator;
