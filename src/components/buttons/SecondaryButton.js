import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';


const SecondaryButton = ({ title, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FFFBF3',
    padding: 15,
    borderRadius: 16,
    borderWidth: 2.5,
    borderColor: '#65451F',
    borderStyle: 'solid',
    alignItems: 'center',
    marginVertical: 5, 
    width: 325, 
  },
  text: {
    fontFamily:"Fredoka_500Medium",
    fontSize: 20,
    color: '#65451F', 
    fontWeight: 'bold',
  },
});

export default SecondaryButton;
