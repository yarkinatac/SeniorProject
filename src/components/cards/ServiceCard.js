import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Modal, ScrollView, Linking, Platform, Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStars = rating % 1 !== 0 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStars;

  let stars = [];
  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <FontAwesome key={`full-${i}`} name="star" size={baseUnit * 5} color="#E9D51A" />
    );
  }
  if (halfStars) {
    stars.push(
      <FontAwesome key={`half`} name="star-half-empty" size={baseUnit * 5} color="#E9D51A" />
    );
  }
  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <FontAwesome key={`empty-${i}`} name="star-o" size={baseUnit * 5} color="#E9D51A" />
    );
  }
  return <View style={styles.starsContainer}>{stars}</View>;
};

const ServiceCard = ({ service }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handlePress = () => {
    setModalVisible(true);
  };

  const handleClose = () => {
    setModalVisible(false);
  };

  const handleGetDirections = () => {
    const lat = service.geometry.location.lat;
    const lng = service.geometry.location.lng;
    const url = Platform.select({
      ios: `maps://?daddr=${lat},${lng}`,
      android: `google.navigation:q=${lat},${lng}`
    });
    Linking.openURL(url);
  };

  return (
    <>
      <TouchableOpacity style={styles.cardContainer} onPress={handlePress}>
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{service.name}</Text>
          <View style={styles.ratingAndReviews}>
            {renderStars(service.rating)}
            <Text style={styles.reviews}>{`(${service.reviews} reviews)`}</Text>
          </View>
          <Text style={styles.details}>{service.distance}</Text>
          <Text style={[
              styles.hours, 
              { color: service.hours === 'Closed' ? 'red' : 'green' }
            ]}>
            {`${service.hours}`}
          </Text>
        </View>
        {service.photoUrl && (
          <Image source={{ uri: service.photoUrl }} style={styles.image} />
        )}
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleClose}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <ScrollView contentContainerStyle={styles.modalScrollView}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>{service.name}</Text>
              </View>
              {service.photoUrl && (
                <Image source={{ uri: service.photoUrl }} style={styles.modalImage} />
              )}
              {renderStars(service.rating)}
              <Text style={styles.modalReviews}>{`(${service.reviews} reviews)`}</Text>
              <Text style={styles.modalType}>{service.type}</Text>
              <Text style={[
              styles.modalHours, 
              { color: service.hours === 'Closed' ? 'red' : 'green' }
            ]}>
            {`${service.hours}`}
          </Text>

            </ScrollView>
            <TouchableOpacity style={styles.directionsButton} onPress={handleGetDirections}>
              <Text style={styles.directionsButtonText}>Get Directions</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

const { width, height } = Dimensions.get("window");
const baseUnit = width / 100;

const styles = StyleSheet.create({
  cardContainer: {
    alignSelf: "center",
    flexDirection: 'row',
    width: "70%",
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginVertical: baseUnit * 3,
    padding: baseUnit * 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    position: 'relative'
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingRight: baseUnit * 20, 
  },
  name: {
    fontFamily: "Fredoka_500Medium",
    fontSize: baseUnit * 4,
  },
  ratingAndReviews: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: baseUnit,
  },
  starsContainer: {
    flexDirection: 'row',
    marginBottom: baseUnit,
  },
  reviews: {
    fontFamily: "Fredoka_500Medium",
    fontSize: baseUnit * 3,
    color: '#646464',
    marginLeft: baseUnit,
  },
  details: {
    fontFamily: "Fredoka_400Regular",
    fontSize: baseUnit * 3.5,
    color: '#646464',
    marginTop: baseUnit,
  },
  hours: {
    fontFamily: "Fredoka_400Regular",
    fontSize: baseUnit * 3,
    color: '#646464',
    marginTop: 4,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
    position: 'absolute',
    top: 10,
    right: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: baseUnit *2,
    alignItems: "center",
  },
  modalScrollView: {
    alignItems: 'flex-start',
  },
  modalHeader: {
    width: '100%',
  },
  modalTitle: {
    fontSize: 18,
    marginBottom: 10,
    fontFamily: "Fredoka_500Medium",
    textAlign: 'left',
  },
  modalImage: {
    width: baseUnit * 70,
    height: baseUnit * 40,
    borderRadius: 10,
    marginBottom: 10,
  },
  modalReviews: {
    fontSize: 16,
    color: '#646464',
    marginVertical: 10,
    fontFamily: "Fredoka_400Regular",
    textAlign: 'left',
  },
  modalType: {
    fontSize: 16,
    color: '#646464',
    marginVertical: 4,
    fontFamily: "Fredoka_400Regular",
    textAlign: 'left',
  },
  modalDetails: {
    fontSize: 16,
    color: '#646464',
    marginVertical: 4,
    fontFamily: "Fredoka_400Regular",
    textAlign: 'left',
  },
  modalHours: {
    fontSize: 16,
    color: '#646464',
    marginVertical: 4,
    fontFamily: "Fredoka_400Regular",
    textAlign: 'left',
  },
  modalPhone: {
    fontSize: 16,
    color: '#646464',
    marginVertical: 4,
    fontFamily: "Fredoka_400Regular",
    textAlign: 'left',
  },
  modalDescription: {
    fontSize: 16,
    color: '#646464',
    marginVertical: 4,
    textAlign: 'left',
    fontFamily: "Fredoka_400Regular",
  },
  directionsButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#775227',
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
    alignSelf: 'center',
  },
  directionsButtonText: {
    fontSize: 16,
    color: '#FFF',
    fontFamily: "Fredoka_500Medium",
  },
  closeButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#646464',
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
    alignSelf: 'center',
  },
  closeButtonText: {
    fontSize: 16,
    color: '#FFF',
    fontFamily: "Fredoka_500Medium",
  },
});

export default ServiceCard;
