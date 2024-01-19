import React from 'react';
import { View, StyleSheet,Text, Image } from 'react-native';

const Divider = () => (
  <View style={styles.dividerContainer}>
    <View style={styles.line} />
  </View>
);

const styles = StyleSheet.create({
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#000', // Replace with your color
    maxWidth: '90%',
  },

});

export default Divider;
