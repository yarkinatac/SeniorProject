import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Alert,
  Dimensions
} from "react-native";
import CustomHeader from "../../components/header/HeaderSettings";
import PetCard from "../../components/cards/PetCard";
import usePetsData from "../../hooks/usePetsData";
import FilterButton from "../../components/buttons/FilterButton";
import { useAuth } from "../../hooks/useAuth";

const BecomePetSitter = ({ navigation, route }) => {
  const { userToken } = useAuth();
  const { petsData, isLoading, error } = usePetsData(userToken);
  const [filteredPets, setFilteredPets] = useState([]);

  useEffect(() => {
    setFilteredPets(petsData);
  }, [petsData]);

  useEffect(() => {
    if (route.params?.filters) {
      applyFilters(route.params.filters);
    }
  }, [route.params?.filters, petsData]);

  const applyFilters = (filters) => {
    const filtered = petsData.filter((pet) => {
      let matches = true;
      if (
        filters.petType &&
        pet.type.toLowerCase() !== filters.petType.toLowerCase()
      ) {
        matches = false;
      }
      if (
        filters.selectedBreed &&
        pet.breed.toLowerCase() !== filters.selectedBreed.toLowerCase()
      ) {
        matches = false;
      }
      if (
        filters.sex.length > 0 &&
        !filters.sex.includes(pet.gender.toLowerCase())
      ) {
        matches = false;
      }
      if (
        filters.size.length > 0 &&
        !filters.size.includes(pet.size.toLowerCase())
      ) {
        matches = false;
      }
      if (
        filters.shedding.length > 0 &&
        !filters.shedding.includes(pet.shedding.toLowerCase())
      ) {
        matches = false;
      }
      if (
        filters.personality.length > 0 &&
        !filters.personality.some((trait) => pet.personality.includes(trait))
      ) {
        matches = false;
      }
      return matches;
    });
    setFilteredPets(filtered);
  };

  if (isLoading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#A6573E" />
      </View>
    );
  }

  if (error) {
    Alert.alert("Error", "Failed to fetch pets data.");
    return null;
  }

  return (
    <View style={styles.container}>
      <CustomHeader />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Furry Friends Waiting for Your Care</Text>
        <Text style={styles.subtitle}>Choose a Furry Friend to Care For</Text>
      </View>
      <View style={styles.filterButtonsContainer}>
        <Text style={styles.browsePets}>Browse Pets</Text>
        <FilterButton onPress={() => navigation.navigate("FilterScreen")} />
      </View>
      <FlatList
        data={filteredPets.length > 0 ? filteredPets : petsData}
        renderItem={({ item }) => (
          <PetCard
            petName={item.name}
            petBreed={item.breed}
            petImage={{ uri: item.photos[0]?.photoUrl }}
            gender={item.gender}
            onSelect={() =>
              navigation.navigate("PetInformation", { pet: item })
            }
            buttonText="View Details"
          />
        )}
        keyExtractor={(item) => item.petId.toString()}
      />
    </View>
  );
};
const { width } = Dimensions.get("window");
const baseUnit = width / 100;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4DFBA",
  },
  titleContainer: {
    marginLeft: "3%",
    marginTop: "5%",
  },
  title: {
    fontFamily: "Fredoka_600SemiBold",
    fontSize: baseUnit * 8,
    marginBottom: baseUnit,
  },
  subtitle: {
    fontFamily: "Fredoka_400Regular",
    fontSize: baseUnit * 5,
  },
  filterButtonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal:baseUnit * 5,
    marginTop: baseUnit * 7,
    marginBottom: baseUnit * 2,
  },
  browsePets: {
    fontFamily: "Fredoka_500Medium",
    fontSize: baseUnit * 6
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default BecomePetSitter;
