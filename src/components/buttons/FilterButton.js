import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from '@rneui/themed';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const FilterButton = ({ onPress }) => {
  return (
    <Button
      onPress={onPress}
      buttonStyle={styles.button}
      icon={
        <FontAwesome5 name="filter" size={24} color="white" />
      }
      iconRight
      type="clear"
    />
  );
};

const styles = StyleSheet.create({
  button: {
    height: 40,
    backgroundColor: '#65451F',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 4,
  }
});

export default FilterButton;
