import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const WelcomeScreenButton = ({ title, onPress, style, textStyle }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#65451F',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: "30%"
},
  text: {
    fontFamily:"Fredoka_500Medium",
    padding: 5,
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default WelcomeScreenButton;
