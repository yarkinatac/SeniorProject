import React, { useEffect, useState } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import PetCard from "../../components/cards/PetCard";
import CustomHeader from "../../components/header/HeaderSettings";
import usePetsData from "../../hooks/usePetsData";
import { fetchApiKey } from "../../services/secureStorageService";

const ProfileFavPets = ({navigation}) => {
  const [token, setToken] = useState(null);
  const { petsData, isLoading, error } = usePetsData(token);
  const [selectedPets, setSelectedPets] = useState([]);

  useEffect(() => {
    const getToken = async () => {
      const storedToken = await fetchApiKey('token');
      setToken(storedToken);
    };

    getToken();
  }, []);

  useEffect(() => {
    if (petsData.length > 0) {
      setSelectedPets(petsData.slice(0, 2)); // Select only the first 2 pets
    }
  }, [petsData]);

  if (isLoading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text>Error fetching data</Text>;
  }

  if (selectedPets.length === 0) {
    return <Text>No pets available</Text>;
  }

  return (
    <View style={styles.container}>
      <CustomHeader />
      <View>
        <Text style={styles.label}>Favorite Pets</Text>
      </View>
      <ScrollView>
        {selectedPets.map((pet) => (
          <PetCard
            key={pet.petId}
            petName={pet.name}
            petBreed={pet.breed}
            petImage={{ uri: pet.photos[0]?.photoUrl || '' }} // Ensure the photoUrl is available
            gender={pet.sex}
            buttonText="More"
            onSelect={() =>
              navigation.navigate("PetInformation", { pet: pet })}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const { width } = Dimensions.get("window");
const baseUnit = (width / 375) * 4; // Base unit for responsive design
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4DFBA", // Replace with the actual background color from your design
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: baseUnit * 5,
    paddingTop: baseUnit * 15,
  },
  label: {
    marginTop: baseUnit * 6,
    marginBottom: baseUnit * 7,
    fontFamily: "Fredoka_600SemiBold",
    fontSize: baseUnit * 7,
    marginLeft: baseUnit * 7,
  },
});

export default ProfileFavPets;
