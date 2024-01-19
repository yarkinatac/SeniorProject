import React from 'react';
import { Image, StyleSheet } from 'react-native';

const ImageComponent = ({ source, style }) => {
  return <Image source={source} style={[styles.image, style]} />;
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
});

export default ImageComponent;
