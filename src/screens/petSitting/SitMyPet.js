import React from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  Dimensions,
} from "react-native";
import PetCard from "../../components/cards/PetCard";
import CustomHeader from "../../components/header/HeaderSettings";

// Mock data
const pets = [
  {
    id: "1",
    name: "Yokai",
    breed: "Shiba-Inu",
    gender: "male",
    image: require("../../assets/images/profile/dogImage.png"), // Replace with your actual image path
  },
  {
    id: "2",
    name: "Spice",
    breed: "Pomeranian",
    gender: "female",
    image: require("../../assets/images/profile/dogImage.png"), // Replace with your actual image path
  },
  // Add more pets here
];

const SitMyPet = ({navigation}) => {

  return (
    <View style={styles.container}>
        <CustomHeader />
      <View>
        <Text style={styles.label}>My Pets</Text>
      </View>
      <ScrollView>
        {pets.map((pet) => (
          <PetCard
            key={pet.id}
            petName={pet.name}
            petBreed={pet.breed}
            petImage={pet.image}
            gender={pet.gender}
            buttonText="More"
            onSelect={() => {
              navigation.navigate("PetSitterDatePicker")
            }}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const { width, height } = Dimensions.get("window");
const baseUnit = width / 100;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4DFBA", 
  },
  label: {
    marginTop: baseUnit * 6,
    marginBottom: baseUnit * 7,
    fontFamily:"Fredoka_600SemiBold",
    fontSize: baseUnit * 7,
    marginLeft: baseUnit * 7,
  },
});

export default SitMyPet;