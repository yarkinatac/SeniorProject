import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import InputComponent from "../../components/inputs/InputComponent";
import DarkBrownButton from "../../components/buttons/DarkBrownButton";
import CheckboxComponent from "../../components/buttons/CheckboxComponent";
import ImageComponent from "../../components/image/ImageComponent";
import DogImage from "../../assets/images/login/lying-dog.png";
import EyeIcon from "../../assets/images/icons/eye-icon.png";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const navigation = useNavigation();

  const handleSignUp = () => {
    // Here you would typically handle the sign-up logic, possibly validating
    // the input and then sending it to a backend service.
    // This is a placeholder for that functionality.
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    if (!termsAccepted) {
      alert("Please accept the terms and conditions.");
      return;
    }
    alert(`Welcome, ${firstName}! Your account is being created.`);
  };

  const navigateToTerms = () => {
    // Logic to navigate to Terms & Conditions screen
  };

  const navigateToPrivacy = () => {
    // Logic to navigate to Privacy Policy screen
  };

  return (
    <View
      contentContainerStyle={styles.contentContainer}
      style={styles.container}
    >
      <View style={styles.headerSection}>
        <Text style={styles.header}>Sign Up</Text>
      </View>

      <View style={styles.form}>
        <ImageComponent source={DogImage} style={styles.image} />
        <InputComponent
          placeholder="First Name"
          onChangeText={setFirstName}
          value={firstName}
        />
        <InputComponent
          placeholder="Last Name"
          onChangeText={setLastName}
          value={lastName}
        />
        <InputComponent
          placeholder="Email"
          onChangeText={setEmail}
          value={email}
        />
        <InputComponent
          placeholder="Password"
          secureTextEntry
          onChangeText={setPassword}
          value={password}
          // Include an icon prop if your InputComponent supports it
          icon={<ImageComponent source={EyeIcon}/>}
        />
        <InputComponent
          placeholder="Confirm Password"
          secureTextEntry
          onChangeText={setConfirmPassword}
          value={confirmPassword}
          // Include an icon prop if your InputComponent supports it
          icon={<ImageComponent source={EyeIcon}/>}
        />
        <View style={styles.checkboxContainer}>
          <CheckboxComponent
            style={styles.checkbox}
            isChecked={termsAccepted}
            onCheck={() => setTermsAccepted(!termsAccepted)}
          />
          <View style={{ flex: 1 }}>
            <Text style={styles.checkboxText}>
              I accept{" "}
              <Text style={styles.linkText} onPress={navigateToTerms}>
                Terms & Conditions
              </Text>
              {" and "}
              <Text style={styles.linkText} onPress={navigateToPrivacy}>
                Privacy Policy
              </Text>
            </Text>
          </View>
        </View>
        <DarkBrownButton
          title="Continue"
          style={styles.button}
          onPress={() => navigation.navigate("HomeScreen")}
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
    backgroundColor: "#F4DFBA",
    padding: "8%",
  },
  headerSection: {
    alignItems: "flex-start",
    marginTop: "15%", // Adjusted for top spacing
    marginBottom: "25%", // Space before the illustration
  },
  contentContainer: {
    justifyContent: "center",
    alignItems: "flex-start",
  },
  form: {
    width: "100%",
    maxWidth: 500,
    alignSelf: "center",
  },
  header: {
    fontFamily: "Fredoka_600SemiBold",
    fontSize: baseUnit * 7,
    alignSelf: "flex-start",
    marginLeft: 20,
  },
  imageContainer: {
    alignItems: "flex-start",
  },
  image: {
    width: 160,
    height: 70,
    marginRight: 50,
    marginBottom: -5,
  },
  input: {
    height: baseUnit * 6,
    marginVertical: baseUnit,
    borderWidth: 1,
    padding: baseUnit,
    borderRadius: baseUnit,
  },
  eyeIcon: {
    position: "absolute",
    right: 10,
    bottom: 10,
  },
  button: {
    width: "100%", // Button should span the full width
    paddingVertical: baseUnit * 1.5,
    height: baseUnit * 15,
  },
  checkbox: {
    marginVertical: baseUnit * 2,
    marginRight: baseUnit * 2,
  },
  checkboxContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start", // Align items to the start of the cross axis
    marginTop: baseUnit * 5,
    marginBottom: baseUnit * 7
  },
  linkText: {
    color: "#A6573E",
    textDecorationLine: "underline",
    marginLeft: 4,
    fontFamily: "Fredoka_400Regular",
    fontSize: baseUnit * 4,
  },
  checkboxText: {
    fontFamily: "Fredoka_400Regular",
    fontSize: baseUnit * 4,
  },
});

export default SignUp;
