import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';

const ButtonComponent = ({ title, onPress, style = {}, textStyle }) => {
  // Get the screen width
  const screenWidth = Dimensions.get('window').width;

  // Calculate the font size based on the button width
  // For example, if the button takes up 50% of the screen width, the font size will be 10% of the screen width
  const fontSize = (style.width || screenWidth * 0.) * 0.1;

  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Text style={[styles.text, textStyle, { fontSize }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width:"90%",
    elevation: 3,
    backgroundColor: '#65451F',
    borderRadius: 16,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginVertical: 1,
  },
  text: {
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    alignSelf: 'center',
    fontFamily: 'Fredoka_500Medium',
  },
});

export default ButtonComponent;
