import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import DarkBrownButton from "../../components/buttons/DarkBrownButton";
import DividerWithPaw from "../../components/dividers/DividerWithPaw";
import appLogo from "../../assets/images/login/logo.png"
import WhiteButton from "../../components/buttons/WhiteButton";


const LandingPage = ({ navigation }) => {
  return (
    <View
      contentContainerStyle={styles.contentContainer}
     style={styles.container}>
      <Image source={appLogo} style={styles.logo} />
      <DividerWithPaw/>
      <Text style={styles.title}>
        Finding homes, perfect pairs, and caring hands...
      </Text>
      <Text style={styles.subtitle}>
        This is where every pet's journey matters!
      </Text>
      <DarkBrownButton
        title="Sign In"
        onPress={() => navigation.navigate("SignIn")}
      />
      <WhiteButton
        title="Sign Up"
        onPress={() => navigation.navigate("SignUp")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#F4DFBA',
  },
  logo: {
    width: 380,
    height: 370,
    resizeMode: "contain",
    marginBottom: 30,
  },
  title: {
    fontFamily:"Fredoka_500Medium",
    fontSize: 24,
    color: '#000000',
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 20,
    marginHorizontal: 15
  },
  subtitle: {
    fontFamily:"Fredoka_500Medium",
    fontSize: 24,
    color: '#000000',
    textAlign: "center",
    fontWeight: "bold",
    marginHorizontal: 40,
    marginBottom: 40,
  },
});

export default LandingPage;
