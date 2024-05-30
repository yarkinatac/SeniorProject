import React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import FeatureOptionButton from "../../components/buttons/FeatureOptionButton";
import PetSitting from "../../assets/images/sitting/pet-sitting.png";
import PetSitter from "../../assets/images/sitting/pet-sitter.png";
import CustomHeader from "../../components/header/HeaderSettings";

const PetSittingHome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <CustomHeader />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Pet Sitting Options</Text>
        <Text style={styles.subtitle}>
          Select whether you want to offer your services as a pet sitter or find
          a trusted sitter for your pet.
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <FeatureOptionButton
          imageSource={PetSitter}
          label="Become a Pet Sitter"
          onPress={() => navigation.navigate("BecomePetSitter")}
        />
        <FeatureOptionButton
          imageSource={PetSitting}
          label="Find a Pet Sitter"
          onPress={() => navigation.navigate("SearchPetSitter1")}

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
    fontSize: 28,
    color:"#323232"
  },
  subtitle:{
    fontFamily: "Fredoka_400Regular",
    fontSize: 18,
    color:"#535353",
    marginTop:5,
    marginRight:"5%"
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    paddingHorizontal: baseUnit * 5,
    gap: baseUnit * 8,
    marginTop:30
  },
});

export default PetSittingHome;
