import React from 'react';
import { TouchableOpacity, Text, Image, StyleSheet, Dimensions } from 'react-native';

const buttonWidth = Dimensions.get('window').width / 2 - 30; // Adjust the gap between buttons if needed

const SquareButton = ({ imageSource, label, onPress, imageStyle }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.label}>{label}</Text>
    <Image source={imageSource} style={[styles.image, imageStyle]} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    width: buttonWidth,
    height: buttonWidth,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EBAF78', // Adjust the background color if needed
    borderRadius: 24,
    shadowColor: "#000", // Shadow color
    shadowOffset: { width: 0, height: 4 }, // X, Y offset of shadow
    shadowOpacity: 0.25, // Opacity of shadow
    shadowRadius: 4, // Blur radius of shadow
    elevation: 5,
    margin: '2%',
    paddingHorizontal: '1%',
  },
  image: {
    width: '100%', // Adjust size as needed
    height: '100%', // Adjust size as needed
    resizeMode: 'contain',
  },
  label: {
    fontFamily: "Fredoka_500Medium",
    alignSelf: 'flex-start',
    position: 'relative',
    marginTop: '25%',
    marginLeft: '11%',
    marginBottom: '10%',
    bottom: 10, // Adjust the position as needed
    fontWeight: 'bold',
    fontSize: 20, // Adjust font size as needed
  },
});

export default SquareButton;
