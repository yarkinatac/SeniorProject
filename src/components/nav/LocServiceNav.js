// src/components/navigation/LocServiceNavigator.js
import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from "react-native";

const LocServiceNav = ({ onServiceSelect, activeService }) => {

  const services = [
    {
      name: "Veterinary",
      icon: require("../../assets/images/icons/vet-icon.png"),
      screen: "VeterinaryServices",
    },
    {
      name: "Grooming",
      icon: require("../../assets/images/icons/grooming-icon.png"),
      screen: "GroomingServices",
    },
    {
      name: "Boarding",
      icon: require("../../assets/images/icons/boarding-icon.png"),
      screen: "BoardingServices",
    },
  ];

  return (
    <View style={styles.serviceContainer}>
      {services.map((service, index) => (
        <View key={index} style={styles.serviceItem}>
          <TouchableOpacity
            style={[styles.serviceButton, activeService === service.screen && styles.activeService]}
            onPress={() => onServiceSelect(service.screen)}
          >
            <Image source={service.icon} style={styles.serviceIcon} />
          </TouchableOpacity>
          <Text style={styles.serviceText}>{service.name}</Text>
        </View>
      ))}
    </View>
  );
};
const { width, height } = Dimensions.get("window");
const baseUnit = width / 100;

const styles = StyleSheet.create({
  serviceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  serviceItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  serviceButton: {
    width: 60, 
    height: 60, 
    borderRadius: 15, 
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D0D7D5', // Default background color for inactive services
  },
  activeService: {
    backgroundColor: '#775227', // Brown color for the active service
  },
  serviceIcon: {
    width: baseUnit * 8, // Adjust the size of your icon image
    height: baseUnit * 8, // Adjust the size of your icon image
  },
  serviceText: {
    fontFamily:"Fredoka_400Regular",
    marginTop: 4, // Space between the icon and the text
    fontSize: baseUnit * 3.5 ,
    color: '#000', // Text color
  },
});
export default LocServiceNav;