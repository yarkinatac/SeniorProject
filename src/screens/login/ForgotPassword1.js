import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import DarkBrownButton from "../../components/buttons/DarkBrownButton";
import SecondaryButton from "../../components/buttons/SecondaryButton";
import ForgetPasswordImage1 from "../../assets/images/login/forget-password-1.png"
import InputComponent from "../../components/inputs/InputComponent";

const ForgotPassword1 = ({}) => {
  const navigation = useNavigation();


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
        <DarkBrownButton
          title="Request Reset Link"
          onPress={() => {
            navigation.navigate("ForgotPassword2")
          }}
        />
      </View>
      <View style={styles.buttonContainer}>
        <SecondaryButton
          title="Back To Login"
          onPress={() => navigation.goBack()}
          width={140} 
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
    alignItems: "left", // This will center all children horizontally
    justifyContent: "center", // This will center all children vertically
    backgroundColor: "#F4DFBA",
  },
  textContainer: {
    alignSelf:"flex-start",
    marginBottom: '25%',
    margin: '8%'
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: '3%',
  },
  subtitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  illustration: {
    width: '60%', // Use a percentage of the screen width
    height: '30%', // Allow the height to be determined by the aspect ratio of the image
    aspectRatio: 1, // Adjust this according to your image's aspect ratio
    resizeMode: 'contain',
    alignSelf: 'center', // Center the image horizontally
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
    width: "80%", // Take the full width of the container to allow centering
    marginVertical: '3%', // Add vertical margin between the buttons
  },
});

export default ForgotPassword1;
