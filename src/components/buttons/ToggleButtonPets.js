import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "@rneui/themed";

const ToggleButtonPets = ({ options, onChange, activeColor = "#65451F", inactiveColor = "#EBAF78" }) => {
  const [active, setActive] = useState();

  const handlePress = (value) => {
    setActive(value);
    onChange(value);
  };

  return (
    <View style={styles.container}>
      {options.map((option, index) => (
        <Button
          key={option.value}
          title={option.label}
          onPress={() => handlePress(option.value)}
          buttonStyle={
            active === option.value ? { ...styles.button, backgroundColor: activeColor } : { ...styles.button, backgroundColor: inactiveColor }
          }
          titleStyle={styles.buttonTitle}
          containerStyle={[
            styles.buttonContainer,
            index !== options.length - 1 && styles.buttonSpacing 
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",  
    justifyContent: "flex-start",  
  },
  buttonContainer: {
    elevation: 3, 
    shadowColor: "#000",  
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  buttonSpacing: {
    marginRight: 10, // Space between each button
  },
  button: {
    width: 100,
    height: 40,
    borderRadius: 25,
  },
  buttonTitle: {
    color: "#fff",
    fontFamily: "Fredoka_500Medium",
    fontSize: 18
  },
});

export default ToggleButtonPets;
