import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SubmitButton from "../../components/buttons/SubmitButton";
import SecondaryButton from "../../components/buttons/SecondaryButton";
import ForgetPasswordImage1 from "../../assets/images/login/forget-password-1.png"
import InputComponent from "../../components/inputs/InputComponent";

const ForgotPassword1 = ({navigation}) => {
  

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Forgot your password?</Text>
        <Text style={styles.subtitle}>No worries.</Text>
      </View>
      <Image source={ForgetPasswordImage1} style={styles.illustration} />
      <View style={styles.inputContainer}>
        <InputComponent
          style={styles.input}
          placeholder="Enter Email"
          keyboardType="email-address"
        />
      </View>
      <View style={styles.buttonContainer}>
        <SubmitButton
          title="Request Reset Link"
          onPress={() => {
            navigation.navigate("ForgotPassword2")
          }}
        />
      </View>
      <View style={styles.buttonContainer}>
        <SecondaryButton
          title="Back To Login"
          onPress={() => navigation.navigate("SignIn")}
        />
      </View>
    </View>
  );
};

const { width, height } = Dimensions.get("window");
const baseUnit = width / 100;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "left", 
    justifyContent: "center",
    backgroundColor: "#F4DFBA",
  },
  textContainer: {
    alignSelf:"flex-start",
    marginBottom: '25%',
    margin: '8%'
  },
  title: {
    fontFamily:"Fredoka_500Medium",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: '3%',
  },
  subtitle: {
    fontFamily:"Fredoka_500Medium",
    fontSize: 24,
    fontWeight: "bold",
  },
  illustration: {
    width: '60%', 
    height: '30%', 
    aspectRatio: 1, 
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: '10%',
  },
  inputContainer: {
    marginBottom: '5%',
    alignItems:"center",
    alignSelf:"center",
    width:"80%",
  },
  input:{
    height: baseUnit * 15
  },
  buttonContainer: {
    alignItems:"center",
    alignSelf: "center",
    width: "80%"
  },
});

export default ForgotPassword1;
