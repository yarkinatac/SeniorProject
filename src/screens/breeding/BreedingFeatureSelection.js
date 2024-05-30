import React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import Header from "../../components/header/HeaderSettings";
import FeatureOptionButton from "../../components/buttons/FeatureOptionButton";
import PetGroup from "../../assets/images/adoption/pet-group-2.png";
import CautiousDog from "../../assets/images/adoption/cautious-dog.png";

const BreedingPetSelection = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>List Your Pet</Text>
        <Text style={styles.subtitle}>
          Do you want to list an existing pet or add a new pet to your profile
          for breeding?{" "}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <FeatureOptionButton
          imageSource={PetGroup}
          label="Select From My Pets"
          onPress={() => navigation.navigate("ProfileMyPets")}
          textStyle={styles.buttonText}
          imageStyle={styles.buttonImage}
        />
        <FeatureOptionButton
          imageSource={CautiousDog}
          label="Add a New Pet"
          onPress={() => {
            navigation.navigate("PetSelection");
          }}
        />
      </View>
    </View>
  );
};
const { width, height } = Dimensions.get("window");
const baseUnit = width / 100;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4DFBA",
    alignItems: "center",
  },
  titleContainer: {
    marginLeft: "3%",
    marginVertical: "5%",
    alignSelf: "flex-start",
  },
  title: {
    fontFamily: "Fredoka_600SemiBold",
    fontSize: baseUnit * 8,
    color:"#323232"
  },
  subtitle:{
    fontFamily: "Fredoka_400Regular",
    fontSize: baseUnit * 5,
    color:"#535353",
    marginTop:5
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    paddingHorizontal: baseUnit * 5,
    gap: baseUnit * 8,
    marginTop: baseUnit * 7
  },

});

export default BreedingPetSelection;
