import React from "react";
import { View,StyleSheet, Image, Dimensions } from "react-native";
import { useNavigation } from '@react-navigation/native';
import AdoptionImage from "../../assets/images/home/adoption.png";
import BreedingImage from "../../assets/images/home/breeding.png";
import PetSittingImage from "../../assets/images/home/sitting.png";
import ServiceLocatorImage from "../../assets/images/home/service-locator.png";
import Logo from "../../assets/images/home/main-logo.png";
import FeatureOptionButton from "../../components/buttons/FeatureOptionButton";
import SquareButton from "../../components/buttons/SquareButton";

const MainMenu = () => {
  const navigation = useNavigation();


  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />

      <FeatureOptionButton
        imageSource={AdoptionImage}
        label="Adoption"
        onPress={() => navigation.navigate("AdoptionHome")}
      />

      <View style={styles.squareButtonContainer}>
        <SquareButton
          imageSource={BreedingImage}
          label="Breeding"
          onPress={() => navigation.navigate("BreedingHome")}
        />
        <SquareButton
          imageSource={PetSittingImage}
          label="Pet-Sitting"
          onPress={() => navigation.navigate("PetSittingHome")}          
        />
      </View>

      <FeatureOptionButton
        imageSource={ServiceLocatorImage}
        label="Service - Locator"
        onPress={() => navigation.navigate("ServiceLocator")}
        imageStyle={{ marginRight: "30%" }} 
      />
    </View>
  );
};
const { width } = Dimensions.get("window");
const baseUnit = width / 100;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4DFBA", 
    alignItems: "center",
  },
  logo: {
    height: "15%",
    width: "90%",
    resizeMode: "contain",
    marginTop: baseUnit * 12, 
    marginBottom: baseUnit * 2,
    alignSelf: "center",
  },
  squareButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%", 
    paddingHorizontal: baseUnit * 4, 
  },
});

export default MainMenu;
