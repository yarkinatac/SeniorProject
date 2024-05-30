import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import PetCard from "../../components/cards/PetCard";
import FilterImage from "../../assets/images/adoption/adopt-family.png";
import usePetsData from "../../hooks/usePetsData";

const SearchBreed = ({ navigation }) => {
  const { petsData, isLoading, error } = usePetsData();
  const [selectedType, setSelectedType] = useState("Dog");
  const [petsToShow, setPetsToShow] = useState([]);

  useEffect(() => {
    setPetsToShow(petsData.filter((pet) => pet.type === selectedType));
  }, [petsData, selectedType]);

  const filterPets = (type) => {
    setSelectedType(type);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ready to breed your furry friend?</Text>
      <Text style={styles.subtitle}>Filter</Text>
      <View style={styles.filterContainer}>
        <TouchableOpacity onPress={() => {}} style={[styles.filterButton]}>
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
          <PetCard
            petName={item.name}
            petBreed={item.breed}
            petImage={{ uri: item.photos[0].photoUrl }}
            gender={item.gender}
            onSelect={() => {
              /* Handle the pet selection */
            }}
            buttonText="View Details"
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};



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
fontFamily:"Fredoka_600SemiBold",
fontWeight: "bold",
textAlign: "flex-start",
marginBottom: baseUnit * 5,
marginTop: height * 0.1,
},
subtitle: {
fontFamily:"Fredoka_500Medium",
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
borderRadius:  6, // Dynamic border radius
padding: baseUnit * 2, // Dynamic padding
marginHorizontal: baseUnit, // Dynamic horizontal margin
alignSelf: 'center',
},
dogButton: {
flexDirection: "row",
backgroundColor: "#EBAF78",
borderRadius:  6, // Dynamic border radius
padding: baseUnit * 2, // Dynamic padding
marginHorizontal: baseUnit * 2, // Dynamic horizontal margin
},
catButton: {
flexDirection: "row",
backgroundColor: "#EBAF78",
borderRadius: 5, // Dynamic border radius
padding: baseUnit * 2, // Dynamic padding
marginHorizontal: baseUnit * 2, // Dynamic horizontal margin
},
filterText: {
fontFamily:"Fredoka_500Medium",
color: 'white',
fontSize: baseUnit * 3, // Dynamic font size
alignSelf: 'center',
paddingHorizontal: baseUnit * 5, // Dynamic horizontal padding
},
selectedButton: {
backgroundColor: "#A6573E",
},
});

export default SearchBreed;
