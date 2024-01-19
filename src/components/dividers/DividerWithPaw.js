import React from 'react';
import { View, StyleSheet,Text, Image } from 'react-native';
import PawIcon from "../../assets/images/icons/paw-icon.png"

const DividerWithPaw = () => (
  <View style={styles.dividerContainer}>
    <View style={styles.line} />
    <Image source={PawIcon} style={styles.pawIcon}></Image>
    <View style={styles.line} />
  </View>
);

const styles = StyleSheet.create({
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  line: {
    flex: 1,
    height: 2,
    backgroundColor: '#000', // Replace with your color
    maxWidth: '40%',
  },
  pawIcon: {
    marginHorizontal: 15, // Adjust the spacing if needed
    width: 40,
    height: 40,
  },
});

export default DividerWithPaw;
