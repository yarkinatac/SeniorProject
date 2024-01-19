import React from "react";
import { View, StyleSheet, Image, Dimensions } from "react-native";
import LogoImage from "../../assets/images/home/main-logo.png";
import PetOption from "../../components/buttons/PetOption";
import ExistingPetIcon from "../../assets/images/icons/filter-icon.png";
import NewPetIcon from "../../assets/images/icons/filter-icon.png";


const SearchPetSitter1 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={LogoImage} style={styles.logo} />
      <View style={styles.buttonContainer}>
        <PetOption
          mainText="Existing Pet"
          helpfulText="Choose a pet you've already added"
          icon={ExistingPetIcon}
          onPress={() => {
            navigation.navigate("SearchPetSitter2")
          }}
        />
        <PetOption
          mainText="New Pet"
          helpfulText="Add a new furry friend to your profile"
          icon={NewPetIcon}
          onPress={() => {
            /* TODO: Navigate to new pet addition */
          }}
        />
        {/* Add additional UI elements or options */}
      </View>
    </View>
  );
};
const { width, height } = Dimensions.get('window');
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
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: baseUnit * 5,
    gap: baseUnit * 7    
  },
});

export default SearchPetSitter1;
