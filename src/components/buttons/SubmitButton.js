import React from 'react';
import { StyleSheet,Dimensions } from 'react-native';
import { Button } from '@rneui/themed';

const SubmitButton = ({ title, onPress }) => (
  <Button
    title={title}
    onPress={onPress}
    buttonStyle={styles.button}
    titleStyle={styles.text}
    containerStyle={styles.container}
  />
);
const { width, height } = Dimensions.get("window");
const baseUnit = width / 100;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    width: "80%", 
    marginVertical: baseUnit * 2, 
  },
  button: {
    backgroundColor: '#65451F',
    padding: baseUnit * 4.5,
    borderRadius: 16,
  },
  text: {
    textAlign:"center",
    fontSize: baseUnit * 5,
    fontFamily: "Fredoka_500Medium", 
    color: '#FFFFFF',
    fontWeight: 'bold', 
  },
});

export default SubmitButton;
