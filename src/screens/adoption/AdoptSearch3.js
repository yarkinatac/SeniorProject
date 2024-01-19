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
import imageExample from "../../assets/images/home/breeding.png";
import BackButton from "../../assets/images/icons/back-button.png";

const AdoptSearch3 = ({ navigation }) => {
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

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}

      >
        <Image source={BackButton} style={styles.backbutton} />
      </TouchableOpacity>
      <Image source={imageExample} style={styles.image} />
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
        <View style={styles.bioContainer}></View>
        <Text style={styles.detailTitle}>Bio: </Text>
        <Text style={styles.bio}>{pet.bio}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Edit Details</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Add To List</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const { width, height } = Dimensions.get("window");
const baseUnit = width / 100;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: baseUnit * 15,
    backgroundColor: "#F4DFBA"
  },
  backbutton: {
    marginLeft: baseUnit * 3,
    marginBottom: baseUnit * 2,
  },
  image: {
    width: "90%",
    height: height * 0.15, // 25% of screen height
    borderRadius: 25,
    borderWidth: 1.5,
    borderColor: "#A6573E",
    borderStyle: "solid",
    alignSelf: "center",
    resizeMode: "cover"
  },
  detailsContainer: {
    marginVertical: baseUnit * 4,
    padding: baseUnit * 4,
    paddingHorizontal: baseUnit * 11,
    paddingBottom: baseUnit * 50,
    paddingTop: baseUnit * 8,
    backgroundColor: "#EBAF78",
    borderTopEndRadius: 25,
    borderTopStartRadius: 25,
  },
  name: {
    fontFamily:"Fredoka_600SemiBold",
    fontSize: baseUnit * 7, // Dynamic font size
    fontWeight: "bold",
    marginBottom: baseUnit * 5,
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: baseUnit * 3,
  },
  detailTitle: {
    fontFamily:"Fredoka_500Medium",
    fontSize: baseUnit * 4,
    fontWeight: "bold",
    color: "#A6573E",
    marginRight: baseUnit * 7,
  },
  detailValue: {
    fontFamily:"Fredoka_400Regular",
    fontSize: baseUnit * 4,
  },
  personalityContainer: {
    flexDirection: "row",
    marginTop: baseUnit * 1.2,
    flexWrap: "wrap", // Allow traits to wrap to the next line if they don't fit
  },
  traitItem: {
    backgroundColor: "#F4DFBA",
    borderRadius: baseUnit * 2,
    marginRight: baseUnit * 0.8,
    paddingHorizontal: baseUnit * 1.5,
    paddingVertical: baseUnit * 0.8,
    marginBottom: baseUnit * 0.8, // Spacing between rows
  },
  traitText: {
    fontFamily:"Fredoka_400Regular",
    color: "#000000",
    fontSize: baseUnit * 4,
  },
  bioContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    marginBottom: baseUnit * 3,
  },
  bio: {
    fontFamily:"Fredoka_400Regular",
    marginTop: baseUnit * 1.2,
    fontSize: baseUnit * 4,
    marginBottom: baseUnit * 4,
  },
  buttonContainer: {
    marginTop: baseUnit * 4,
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#A6573E",
    borderRadius: baseUnit * 2,
    padding: baseUnit * 5,
    paddingHorizontal:baseUnit * 5,
    alignItems: "center",
    marginHorizontal: baseUnit * 5,
  },
  buttonText: {
    fontFamily:"Fredoka_500Medium",
    color: "#ffffff",
    fontSize: baseUnit * 4,
  },
});
export default AdoptSearch3;
