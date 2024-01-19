import React from "react";
import { View, StyleSheet, Image, Dimensions } from "react-native";
import LogoImage from "../../assets/images/home/main-logo.png";
import RectangleButton from "../../components/buttons/RectangleButton";
import AdoptSingle from "../../assets/images/adoption/adopt-single.png";
import AdoptFamily from "../../assets/images/adoption/adopt-family.png";

const AdoptionMenu = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={LogoImage} style={styles.logo} />
      </View>
      <View style={styles.buttonContainer}>
        <RectangleButton
          imageSource={AdoptSingle}
          label="
          I want to adopt 
          a  pet"
          onPress={() => navigation.navigate("AdoptPet")}
          textStyle={styles.buttonText}
          imageStyle={styles.buttonImage}
        />
        <RectangleButton
          imageSource={AdoptFamily}
          label="
          I want someone 
          else to adopt"
          onPress={() => navigation.navigate("AdoptSearch1")}
          textStyle={styles.buttonText}
          imageStyle={styles.buttonImage}
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
  logo: {
    marginTop: baseUnit * 10,
    height: height * 0.2,
    width: width * 0.8,
    resizeMode: "contain",
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    paddingHorizontal: baseUnit * 5,
    gap: baseUnit * 8,
  },
  buttonText: {
    fontSize: baseUnit * 5.5,
    alignSelf: "center",
  },
  buttonImage: {
    height: 300,
    width: baseUnit * 35,
  },
});

export default AdoptionMenu;
