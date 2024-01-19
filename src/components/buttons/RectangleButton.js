import React from 'react';
import { TouchableOpacity, Text, Image, StyleSheet, Dimensions } from 'react-native';

const RectangleButton = ({ imageSource, label, onPress, textStyle, imageStyle }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={[styles.label, textStyle]}>{label}</Text>
    <Image source={imageSource} style={[styles.image, imageStyle]} />
  </TouchableOpacity>
);


const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 370, 
    height: 180, 
    backgroundColor: '#EBAF78', 
    borderRadius: 24,
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 4 }, // X, Y offset of shadow
    shadowOpacity: 0.25, // Opacity of shadow
    shadowRadius: 4, // Blur radius of shadow
    elevation: 5,
    margin: 15,
    paddingHorizontal: '5%', // Adjust padding as needed
  },
  label: {
    fontFamily: "Fredoka_500Medium",
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    fontSize: 20, // Adjust font size as needed
    marginTop: '3%'
  },
  image: {
    width: '60%', // Adjust width as needed
    height: '100%', // Adjust height as needed
    resizeMode: 'contain',
  },
});

export default RectangleButton;
