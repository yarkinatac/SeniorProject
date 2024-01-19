import React from 'react';
import { TextInput, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const baseUnit = width / 100;

const InputComponent = ({ placeholder, secureTextEntry, style, onChangeText, value }) => {
  return (
    <TextInput
      style={[styles.input, style]}
      onChangeText={onChangeText}
      value={value}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: baseUnit * 13 ,
    marginVertical: baseUnit,
    borderWidth: 1,
    borderColor: '#000',
    padding: baseUnit * 2,
    borderRadius: 12,
    width: '100%', 
    fontSize: baseUnit * 4, 
    fontFamily: 'Fredoka_400Regular', 
  },
});

export default InputComponent;
