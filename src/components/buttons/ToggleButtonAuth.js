import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "@rneui/themed";

const ToggleButtonAuth = ({ options, onChange }) => {
  const [active, setActive] = useState(options[0].value);

  const handlePress = (value) => {
    setActive(value);
    onChange(value);
  };

  return (
    <View style={styles.container}>
      {options.map((option) => (
        <Button
          key={option.value}
          title={option.label}
          onPress={() => handlePress(option.value)}
          buttonStyle={
            active === option.value
              ? styles.buttonActive
              : styles.buttonInactive
          }
          titleStyle={styles.buttonTitle}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  buttonActive: {
    backgroundColor: "#65451F",
    width: 100,
    height: 50,
    borderRadius: 15,
  },
  buttonInactive: {
    width: 100,
    height: 50,
    backgroundColor: "#EBAF78",
    borderRadius: 15,
  },
  buttonTitle: {
    color: "#fff",
    fontFamily: "Fredoka_500Medium",
  },
});

export default ToggleButtonAuth;
