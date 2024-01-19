import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';


const DarkBrownButton = ({ title, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#65451F',
    padding: 15,
    borderRadius: 16,
    borderWidth: 2.5,
    borderColor: '#65451F',
    alignItems: 'center',
    marginVertical: 5, 
    width: 325, 
  },
  text: {
    fontSize: 20,
    fontFamily:"Fredoka_500Medium",
    color: '#FFFFFF', 
    fontWeight: 'bold',
  },
});

export default DarkBrownButton;
