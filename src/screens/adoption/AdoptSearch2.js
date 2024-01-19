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

const AdoptSearch2 = ({ navigation }) => {
  const renderPetCard = ({ item }) => (
    <PetCard
      petName={item.name}
      petBreed={item.breed}
      gender={item.gender}
      petImage={item.petImage}
      onSelect={() => {
        navigation.navigate("AdoptSearch3")
      }}
      buttonText="Select"
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Ready to adopt your furry friend?</Text>
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
    paddingVertical: baseUnit * 5,
  },
  textContainer: {
    marginLeft: width * 0.05, 
    marginTop: baseUnit * 15, 
    marginBottom: baseUnit * 5,
  },
  title: {
    fontFamily:"Fredoka_600SemiBold",
    fontSize: baseUnit * 7,
    marginVertical: baseUnit, 
  },
  subtitle: {
    fontFamily:"Fredoka_500Medium",
    fontSize: baseUnit * 5, 
    marginVertical: baseUnit * 5,
    marginBottom: baseUnit * 15, 
  },
});

export default AdoptSearch2;
