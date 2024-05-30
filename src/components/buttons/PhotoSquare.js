import React from 'react';
import { TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const baseUnit = width / 100;

const PhotoSquare = ({ onPress, imageSource, style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.photoSquare, style]}>
      {imageSource && <Image source={imageSource} style={styles.photoImage} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  photoSquare: {
    width: baseUnit * 20, // Adjust the size as needed
    height: baseUnit * 20, // Adjust the size as needed
    backgroundColor: '#FFF7E9', // Placeholder color
    borderColor: 'black', // Placeholder border color
    borderWidth: 2,
    borderRadius: 5, // Adjust for rounded corners if desired
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden', // Ensure the image does not exceed the boundaries of the box
    margin: baseUnit, // Margin for spacing between squares
  },
  photoImage: {
    width: '60%',
    height: '60%',
    marginLeft: baseUnit,
  },
});

export default PhotoSquare;
