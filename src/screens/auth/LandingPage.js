import React from "react";
import { View,Text,StyleSheet,Image,Dimensions} from "react-native";
import SubmitButton from "../../components/buttons/SubmitButton";
import DividerWithPaw from "../../components/dividers/DividerWithPaw";
import appLogo from "../../assets/images/login/logo.png";
import SecondaryButton from "../../components/buttons/SecondaryButton";

const LandingPage = ({ navigation }) => {
  const handleSignInPress = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "SignIn" }],
    });
  };

  const handleSignUpPress = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "SignUp" }],
    });
  };

  return (
    <View
      contentContainerStyle={styles.contentContainer}
      style={styles.container}
    >
      <Image source={appLogo} style={styles.logo} />
      <DividerWithPaw />
      <Text style={styles.title}>
        Finding homes, perfect pairs, and caring hands...
      </Text>
      <Text style={styles.subtitle}>
        This is where every pet's journey matters!
      </Text>
      <SubmitButton title="Sign In" onPress={handleSignInPress} />
      <SecondaryButton title="Sign Up" onPress={handleSignUpPress} />
    </View>
  );
};
const { width, height } = Dimensions.get("window");
const baseUnit = width / 100;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F4DFBA",
  },
  logo: {
    width: baseUnit * 90,
    height: baseUnit * 90,
    resizeMode: "contain",
    marginBottom:  baseUnit * 2,
  },
  title: {
    fontFamily: "Fredoka_500Medium",
    fontSize: baseUnit * 6,
    color: "#000000",
    textAlign: "center",
    fontWeight: "bold",
    marginTop:  baseUnit * 4,
    marginHorizontal: baseUnit * 9,
  },
  subtitle: {
    fontFamily: "Fredoka_500Medium",
    fontSize: baseUnit * 6,
    color: "#000000",
    textAlign: "center",
    marginHorizontal: baseUnit * 9,
    marginBottom: baseUnit * 7,
  },
});

export default LandingPage;
