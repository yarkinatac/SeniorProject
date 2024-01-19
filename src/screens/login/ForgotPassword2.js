// ForgetPasswordScreen.js
import React from "react";
import { View, Text, StyleSheet, Image} from "react-native";
import { useNavigation } from "@react-navigation/native";
import DarkBrownButton from "../../components/buttons/DarkBrownButton";
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
        <DarkBrownButton
          title="Return to Login"
          onPress={() => {
            navigation.navigate("SignIn")
          }}
          width={300}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "left", // This will center all children horizontally
    justifyContent: "center", // This will center all children vertically
    backgroundColor: "#F4DFBA",
    marginTop: 0,
  },
  textContainer: {
    alignSelf:"flex-start",
    marginHorizontal: '13%'
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: '8%',
  },
  subtitle: {
    width: 250,
    fontSize: 18,
  },
  illustration: {
    width: '90%', // Use a percentage of the screen width
    height: '50%', // Allow the height to be determined by the aspect ratio of the image
    aspectRatio: 1, // Adjust this according to your image's aspect ratio
    resizeMode: 'contain',
    alignSelf: 'center', // Center the image horizontally
  },
  buttonContainer: {
    alignSelf: "center",
    marginBottom: '30%'
},
});

export default ForgotPassword2;
