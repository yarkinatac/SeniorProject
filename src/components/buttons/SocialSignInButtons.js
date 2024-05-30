import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';


const SocialSignInButtons = ({ onGooglePress, onFacebookPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.google} onPress={onGooglePress}>
      <AntDesign name="google" size={35} color="#FFFF" />
      </TouchableOpacity>
      <View style={{ width: 40 }} />
      <TouchableOpacity style={styles.facebook} onPress={onFacebookPress}>
      <FontAwesome5 name="facebook" size={50} color="#65451F"/>
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
  google:{
    backgroundColor:"#65451F",
    borderRadius:"30",
    width:50,
    height:50,
    justifyContent:"center",
    alignItems:"center"
  },
  facebook:{
    backgroundColor:"white",
    borderRadius:30,
    width:49,
    height:49,
    justifyContent:"center",
    alignItems:"center"
  }

});

export default SocialSignInButtons;
