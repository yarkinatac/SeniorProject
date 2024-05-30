import React from "react";
import { View, Text, Image, Dimensions, StyleSheet } from "react-native";
import PaginationDots from "../../components/PaginationDots";
import welcomeGif from "../../assets/gifs/welcomeScreens/welcomeScreen1.gif";
import Button from "../../components/buttons/SubmitButton";

const PetSittingOnboarding5 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.gifContainer}>
        <Image source={welcomeGif} style={styles.gif} />
      </View>
      <View style={styles.textContainer}>
        <PaginationDots currentIndex={4} totalScreens={5} />
        <Text style={styles.title}>Flexible Services</Text>
        <Text style={styles.subtitle}>
          Offer or find a variety of pet sitting options, from daily walks to
          long-term stays, tailored to fit any schedule.{" "}
        </Text>
        <Button
          title="Get Started"
          onPress={() => navigation.navigate("PetSittingHome")}
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
    textAlign: "center",
    fontFamily: "Fredoka_600SemiBold",
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 20,
    color: "#4D3213",
    alignSelf: "auto",
  },
  subtitle: {
    fontFamily: "Fredoka_500Medium",
    fontSize: 22,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 50,
    color: "#535353",
  },
  highlight: {
    color: "#E5A55A",
  },
});

export default PetSittingOnboarding5;
