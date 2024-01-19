import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import AdoptionImage from "../../assets/images/home/adoption.png";
import BreedingImage from "../../assets/images/home/breeding.png";
import PetSittingImage from "../../assets/images/home/pet-sitting.png";
import ServiceLocatorImage from "../../assets/images/home/service-locator.png";
import Logo from "../../assets/images/home/main-logo.png";
import RectangleButton from "../../components/buttons/RectangleButton";
import SquareButton from "../../components/buttons/SquareButton";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />

      <RectangleButton
        imageSource={AdoptionImage}
        label="Adoption"
        onPress={() => navigation.navigate("AdoptionMenu")}
        imageStyle={{ marginLeft: "17%" }} // Adjust image position as needed
      />

      <View style={styles.squareButtonContainer}>
        <SquareButton
          imageSource={BreedingImage}
          label="Breed"
          onPress={() => navigation.navigate("BreedingMenu")}
          imageStyle={{ height: "70%", marginBottom: "10%" }} // Adjust image position as needed
        />
        <SquareButton
          imageSource={PetSittingImage}
          label="Pet-Sitting"
          onPress={() => navigation.navigate("PetSittingMenu")}
          imageStyle={{ height: "60%", marginBottom: "20%" }} // Adjust image position as needed
        />
      </View>

      <RectangleButton
        imageSource={ServiceLocatorImage}
        label="Service-Locator"
        onPress={() => navigation.navigate("VeterinaryServices")}
        imageStyle={{ marginRight: "30%" }} // Adjust image position as needed
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4DFBA", // Background color from your design
    alignItems: "center",
  },
  logo: {
    height: 135, // Adjust as necessary
    width: 420,
    resizeMode: "contain",
    margin: "20%", // Adjust as necessary
    marginBottom: "5%",
    alignSelf: "center",
  },
  squareButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%", // This will ensure the container takes the full width
    paddingHorizontal: 15, // Adjust the padding as needed
  },
});

export default HomeScreen;
