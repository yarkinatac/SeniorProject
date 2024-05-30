import React, { useContext } from "react";
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
import { UserContext } from "../../context/UserContext";

const ProfileMyPets = ({ navigation }) => {
  const { user, loading, error } = useContext(UserContext);


  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text>Error fetching data</Text>;
  }

  if (!user || !user.pets) {
    return <Text>No pets available</Text>;
  }

  return (
    <View style={styles.container}>
      <CustomHeader />
      <View>
        <Text style={styles.label}>My Pets</Text>
      </View>
      <ScrollView>
        {user.pets.map((pet) => (
          <PetCard
            key={pet.petId}
            petName={pet.name}
            petBreed={pet.breed}
            petImage={{ uri: pet.photos[0]?.photoUrl }}
            gender={pet.sex}
            buttonText="More"
            onSelect={() =>
              navigation.navigate("PetInformation", { pet: pet })
            }
          />
        ))}
      </ScrollView>
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
  label: {
    marginTop: baseUnit * 6,
    marginBottom: baseUnit * 7,
    fontFamily: "Fredoka_600SemiBold",
    fontSize: baseUnit * 7,
    marginLeft: baseUnit * 7,
  },
});

export default ProfileMyPets;
