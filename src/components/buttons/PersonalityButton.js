import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { Button, useTheme } from "@rneui/themed";
import { Dimensions } from "react-native";

const PersonalityButton = ({ title, onToggle, isSelected, style, textStyle }) => {
  const { theme } = useTheme();
  const [selected, setSelected] = useState(isSelected);

  useEffect(() => {
    setSelected(isSelected);
  }, [isSelected]);

  const handlePress = () => {
    const newSelectedState = !selected;
    setSelected(newSelectedState);
    onToggle(title, newSelectedState); // Pass the title and new selected state back
  };

  return (
    <Button
      title={title}
      buttonStyle={[
        styles.button,
        selected && styles.selected,
        style,
        { backgroundColor: selected ? theme.colors.primary : theme.colors.secondary }
      ]}
      titleStyle={[styles.buttonText, textStyle]}
      onPress={handlePress}
    />
  );
};

const { width } = Dimensions.get("window");
const baseUnit = width / 100;

const styles = StyleSheet.create({
  button: {
    width: (width - baseUnit * 6 * 3) / 3,
    padding: baseUnit * 2,
    borderWidth: 1,
    borderColor: "#EBAF78",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: baseUnit * 2,
    marginRight: baseUnit * 2,
  },
  selected: {
    borderColor: "#A6573F",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontFamily: "Fredoka_400Regular",
  },
});

export default PersonalityButton;