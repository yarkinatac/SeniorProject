import React from 'react';
import { View, StyleSheet,Dimensions} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const DividerWithPaw = () => (
  <View style={styles.dividerContainer}>
    <View style={styles.line} />
    <FontAwesome name="paw" size={baseUnit * 9 } color="#65451F" style={styles.paw} />
        <View style={styles.line} />
  </View>
);
const { width, height } = Dimensions.get("window");
const baseUnit = width / 100;

const styles = StyleSheet.create({
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: baseUnit * 5,
  },
  line: {
    flex: 1,
    height: 2,
    backgroundColor: '#000', // Replace with your color
    maxWidth: '40%',
  },
  paw: {
    marginHorizontal: baseUnit * 3, // Adjust the spacing if needed
  },
});

export default DividerWithPaw;
