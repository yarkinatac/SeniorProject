import React from 'react';
import { StyleSheet } from 'react-native';
import { CheckBox } from '@rneui/themed';

const CheckboxComponent = ({ title, onCheck, isChecked, style, textStyle }) => {
  return (
    <CheckBox
      title={title}
      checked={isChecked}
      onPress={onCheck}
      containerStyle={[styles.container, style]}
      textStyle={[styles.text, textStyle]}
      checkedColor='#A52A2A' 
      uncheckedColor='#65451F'
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent', 
    borderWidth: 0, 
    paddingVertical: 0,
    marginLeft: 0,
    marginHorizontal: 0, 
  },
  text: {
    fontFamily: "Fredoka_400Regular", 
    fontSize: 16,
    color: 'black',
    fontWeight: 'normal', 
  },
});

export default CheckboxComponent;
