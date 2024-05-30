import React from "react";
import { View, StyleSheet, Text,Dimensions } from "react-native";
import { FontAwesome6, MaterialCommunityIcons } from "@expo/vector-icons";
import CustomHeader from "../../components/header/Header";
import PetTypeCard from "../../components/cards/PetTypeCard";
import { useNavigation } from "@react-navigation/native";
import { useFlow } from "../../context/FlowContext";

const petOptions = [
  {
    type: "dog",
    label: "Dog",
    iconFamily: "FontAwesome6",
    iconName: "dog",
  },
  {
    type: "cat",
    label: "Cat",
    iconFamily: "FontAwesome6",
    iconName: "cat",
  },
  {
    type: "bird",
    label: "Bird",
    info: "(Coming Soon)",
    iconFamily: "MaterialCommunityIcons",
    iconName: "bird",
  },
  {
    type: "fish",
    label: "Fish",
    info: "(Coming Soon)",
    iconFamily: "FontAwesome6",
    iconName: "fish-fins",
  },
  {
    type: "rabbit",
    label: "Rabbit",
    info: "(Coming Soon)",
    iconFamily: "MaterialCommunityIcons",
    iconName: "rabbit",
  },
];

const PetSelection = () => {
  const navigation = useNavigation();
  const { advertType } = useFlow(); // Access advertType from context

  const renderIcon = (family, name, size, color) => {
    switch (family) {
      case "FontAwesome6":
        return <FontAwesome6 name={name} size={size} color={color} />;
      case "MaterialCommunityIcons":
        return <MaterialCommunityIcons name={name} size={size} color={color} />;
      default:
        return null; // Default fallback in case no family is matched
    }
  };

  return (
    <View style={styles.container}>
      <CustomHeader />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Select Pet Type</Text>
        <Text style={styles.subtitle}>
          Choose the Type of Pet You Wish to List
        </Text>
        <Text style={styles.filterTitle}>Pet Types</Text>
      </View>
      <View style={styles.selectionContainer}>
        {petOptions.map((pet) => (
          <PetTypeCard
            key={pet.type}
            IconComponent={renderIcon(
              pet.iconFamily,
              pet.iconName,
              50,
              "white"
            )}
            label={pet.label}
            info={pet.info || ""}
            onPress={() => {
              if (!pet.info) {
                navigation.navigate("PetRegistration", { petType: pet.type, advertType });
              }
            }}
          />
        ))}
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
  },
  titleContainer: {
    marginLeft: "3%",
    marginTop: "5%",
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
  filterTitle: {
    fontFamily: "Fredoka_500Medium",
    fontSize: baseUnit * 6,
    marginTop: "7%",
    color:"#323232"
  },
  selectionContainer: {
    padding: 10, // Uniform padding all around
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
});

export default PetSelection;
