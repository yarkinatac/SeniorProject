import React, { useState } from "react";
import { StyleSheet, Dimensions } from "react-native";
import { Input } from "@rneui/themed";

const { width } = Dimensions.get("window");
const baseUnit = width / 100;

const PhoneNumberInputComponent = ({ value, onChangeText, errorMessage }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [displayValue, setDisplayValue] = useState("");

  const handleFocus = () => {
    setIsFocused(true);
    setDisplayValue(formatPhoneNumber(value));
  };

  const handleBlur = () => {
    setIsFocused(false);
    setDisplayValue(value ? `+90 ${formatPhoneNumber(value)}` : "");
  };

  const handleTextChange = (text) => {
    const cleaned = text.replace(/[^\d]/g, "").substring(0, 10);
    const formatted = formatPhoneNumber(cleaned);
    onChangeText(cleaned);
    setDisplayValue(formatted);
  };

  const formatPhoneNumber = (phone) => {
    return phone.replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, "$1 $2 $3 $4");
  };

  return (
    <Input
      placeholder={isFocused ? "+90" : "Phone Number"}
      value={displayValue}
      onChangeText={handleTextChange}
      errorMessage={errorMessage}
      containerStyle={styles.container}
      inputContainerStyle={styles.inputContainer}
      inputStyle={styles.inputText}
      onFocus={handleFocus}
      onBlur={handleBlur}
      keyboardType="phone-pad"
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
        padding: baseUnit * 2,
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

export default PhoneNumberInputComponent;
