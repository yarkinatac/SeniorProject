import React from 'react';
import { View, TextInput, StyleSheet, Dimensions } from 'react-native';

const PetDetailsInput = ({ value, onChangeText, placeholder, multiline = false }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={[styles.input, multiline ? styles.multilineInput : null]}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        placeholderTextColor="#6e6e6e"
        multiline={multiline}
      />
    </View>
  );
};
const { width, height } = Dimensions.get("window");
const baseUnit = width / 100;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: baseUnit * 2,
    backgroundColor: "#EBAF78",
    borderWidth: 1,
    borderColor: '#D9A877',
    borderRadius: 16,
  },
  input: {
    fontFamily:"Fredoka_400Regular",
    padding: baseUnit * 4,
    fontSize: baseUnit * 4.5,
    color: '#333',
  },
  multilineInput: {
    minHeight: 100, // Adjust the height for multiline input
    textAlignVertical: 'top', // Align text to the top for multiline
  },
});

export default PetDetailsInput;
