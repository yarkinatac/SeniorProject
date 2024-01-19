// src/components/cards/ServiceCard.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ServiceCard = ({ service, onPress }) => {
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={onPress}>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{service.name}</Text>
        <View style={styles.ratingAndReviews}>
          <Text style={styles.rating}>{'⭐'.repeat(service.rating)}</Text>
          <Text style={styles.reviews}>{`(${service.reviews} reviews)`}</Text>
        </View>
        <Text style={styles.details}>{`${service.experience} years of experience`}</Text>
        <Text style={styles.details}>{`${service.distance} km`}</Text>
        <Text style={styles.hours}>{`Open: ${service.hours}`}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    alignSelf:"center",
    flexDirection: 'row',
    width: "70%",
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginVertical: 20,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  ratingAndReviews: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: 14,
    color: '#FFD700', 
    marginRight: 4,
  },
  reviews: {
    fontFamily:"Fredoka_500Medium",
    fontSize: 14,
    color: '#646464',
  },
  details: {
    fontFamily:"Fredoka_400Regular",
    fontSize: 14,
    color: '#646464',
    marginTop: 4,
  },
  hours: {
    fontFamily:"Fredoka_400Regular",
    fontSize: 14,
    color: '#646464',
    marginTop: 4,
  },
});

export default ServiceCard;
