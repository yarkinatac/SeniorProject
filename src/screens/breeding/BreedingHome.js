import React from "react";
import { View, StyleSheet, Image, Dimensions, Text } from "react-native";
import FeatureOptionButton from "../../components/buttons/FeatureOptionButton";
import FindMatch from "../../assets/images/breeding/breeding-1.png";
import ListPet from "../../assets/images/breeding/breeding-2.png";
import CustomHeader from "../../components/header/HeaderSettings";

const BreedingHome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <CustomHeader />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Breeding Options</Text>
        <Text style={styles.subtitle}>
          Choose whether you want to find a breeding partner for your pet or
          list your pet for others seeking a match.{" "}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <FeatureOptionButton
          imageSource={FindMatch}
          label="Find a Match for Your Pet"
          onPress={() => navigation.navigate("BreedPet1")}
        />
        <FeatureOptionButton
          imageSource={ListPet}
          label="List Your Pet for Breeding"
          onPress={() => navigation.navigate("BreedingPetSelection")}
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

export default BreedingHome;
