import React from "react";
import { View, Text, Image, Dimensions, StyleSheet } from "react-native";
import PaginationDots from "../../components/PaginationDots";
import welcomeGif from "../../assets/gifs/welcomeScreens/welcomeScreen2.gif";
import Button from "../../components/buttons/SubmitButton";

const WelcomeScreen2 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.gifContainer}>
        <Image source={welcomeGif} style={styles.gif} />
      </View>
      <View style={styles.textContainer}>
        <PaginationDots currentIndex={1} totalScreens={3} />
        <Text style={styles.title}>Explore Our Core Features</Text>
        <Text style={styles.subtitle}>
          From <Text style={styles.highlight}>adoption</Text> and{" "}
          <Text style={styles.highlight}>breeding</Text> to{" "}
          <Text style={styles.highlight}>pet sitting</Text> and finding the{" "}
          <Text style={styles.highlight}>nearest pet services</Text>, all your
          needs are just a tap away.
        </Text>
        <Button
          title="Next"
          onPress={() => navigation.navigate("WelcomeScreen3")}
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
    fontFamily: "Fredoka_600SemiBold",
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 20,
    color: "#4D3213",
    alignSelf: "auto",
    textAlign: "center",
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
    color:"#E5A55A"
  },
});

export default WelcomeScreen2;
