import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

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

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 10,
    backgroundColor: "#EBAF78",
    borderWidth: 1,
    borderColor: '#D9A877',
    borderRadius: 16,
  },
  input: {
    padding: 15,
    fontSize: 16,
    color: '#333',
  },
  multilineInput: {
    minHeight: 100, // Adjust the height for multiline input
    textAlignVertical: 'top', // Align text to the top for multiline
  },
});

export default PetDetailsInput;
