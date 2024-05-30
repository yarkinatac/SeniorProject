import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get("window");
const baseUnit = width / 100;

const PetDetails = ({ title, value }) => {
  return (
    <View style={styles.detailItemContainer}>
      <Text style={styles.detailTitle}>{title}</Text>
      <Text style={styles.detailValue}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  detailItemContainer: {
    width: width * 0.5, 
    padding: baseUnit * 2, 
  },
  detailTitle: {
    fontFamily: "Fredoka_500Medium",
    fontSize: baseUnit * 5, 
    fontWeight: 'bold',
    color: '#EBAF78',
    marginBottom: baseUnit * 2, 
  },
  detailValue: {
    fontFamily: "Fredoka_400Regular",
    fontSize: baseUnit * 4, 
    color: 'white',
    textTransform:"capitalize"
  },
});

export default PetDetails;
