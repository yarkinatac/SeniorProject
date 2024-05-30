import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import MockPhoto from "../../assets/images/profile/dogImage.png";
import CustomHeader from "../../components/header/HeaderShare";
import SecondaryButton from "../../components/buttons/SecondaryButton";

const PetProfile = ({ navigation }) => {
  // Assuming there's a pet object from a state or prop
  const pet = {
    name: "Spice",
    age: "9 Years",
    breed: "Pomeranian Boo",
    sex: "Female",
    size: "X Small / Small",
    shedding: "Low / Medium",
    healthInfo: "Bloody Diarrhea",
    personality: ["Energetic", "Affectionate"],
    bio: "Hi! I’m Spice, A Super Well Trained And Loving Dog. Not A Huge Fan Of Walks But I Love To Cuddle On The Couch!",
  };

  const handleEditDetailsPress = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "PetProfileEdit" }],
    });
  };
  return (
    <View style={styles.container}>
      <CustomHeader />
      <Image source={MockPhoto} style={styles.image} />
      <ScrollView style={styles.detailsContainer}>
        <View style={styles.detailsContainer}>
          <Text style={styles.name}>{pet.name}</Text>
          <View style={styles.detailRow}>
            <Text style={styles.detailTitle}>Age: </Text>
            <Text style={styles.detailValue}>{pet.age}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailTitle}>Breed: </Text>
            <Text style={styles.detailValue}>{pet.breed}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailTitle}>Sex: </Text>
            <Text style={styles.detailValue}>{pet.sex}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailTitle}>Size: </Text>
            <Text style={styles.detailValue}>{pet.size}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailTitle}>Shedding: </Text>
            <Text style={styles.detailValue}>{pet.shedding}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailTitle}>Health Info: </Text>
            <Text style={styles.detailValue}>{pet.healthInfo}</Text>
          </View>
          <View style={styles.personalityContainer}>
            <Text style={styles.detailTitle}>Personality: </Text>
            {pet.personality.map((trait) => (
              <View key={trait} style={styles.traitItem}>
                <Text style={styles.traitText}>{trait}</Text>
              </View>
            ))}
          </View>
          <View style={styles.bioContainer}>
            <Text style={styles.detailTitle}>Bio: </Text>
            <Text style={styles.bio}>{pet.bio}</Text>
          </View>

          <View style={styles.buttonContainer}>
            <SecondaryButton
              title={"Edit Details"}
              onPress={handleEditDetailsPress}
            />
          </View>
        </View>
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
  image: {
    width: width,
    height: height * 0.3, // 25% of screen height
    alignSelf: "center",
    resizeMode: "cover",
  },
  detailsContainer: {
    padding: baseUnit * 4,
    backgroundColor: "#876445",
    borderRadius: 20,
    marginTop: -20,
  },
  name: {
    fontFamily: "Fredoka_600SemiBold",
    fontSize: baseUnit * 8, // Dynamic font size
    fontWeight: "bold",
    marginBottom: baseUnit * 5,
    color: "white",
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: baseUnit * 3,
  },
  detailTitle: {
    fontFamily: "Fredoka_500Medium",
    fontSize: baseUnit * 4.8,
    fontWeight: "bold",
    color: "#EBAF78",
    marginRight: baseUnit * 7,
  },
  detailValue: {
    fontFamily: "Fredoka_400Regular",
    fontSize: baseUnit * 4,
    color: "white",
  },
  personalityContainer: {
    flexDirection: "row",
    marginTop: baseUnit * 1.2,
    gap: baseUnit,
  },
  traitItem: {
    backgroundColor: "#EBAF78",
    borderRadius:  5,
    marginRight: baseUnit * 0.8,
    paddingHorizontal: baseUnit * 1.5,
    paddingVertical: baseUnit * 0.8,
    marginBottom: baseUnit * 0.8, // Spacing between rows
  },
  traitText: {
    fontFamily: "Fredoka_400Regular",
    color: "#000000",
    fontSize: baseUnit * 4,
    color: "white",
  },
  bioContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    marginBottom: baseUnit * 3,
  },
  bio: {
    fontFamily: "Fredoka_400Regular",
    marginTop: baseUnit * 1.2,
    fontSize: baseUnit * 4,
    marginBottom: baseUnit * 4,
    color: "white",
  },
  buttonContainer: {
    marginTop: baseUnit * 4,
    justifyContent: "center",
    marginBottom: baseUnit * 20,
  },
});
export default PetProfile;
