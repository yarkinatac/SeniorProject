import React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import CustomHeader from "../../components/header/HeaderSettings";
import FeatureOptionButton from "../../components/buttons/FeatureOptionButton";
import AdoptSingle from "../../assets/images/adoption/adopt-single.png";
import AdoptFamily from "../../assets/images/adoption/adopt-family.png";

const AdoptionHome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <CustomHeader />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Adoption Options</Text>
        <Text style={styles.subtitle}>
          Choose whether you want to adopt a pet or list your pet for adoption.
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <FeatureOptionButton
          imageSource={AdoptSingle}
          label="Find a Pet to Adopt"
          onPress={() => navigation.navigate("AdoptPet")}
        />
        <FeatureOptionButton
          imageSource={AdoptFamily}
          label="List Your Pet for Adoption"
          onPress={() => navigation.navigate("AdoptionFeatureSelection")}
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

export default AdoptionHome;
