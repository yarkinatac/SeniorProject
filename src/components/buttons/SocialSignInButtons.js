import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';

const GoogleIcon = require('../../assets/images/icons/google-icon.png'); 
const FacebookIcon = require('../../assets/images/icons/facebook-icon.png');

const SocialSignInButtons = ({ onGooglePress, onFacebookPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onGooglePress}>
        <Image source={GoogleIcon} style={styles.socialButton} />
      </TouchableOpacity>
      <View style={{ width: 40 }} />
      <TouchableOpacity onPress={onFacebookPress}>
        <Image source={FacebookIcon} style={styles.socialButton} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:"5%",
    marginBottom:"10%",
  },
  socialButton: {
    width: 50, // Adjust as necessary
    height: 50, // Adjust as necessary
    resizeMode: 'contain',
  },
});

export default SocialSignInButtons;
