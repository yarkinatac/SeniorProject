import React from 'react';
import { View,TextInput, StyleSheet, Dimensions, Text } from 'react-native';

const { width } = Dimensions.get('window');
const baseUnit = width / 100;

const InputComponent = ({ placeholder, secureTextEntry, style, onChangeText, value, errorMessage }) => {
  return (
    <>
    <TextInput
      style={[styles.input, style]}
      onChangeText={onChangeText}
      value={value}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      autoCapitalize="none" 
    />
    <View style={styles.errorContainer}>
      <Text style={styles.error}>{errorMessage}</Text>
    </View>
  </>
  );
};

const styles = StyleSheet.create({
  input: {
    height: baseUnit * 13,
    marginVertical: baseUnit,
    borderWidth: 1,
    borderColor: '#000',
    padding: baseUnit * 2,
    borderRadius: 12,
    width: '100%',
    fontSize: baseUnit * 4,
    fontFamily: 'Fredoka_400Regular',
    fontStyle: "normal"
  },
  errorContainer: {
    justifyContent:"flex-start",
    alignSelf:"flex-start",
  },
  error: {
    textAlign:"left",
    color: 'red',
    fontSize: baseUnit * 3,
    fontFamily: 'Fredoka_400Regular',
    marginTop: baseUnit,
  },
});

export default InputComponent;
