import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import PaginationDots from "../../components/PaginationDots"; 
import welcomeGif from "../../assets/gifs/welcomeScreens/welcomeScreen3.gif";
import CustomButton from "../../components/buttons/WelcomeScreenButton";

const WelcomeScreen3 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.gifContainer}>
        <Image source={welcomeGif} style={styles.gif} />
      </View>
      <View style={styles.textContainer}>
        <PaginationDots currentIndex={2} totalScreens={3} />
        <Text style={styles.title}>Lorem Ipsum</Text>
        <Text style={styles.subtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc urna
          libero, dapibus quis augue quis, aliquet dapibus massa.
        </Text>
        <CustomButton
          title="Get Started"
          onPress={() => navigation.navigate("LandingPage")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gifContainer: {
    flex: 1.5,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#F4DFBA",
  },
  textContainer: {
    flex: 1,
    marginTop: "-20%",
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingVertical: 20,
    paddingHorizontal: 50,
    alignItems: "center",
  },
  gif: {
    width: 350,
    height: 350,
  },
  title: {
    fontFamily:"Fredoka_600SemiBold",
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 20,
    color: "black",
  },
  subtitle: {
    fontFamily:"Fredoka_500Medium",
    fontSize: 20,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 50,
    color: "grey",
  },
});

export default WelcomeScreen3;
