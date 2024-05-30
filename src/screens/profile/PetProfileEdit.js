import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  TextInput,
} from "react-native";
import MockPhoto from "../../assets/images/profile/dogImage.png";
import CustomHeader from "../../components/header/HeaderShare";
import PetTextInput from "../../components/inputs/PetTextInput";
import SecondaryButton from "../../components/buttons/SecondaryButton";

const PetProfileEdit = ({ navigation }) => {
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
  const handleInputChange = (name, value) => {
    setUserInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <View style={styles.container}>
      <CustomHeader />
      <Image source={MockPhoto} style={styles.image} />
      <ScrollView style={styles.detailsContainer}>
        <Text style={styles.name}>{pet.name}</Text>
        <View style={styles.detailRow}>
          <PetTextInput
            name="age"
            value={pet.age}
            onChangeText={handleInputChange}
            placeholder="Age"
          />
        </View>
        <View style={styles.detailRow}>
          <PetTextInput
            name="breed"
            value={pet.breed}
            onChangeText={handleInputChange}
            placeholder="Breed"
          />
        </View>
        <View style={styles.detailRow}>
          <PetTextInput
            name="sex"
            value={pet.sex}
            onChangeText={handleInputChange}
            placeholder="Sex"
          />
        </View>
        <View style={styles.detailRow}>
          <PetTextInput
            name="size"
            value={pet.size}
            onChangeText={handleInputChange}
            placeholder="Size"
          />
        </View>
        <View style={styles.detailRow}>
          <PetTextInput
            name="shedding"
            value={pet.shedding}
            onChangeText={handleInputChange}
            placeholder="Shedding"
          />
        </View>
        <View style={styles.detailRow}>
          <PetTextInput
            name="healthInfo"
            value={pet.healthInfo}
            onChangeText={handleInputChange}
            placeholder="Health Info:"
          />
        </View>
        <View style={styles.personalityContainer}>
          <Text style={styles.detailTitle}>Personality: </Text>
          {pet.personality.map((trait) => (
            <View key={trait} style={styles.traitItem}>
              <Text style={styles.traitText}>{trait}</Text>
            </View>
          ))}
        </View>
        <View style={styles.bioContainer}>
          <Text style={styles.detailTitle}>Bio: </Text>

          <TextInput
            multiline
            style={styles.bioInput}
            value={pet.bio}
            onChangeText={(text) => handleInputChange("bio", text)}
            placeholder="Tell something about the pet"
            placeholderTextColor="#EBAF78"
          />
        </View>

        <View style={styles.buttonContainer}>
        <SecondaryButton title={"Save"} />
        </View>
        
      </ScrollView>
    </View>
  );
};

const { width, height } = Dimensions.get("window");
const baseUnit = width / 100;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: width,
    height: height * 0.3, // 25% of screen height
    alignSelf: "center",
    resizeMode: "cover",
  },
  detailsContainer: {
    paddingHorizontal: baseUnit * 5,
    paddingBottom: baseUnit * 50,
    paddingTop: baseUnit * 8,
    backgroundColor: "#876445",
    borderRadius: 20,
    marginTop: -20,
  },
  name: {
    fontFamily: "Fredoka_600SemiBold",
    fontSize: baseUnit * 7, // Dynamic font size
    fontWeight: "bold",
    marginBottom: baseUnit * 5,
    color: "white",
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: baseUnit * 3,
  },
  detailTitle: {
    fontFamily: "Fredoka_500Medium",
    fontSize: baseUnit * 4,
    fontWeight: "bold",
    color: "#EBAF78",
    marginRight: baseUnit * 7,
    
  },
  detailValue: {
    fontFamily: "Fredoka_400Regular",
    fontSize: baseUnit * 4,
    color: "white",
  },
  personalityContainer: {
    flexDirection: "row",
    marginTop: baseUnit * 1.2,
    gap: baseUnit,
  },
  traitItem: {
    backgroundColor: "#EBAF78",
    borderRadius: 6,
    marginRight: baseUnit * 0.8,
    paddingHorizontal: baseUnit * 1.5,
    paddingVertical: baseUnit * 0.8,
    marginBottom: baseUnit * 0.8, // Spacing between rows
  },
  traitText: {
    fontFamily: "Fredoka_400Regular",
    color: "#000000",
    fontSize: baseUnit * 4,
    color: "white",
  },
  bioContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    marginBottom: baseUnit * 3,
    marginTop: baseUnit * 5,
  },
  bioInput: {
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#EBAF78",
    padding: baseUnit * 2,
    fontSize: baseUnit * 4,
    color: "#FFFFFF",
    backgroundColor: "#876445", // Assuming you want the TextInput to match the page's background color
    textAlignVertical: "top", // Align text at the top on Android
    height: baseUnit * 20,
    marginTop: baseUnit * 2,
  },
  buttonContainer: {
    marginTop: baseUnit * 4,
    flexDirection: "row",
    justifyContent: "center",
   },

});
export default PetProfileEdit;
