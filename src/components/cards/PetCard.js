import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Foundation } from '@expo/vector-icons';

const PetCard = ({ petName, petBreed, petImage, gender, onSelect, buttonText }) => {
  return (
    <View style={styles.cardContainer}>
      <Image source={petImage} style={styles.petImage} />
      <View style={styles.infoContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.petName}>{petName}</Text>
          <Foundation
            name={gender === "Male" ? "male-symbol" : "female-symbol"}
            size={baseUnit * 7}
            color="#A6573E"
            style={styles.genderIcon}
          />
        </View>
        <View style={styles.breedContainer}>
          <Text style={styles.petBreed}>{petBreed}</Text>
        </View>
        <TouchableOpacity onPress={onSelect} style={styles.selectButton}>
          <Text style={styles.selectButtonText}>{buttonText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const { width } = Dimensions.get("window");
const baseUnit = width / 100;

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    backgroundColor: "#EBAF78",
    borderRadius: baseUnit * 2, 
    padding: baseUnit * 2, 
    marginVertical: baseUnit * 3, 
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: baseUnit * 0.2 },
    shadowOpacity: 0.25,
    shadowRadius: baseUnit * 0.2,
    elevation: 3,
    width: width * 0.9,
    height: baseUnit * 40,
    marginHorizontal: width * 0.05, // Centering the card
  },
  petImage: {
    width: baseUnit * 35,
    height: baseUnit * 35,
    borderRadius: 5,
    borderWidth: 1.5,
    borderColor: "#A6573E",
  },
  infoContainer: {
    flex: 1,
    justifyContent: "space-around",
    marginLeft: baseUnit * 7,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between", // Align items to the left and right
    alignItems: "center",
    width: "100%", // Ensures the container takes full width of the parent
  },
  breedContainer: {
    marginBottom: baseUnit, // Dynamic margin
  },
  petName: {
    fontFamily:"Fredoka_600SemiBold",
    fontSize: baseUnit * 6, // Dynamic font size
    color: "#A6573E",
  },
  petBreed: {
    fontSize: baseUnit * 4,
    fontFamily:"Fredoka_500Medium",
    color: "#A6573E",
    marginBottom: baseUnit * 10,
  },
  genderIcon: {
    width: baseUnit * 7,
    height: baseUnit * 7,
  },
  selectButton: {
    backgroundColor: "#A6573E",
    borderRadius: 6,
    paddingVertical: baseUnit * 3,
    paddingHorizontal: baseUnit * 15,
    alignSelf: "flex-start",
  },
  selectButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: baseUnit * 4,
    fontFamily:"Fredoka_500Medium"
  },
});

export default PetCard;
