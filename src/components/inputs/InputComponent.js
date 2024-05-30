import React, { useState } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { Input } from '@rneui/themed';

const { width } = Dimensions.get('window');
const baseUnit = width / 100;

const InputComponent = ({
  label, placeholder, secureTextEntry, value, onChangeText, errorMessage,
  multiline, numberOfLines, keyboardType, autoCapitalize
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(!secureTextEntry);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <Input
      placeholder={placeholder}
      secureTextEntry={!showPassword}
      value={value}
      onChangeText={onChangeText}
      label={label}
      errorStyle={styles.error}
      errorMessage={errorMessage}
      inputStyle={[styles.inputText, multiline && { height: (numberOfLines || 1) * baseUnit * 8 }]}
      inputContainerStyle={[styles.inputContainer, isFocused && styles.focusedInputContainer]}
      containerStyle={styles.container}
      labelStyle={styles.label}
      multiline={multiline}
      numberOfLines={numberOfLines}
      keyboardType={keyboardType}
      autoCapitalize={autoCapitalize}
      onFocus={handleFocus}
      onBlur={handleBlur}
      rightIcon={
        secureTextEntry && {
          type: 'ionicon',
          name: showPassword ? 'eye-off' : 'eye',
          color: 'grey',
          onPress: togglePasswordVisibility
        }
      }
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 0,
  },
  inputContainer: {
    borderWidth: 1.25,
    borderColor: '#E1B382',
    borderRadius: 12,
    backgroundColor: '#F9F9F9',
  },
  focusedInputContainer: {
    borderColor: '#FF8787',
    backgroundColor: '#FFE6E6',
  },
  inputText: {
    fontFamily: 'Fredoka_400Regular',
    fontSize: baseUnit * 4,
    padding: baseUnit * 3,
    color: '#000',
  },
  label: {
    fontFamily: 'Fredoka_400Regular',
    fontSize: baseUnit * 4,
    color: '#000',
    marginBottom: 5,
  },
  error: {
    color: 'red',
    fontSize: baseUnit * 3,
    fontFamily: 'Fredoka_400Regular',
  },
});

export default InputComponent;
