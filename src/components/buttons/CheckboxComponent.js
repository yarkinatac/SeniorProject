import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const CheckboxComponent = ({ title, onCheck, isChecked, style, textStyle }) => {
  const [checked, setChecked] = useState(isChecked);

  const handlePress = () => {
    setChecked(!checked);
    onCheck(!checked);
  };

  return (
    <TouchableOpacity style={[styles.container, style]} onPress={handlePress}>
      <View style={[styles.checkbox, checked && styles.checked]}>
        {checked && <View style={styles.innerCheckmark} />}
      </View>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    height: 20,
    width: 20,
    borderRadius: 3,
    borderWidth: 2,
    borderColor: '#A52A2A',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  checked: {
    borderColor: '#A52A2A',
    backgroundColor: '#A52A2A',
  },
  innerCheckmark: {
    width: 12,
    height: 12,
    backgroundColor: 'white',
  },
  text: {
    fontFamily:"Fredoka_400Regular",
    fontSize: 16,
    color: 'black',
  },
});

export default CheckboxComponent;
