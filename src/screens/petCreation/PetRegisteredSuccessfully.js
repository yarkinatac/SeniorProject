import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import LottieView from "lottie-react-native";
import { Button } from "@rneui/themed";

const PetRegisteredSuccessfully = ({ navigation }) => {
  const handleBackToHome = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <LottieView
        source={require("../../assets/animations/success.json")}
        autoPlay
        loop={false}
        style={styles.animation}
      />
      <Text style={styles.title}>Pet Registered Successfully!</Text>
      <Button
        title="BACK TO HOME"
        onPress={handleBackToHome}
        buttonStyle={styles.button}
      />
    </View>
  );
};

const { width } = Dimensions.get("window");
const baseUnit = width / 100;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F4DFBA",
  },
  animation: {
    width: baseUnit * 40,
    height: baseUnit * 40,
  },
  title: {
    fontSize: baseUnit * 6,
    fontFamily: "Fredoka_600SemiBold",
    marginVertical: baseUnit * 2,
  },
  button: {
    backgroundColor: "#65451F",
    padding: baseUnit * 2,
    borderRadius: 6,
  },
});

export default PetRegisteredSuccessfully;
