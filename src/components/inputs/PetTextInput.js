// ProfileTextInput.js
import React from "react";
import { TextInput, StyleSheet, Dimensions, View, Text } from "react-native";

const { width } = Dimensions.get("window");
const baseUnit = (width / 375) * 4; // Base unit for responsive design

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: baseUnit * 15,
    marginVertical: baseUnit
  },
  text: {
    fontSize: baseUnit * 4,
    color: "#EBAF78",
    fontWeight: "bold"
  },
  input: {
    borderRadius:   4,
    borderWidth: 1,
    borderColor: "#EBAF78",
    paddingVertical: baseUnit,
    paddingLeft: baseUnit*2,
    marginBottom: baseUnit*0.3,
    marginRight: baseUnit*4,
    fontSize: baseUnit *4 ,
    color: "#FFFFFF",
    width: baseUnit * 40,
    textAlign: "left",
  },
});

const PetTextInput = ({ name, value, onChangeText, placeholder }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{placeholder}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={(text) => onChangeText(name, text)}
        placeholder={placeholder}
      />
    </View>
  );
};

export default PetTextInput;
