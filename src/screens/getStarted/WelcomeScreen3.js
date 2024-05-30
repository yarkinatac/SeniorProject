import React from "react";
import { View, Text, Image, Dimensions, StyleSheet } from "react-native";
import PaginationDots from "../../components/PaginationDots";
import welcomeGif from "../../assets/gifs/welcomeScreens/welcomeScreen3.gif";
import Button from "../../components/buttons/SubmitButton";
import { setAppLaunched } from "../../services/firstLaunchService";

const WelcomeScreen3 = ({ navigation }) => {
  const handleFinishOnboarding = async () => {
    await setAppLaunched();
    navigation.navigate("LandingPage");
  };

  return (
    <View style={styles.container}>
      <View style={styles.gifContainer}>
        <Image source={welcomeGif} style={styles.gif} />
      </View>
      <View style={styles.textContainer}>
        <PaginationDots currentIndex={2} totalScreens={3} />
        <Text style={styles.title}>Stay Connected</Text>
        <Text style={styles.subtitle}>
          Get involved in the <Text style={styles.highlight}>
          PetsConnected
          </Text> community! Share stories, seek
          advice, and stay informed with tips from pet care experts. Sign up
          today to <Text style={styles.highlight}>start your journey !</Text>
        </Text>
        <Button title="Get Started" onPress={handleFinishOnboarding} />
      </View>
    </View>
  );
};

const { width, height } = Dimensions.get("window");
const baseUnit = width / 100;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gifContainer: {
    flex: 1.25,
    justifyContent: "center",
    alignItems: "center",
    padding: baseUnit * 5,
    backgroundColor: "#F4DFBA",
  },
  textContainer: {
    flex: 1,
    marginTop: "-20%",
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingVertical: baseUnit * 5,
    paddingHorizontal: baseUnit * 6,
    alignItems: "center",
  },
  gif: {
    width: 350,
    height: 350,
  },
  title: {
    fontFamily: "Fredoka_600SemiBold",
    fontSize: 32,
    textAlign:"center",
    fontWeight: "bold",
    marginTop: 20,
    color: "#65451F",
  },
  subtitle: {
    fontFamily: "Fredoka_500Medium",
    fontSize: 22,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 50,
    color: "#535353",
  },
  highlight:{
    color:"#E5A55A"
  }
});

export default WelcomeScreen3;
