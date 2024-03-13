import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import ButtonComponent from "../../components/buttons/PrimaryButton";
import SocialSignInButtons from "../../components/buttons/SocialSignInButtons";
import SignInImage from "../../assets/images/login/sign-in.png";
import { useNavigation } from "@react-navigation/native";
import InputComponent from "../../components/inputs/InputComponent";

const SignIn = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      setEmailError("Invalid email format");
    } else {
      setEmailError("");
    }
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9]).{7,}$/;
    if (!regex.test(password)) {
      setPasswordError(
        "Password must be at least 7 characters long and include at least one uppercase letter, one number, and one special character"
      );
    } else {
      setPasswordError("");
    }
  };
  const handleContinue = () => {
    // Validate email and password
    validateEmail(email);
    validatePassword(password);

    // Only navigate to the "HomeScreen" if there are no errors
    if (emailError === '' && passwordError === '') {
      navigation.navigate("HomeScreen");
    }
  };

  const dynamicFormSectionStyle = {
    marginBottom: emailError || passwordError ? 50 : 0, 
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerSection}>
        <Text style={styles.header}>Sign In</Text>
      </View>
      <View style={styles.imageSection}>
        <Image source={SignInImage} style={styles.illustration} />
      </View>
      <View style={[styles.formSection, dynamicFormSectionStyle]}>
        <InputComponent 
          placeholder="Enter Email"
          keyboardType="email-address"
          value={email}
          onChangeText={(text) => {
            setEmail(text);
            validateEmail(text);
          }}
          errorMessage={emailError}
        />
        <InputComponent
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={(text) => {
            setPassword(text);
            validatePassword(text);
          }}
          errorMessage={passwordError}
        />
        <View style={styles.linkContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text style={styles.linkText}>Don't have an account yet?</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("ForgotPassword1")}
          >
            <Text style={styles.linkText}>Forgot your password?</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.buttonSection}>
        <ButtonComponent
          title="Continue"
          onPress={handleContinue}
          
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
    paddingHorizontal: 20,
  },
  linkContainer: {
    alignSelf: "flex-start",
    alignItems: "flex-start",
    marginTop:5
  },
  linkText: {
    color: "#000",
    fontFamily: "Fredoka_400Regular",
    textAlign: "left",
    textDecorationLine: "underline",
    fontSize: 16,
  },
  buttonSection: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "40%",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "Fredoka_600SemiBold",
  },
  illustration: {
    width: "100%",
    height: undefined,
    aspectRatio: 1.5,
    resizeMode: "contain",
  },
  linkText: {
    color: "#000",
    fontFamily: "Fredoka_400Regular",
    marginVertical: 5,
    justifyContent: "flex-start",
    textAlign: "left",
    textDecorationLine: "underline",
  },
  optionText: {
    fontWeight: "bold",
    fontSize: 16,
    fontFamily: "Fredoka_500Medium",
    textAlign: "center",
    marginVertical: 20,
  },
});

export default SignIn;