import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const PetCard = ({ name, imageUrl, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={ imageUrl } style={styles.image} />
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#EBAF78',
    borderRadius: 20,
    marginVertical: '3%',
    paddingVertical:'5%', 
    width: 370,
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,

  },
  image: {
    width: 100,
    height: 80,
    borderRadius: 30,
    marginHorizontal: 15,
    marginTop: 5,
    
  },
  text: {
    fontSize: 18,
    fontFamily:"Fredoka_500Medium"
  },
});

export default PetCard;
