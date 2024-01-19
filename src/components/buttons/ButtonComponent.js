import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const ButtonComponent = ({ title, onPress, style, textStyle }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    elevation: 3,
    backgroundColor: '#65451F',
    borderRadius: 16,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginVertical: 10,
  },
  text: {
    justifyContent:"center",
    alignItems:"center",
    fontSize: 18,
    color: 'white',
    alignSelf: 'center',
    fontFamily:"Fredoka_500Medium"
  },
});

export default ButtonComponent;
