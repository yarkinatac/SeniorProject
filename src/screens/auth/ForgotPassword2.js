// ForgetPasswordScreen.js
import React from "react";
import { View, Text, StyleSheet, Image} from "react-native";
import { useNavigation } from "@react-navigation/native";
import SubmitButton from "../../components/buttons/SubmitButton";
import ForgetPasswordImage1 from "../../assets/images/login/forget-password-2.png"

const ForgotPassword2 = ({}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Your Furry Friends Awaits!</Text>
        <Text style={styles.subtitle}>Please check your email for your new login link</Text>
      </View>
      <Image source={ForgetPasswordImage1} style={styles.illustration} />
      <View style={styles.buttonContainer}>
        <SubmitButton
          title="Return to Login"
          onPress={() => {
            navigation.navigate("SignIn")
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center", // This will center all children horizontally
    justifyContent: "center", // This will center all children vertically
    backgroundColor: "#F4DFBA",
    marginTop: 0,
  },
  textContainer: {
    alignSelf:"flex-start",
    marginHorizontal: '13%'
  },
  title: {
    fontFamily:"Fredoka_500Medium",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: '8%',
  },
  subtitle: {
    fontFamily:"Fredoka_500Medium",
    width: 250,
    fontSize: 18,
  },
  illustration: { 
    height: '50%',
    aspectRatio: 1,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  buttonContainer: {
    alignItems:"center",
    alignSelf: "center",
    width: "80%"
  },
});

export default ForgotPassword2;
