import React from 'react';
import { StyleSheet,Dimensions } from 'react-native';
import { Button } from '@rneui/themed';

const SecondaryButton = ({ title, onPress, icon }) => (
  <Button
    title={title}
    onPress={onPress}
    buttonStyle={styles.button}
    titleStyle={styles.text}
    containerStyle={styles.container}
    icon={icon ? {
      ...icon,
      color: '#65451F', 
      size: 25 
    } : null}
    iconContainerStyle={styles.iconContainer}
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
    backgroundColor: '#FFFBF3',
    padding: baseUnit * 4,
    borderRadius: 16,
    borderWidth: 2.5,
    borderColor: '#65451F',
    borderStyle: 'solid',
  },
  text: {
    fontFamily:"Fredoka_500Medium",
    fontSize: baseUnit * 5,
    color: '#65451F', 
  },
  iconContainer: {
    marginRight: 10, 
  },
});

export default SecondaryButton;