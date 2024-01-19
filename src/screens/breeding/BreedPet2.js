import React from "react";
import { View, StyleSheet, FlatList, Text, Dimensions } from "react-native";
import PetCard from "../../components/cards/PetCard"; // Update the import path as needed
import imageExample from "../../assets/images/home/breeding.png";

// Sample data, replace with your real data later
const petData = [
  {
    id: "1",
    name: "Whiskers",
    breed: "Siamese",
    gender: "female",
    petImage: imageExample,
  },
  {
    id: "2",
    name: "Spice",
    breed: "Russian Blue",
    gender: "male",
    petImage: imageExample,
  },
];

const { width } = Dimensions.get('window');
const baseUnit = width / 100;

const BreedPet2 = () => {
  const renderPetCard = ({ item }) => (
    <PetCard
      petName={item.name}
      petBreed={item.breed}
      gender={item.gender}
      petImage={item.petImage}
      onSelect={() => {
        // Handle the pet selection
      }}
      buttonText="Select"
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Ready to breed your furry friend?</Text>
      </View>
      <FlatList
        data={petData}
        renderItem={renderPetCard}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4DFBA",
    textAlign: "left",
    paddingVertical: baseUnit * 5, // Dynamic vertical padding
  },
  textContainer: {
    marginLeft: width * 0.05, // 10% of screen width
    marginTop: baseUnit * 15, // Dynamic margin top
    marginBottom: baseUnit * 5,
  },
  title: {
    fontFamily:"Fredoka_600SemiBold",
    fontSize: baseUnit * 6, // Dynamic font size
    fontWeight: "bold",
    marginVertical: baseUnit, // Dynamic vertical margin
  },
  subtitle: {
    fontSize: baseUnit * 1.6, // Dynamic font size
    fontWeight: "bold",
    marginVertical: baseUnit * 5,
    marginBottom: baseUnit * 15, // Dynamic bottom margin
  },
  // Add additional styles as needed
});

export default BreedPet2;
