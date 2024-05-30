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
    color: "#A6573E",
  },
  input: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#A6573E",
    paddingVertical: baseUnit,
    paddingLeft: baseUnit*2,
    marginBottom: baseUnit * 2,
    marginRight: baseUnit*4,
    fontSize: baseUnit *3 ,
    color: "#606060",
    width: baseUnit * 40,
    textAlign: "left",
  },
});

const ProfileTextInput = ({ name, value, onChangeText, placeholder }) => {
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

export default ProfileTextInput;
