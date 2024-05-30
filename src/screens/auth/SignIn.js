import React, { useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../hooks/useAuth";
import SubmitButton from "../../components/buttons/SubmitButton";
import SocialSignInButtons from "../../components/buttons/SocialSignInButtons";
import SignInImage from "../../assets/images/login/sign-in.png";
import InputComponent from "../../components/inputs/InputComponent";

const SignIn = () => {
  const { signIn } = useAuth();
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleContinue = async () => {
    // Validate email and password before trying to sign in
    const emailValid = validateEmail(email);
    const passwordValid = validatePassword(password);

    if (!emailValid || !passwordValid) {
      // Don't proceed if validations fail
      return;
    }

    try {
      await signIn(email, password);
      navigation.navigate("MainScreen");
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      setEmailError("Invalid email format");
      return false;
    } else {
      setEmailError("");
      return true;
    }
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*[A-Z])(?=.*[0-9]).{7,}$/;
    if (!regex.test(password)) {
      setPasswordError(
        "Password must be at least 7 characters long and include at least one uppercase letter and one number"
      );
      return false;
    } else {
      setPasswordError("");
      return true;
    }
  };

  const navigateToSignUp = () => {
    navigation.navigate("SignUp");
  };

  const handleForgotYourPasswordPress = () => {
    navigation.navigate("ForgotPassword1");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerSection}>
        <Text style={styles.header}>Sign In</Text>
      </View>
      <View style={styles.imageSection}>
        <Image source={SignInImage} style={styles.illustration} />
      </View>
      <View style={styles.formSection}>
        <InputComponent
          placeholder="Enter Email"
          keyboardType="email-address"
          autoCapitalize="none"
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
          <Text style={styles.linkText} onPress={navigateToSignUp}>
            Don't have an account yet?
          </Text>

          <Text style={styles.linkText} onPress={handleForgotYourPasswordPress}>
            Forgot your password?
          </Text>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <SubmitButton title="Continue" onPress={handleContinue} />
        <Text style={styles.dividerText}>or continue with</Text>
        <SocialSignInButtons />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#F4DFBA",
    justifyContent: 'center'
  },
  headerSection: {
    height: 80, // Fixed height for header section
    justifyContent:"center",
    alignItems: "flex-start",
    marginTop: "10%",
    marginLeft: "5%"
  },
  imageSection: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
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
    marginTop: 5,
  },
  header: {
    fontFamily: "Fredoka_600SemiBold",
    fontSize: 32,
  },
  illustration: {
    width: "100%",
    height: undefined,
    aspectRatio: 1.5,
    resizeMode: "contain",
  },
  linkText: {
    color: "#000",
    fontFamily: "Fredoka_500Medium",
    marginVertical: 5,
    justifyContent: "flex-start",
    textAlign: "left",
    textDecorationLine: "underline",
  },
  dividerText: {
    fontSize: 18,
    fontFamily: "Fredoka_500Medium",
    color: "black",
    textAlign: "center",
    marginTop: 20,
  },
  bottomContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SignIn;
