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

const SearchBreed = ({ navigation }) => {
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
      <Text style={styles.title}>Ready to breed your furry friend?</Text>
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

import { Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');
const baseUnit = width / 100;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: baseUnit * 5, // 5% of screen width
    backgroundColor: "#F4DFBA",
    justifyContent: "flex-end",
},
title: {
fontSize: baseUnit * 6, // Dynamic font size
fontWeight: "bold",
textAlign: "flex-start",
marginBottom: baseUnit * 5,
marginTop: height * 0.1,
},
subtitle: {
fontSize: baseUnit * 4, // Dynamic font size
fontWeight: "bold",
},
filterContainer: {
flexDirection: "row",
justifyContent: "flex-start",
marginVertical: baseUnit * 3, // 3% of screen width
borderBottomWidth: 1,
paddingBottom: baseUnit * 2.4, // 2.4% of screen width
borderBottomColor: '#000000',
},
filterButton: {
backgroundColor: "#A6573E",
borderRadius: baseUnit * 2, // Dynamic border radius
padding: baseUnit * 2, // Dynamic padding
marginHorizontal: baseUnit, // Dynamic horizontal margin
alignSelf: 'center',
},
dogButton: {
flexDirection: "row",
backgroundColor: "#EBAF78",
borderRadius: baseUnit * 2, // Dynamic border radius
padding: baseUnit * 2, // Dynamic padding
marginHorizontal: baseUnit * 2, // Dynamic horizontal margin
},
catButton: {
flexDirection: "row",
backgroundColor: "#EBAF78",
borderRadius: baseUnit * 2, // Dynamic border radius
padding: baseUnit * 2, // Dynamic padding
marginHorizontal: baseUnit * 2, // Dynamic horizontal margin
},
filterText: {
color: 'white',
fontSize: baseUnit * 3, // Dynamic font size
alignSelf: 'center',
paddingHorizontal: baseUnit * 5, // Dynamic horizontal padding
},
selectedButton: {
backgroundColor: "#A6573E",
},
// Add any additional styles as needed
});

export default SearchBreed;
