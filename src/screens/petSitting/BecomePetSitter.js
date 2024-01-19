// BecomePetSitterScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import PetAdvert from "../../components/buttons/PetAdvert";
import FilterImage from "../../assets/images/icons/filter-icon.png"
import imageExample from "../../assets/images/home/breeding.png"

// Dummy data for pets, this should come from your actual data source
const petsData = [
  { id: "1", name: "Buddy", type: "Dog", imageUrl: imageExample },
  { id: "2", name: "Max", type: "Dog", imageUrl: imageExample },
  { id: "3", name: "Whiskers", type: "Cat", imageUrl: imageExample },
  // ... other pets
];

const BecomePetSitter = ({ navigation }) => {
  const [selectedType, setSelectedType] = useState("Dog");
  const [petsToShow, setPetsToShow] = useState(
    petsData.filter((pet) => pet.type === "Dog")
  );

  const filterPets = (type) => {
    setSelectedType(type);
    setPetsToShow(petsData.filter((pet) => pet.type === type));
  };

  // Render each pet as a button in a FlatList
  const renderPetButton = ({ item }) => (
    <TouchableOpacity
      style={styles.petButton}
      onPress={() => {
        /* Navigate to pet details */
      }}
    >
      <Image source={{ uri: item.imageUrl }} style={styles.petImage} />
      <Text style={styles.petName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose a pet</Text>
      <Text style={styles.subtitle}>Filter</Text>
      <View style={styles.filterContainer}>
        <TouchableOpacity
          onPress={() => {}}
          style={[
            styles.filterButton,
          ]}
        >
          <Image source={FilterImage} style={styles.filterButton}></Image>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => filterPets("Dog")}
          style={[
            styles.dogButton,
            selectedType === "Dog" && styles.selectedButton,
          ]}
        >
          <Text style={styles.filterText}>Dogs</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => filterPets("Cat")}
          style={[
            styles.catButton,
            selectedType === "Cat" && styles.selectedButton,
          ]}
        >
          <Text style={styles.filterText}>Cats</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={petsToShow}
        renderItem={({ item }) => (
          <PetAdvert
            name={item.name}
            imageUrl={item.imageUrl}
            onPress={() => {
              /* Handle the pet selection */
            }}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: "5%",
    backgroundColor: "#F4DFBA",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "flex-start",
    marginVertical: "5%",
    marginTop: "20%",
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginVertical: "3%",
    borderBottomWidth: 1,
    paddingBottom: 24,
    borderBottomColor: '#000000'
  },
  filterButton: {
    backgroundColor: "#A6573E", // Adjust to match your theme
    borderRadius: 20,
    padding: '2%',
    marginHorizontal: '1%',
    alignSelf: 'center'
    
  },
  dogButton: {
    flexDirection: "row",
    backgroundColor: "#EBAF78", // Adjust to match your theme
    borderRadius: 20,
    padding: '2%',
    marginHorizontal: '2%',
  },
  catButton: {
    flexDirection: "row",
    backgroundColor: "#EBAF78", // Adjust to match your theme
    borderRadius: 20,
    padding: '2%',
    marginHorizontal: '2%',
  },
  filterText: {
    color: 'white',
    fontSize: 18,
    alignSelf: 'center',
    paddingHorizontal: '5%'
  },
  selectedButton: {
    backgroundColor: "#A6573E", 
  },
});

export default BecomePetSitter;
