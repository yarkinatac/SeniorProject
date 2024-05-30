import React from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import { Button, Text, Image } from '@rneui/themed';

const FeatureOptionButton = ({ imageSource, label, onPress, textStyle, imageStyle }) => {
  return (
    <Button
      onPress={onPress}
      containerStyle={styles.buttonContainer}
      buttonStyle={styles.button}
      type="clear"
    >
      <Text style={[styles.label, textStyle]}>{label}</Text>
      <View style={styles.imageContainer}>
        <Image 
          source={imageSource} 
          style={[styles.image, imageStyle]}
        />
      </View>
    </Button>
  );
};

const { width, height } = Dimensions.get("window");
const baseUnit = height / 100;

const styles = StyleSheet.create({
  buttonContainer: {
    width: "90%",
    height: baseUnit * 22,  
    borderRadius: 24,
    borderColor:"#A6573E",
    borderWidth: 0.75,
    elevation: 5,
    backgroundColor: '#EBAF78', 
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 0,
    width: '100%',
    height: '100%',
  },
  label: {
    flex: 1,
    fontFamily: "Fredoka_500Medium",
    fontSize: baseUnit * 3,
    textAlign: "center",
    margin: baseUnit * 2 , 
    
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    width: '100%',  
    height: '100%'  
  },
  image: {
    width: "100%",
    height: "auto",  
    aspectRatio: 1, 
    resizeMode: "contain",
  },
});

export default FeatureOptionButton;
