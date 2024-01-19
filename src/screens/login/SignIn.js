import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import DarkBrownButton from "../../components/buttons/DarkBrownButton";
import SocialSignInButtons from "../../components/buttons/SocialSignInButtons";
import SignInImage from "../../assets/images/login/sign-in.png";
import { useNavigation } from "@react-navigation/native";
import InputComponent from "../../components/inputs/InputComponent";

const SignIn = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.headerSection}>
        <Text style={styles.header}>Sign In</Text>
      </View>
      <View style={styles.imageSection}>
        <Image source={SignInImage} style={styles.illustration} />
      </View>
      <View style={styles.formSection}>
        <InputComponent placeholder="Enter Email" keyboardType="email-address" />
        <InputComponent placeholder="Password" secureTextEntry />

        <View style={styles.linkContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text style={styles.linkText}>Don't have an account yet?</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword1")}>
            <Text style={styles.linkText}>Forgot your password?</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.buttonSection}>
        <DarkBrownButton
          title="Continue"
          onPress={() => navigation.navigate("HomeScreen")} 
        />
      </View>
      <Text style={styles.optionText}>or continue with</Text>
      <SocialSignInButtons
        onGooglePress={() => {
          // Handle Google Sign-In here
        }}
        onFacebookPress={() => {
          // Handle Facebook Sign-In here
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4DFBA",
    padding: "8%", // Added padding for the overall screen
  },
  headerSection: {
    marginTop: "15%", // Adjusted for top spacing
    marginBottom: "25%", // Space before the illustration
  },
  imageSection: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "20%", 
  },
  formSection: {
    flex: 1.5,
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 20, // Adjust as needed to align with CustomInput
  },
  linkContainer: {
    alignSelf: 'stretch', // Ensure the container stretches to full width
    alignItems: 'flex-start', // Align links to the right (end)
  },
  linkText: {
    color: "#000",
    fontFamily: "Fredoka_400Regular",
    textAlign: "left", // Align text to the right
    textDecorationLine: "underline", // Underline text for links
    fontSize: 16, 
  },
  buttonSection: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "30%", // Space after the links
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "Fredoka_600SemiBold"
  },
  illustration: {
    width: "100%", // Full width of the container
    height: undefined, // Height will be calculated based on the aspect ratio
    aspectRatio: 1, // Adjust according to your image's aspect ratio
    resizeMode: "contain",
  },
  linkText: {
    color: "#000",
    fontFamily: "Fredoka_400Regular",
    marginVertical: 5,
    justifyContent:"flex-start",
    textAlign:"left", // Center align text
    textDecorationLine: "underline", // Underline text for links
  },
  optionText: {
    fontWeight: "bold",
    fontSize: 16,
    fontFamily: "Fredoka_500Medium",
    textAlign: "center", // Center align text
    marginVertical: 20, // Space around the text
  },
});

export default SignIn;
