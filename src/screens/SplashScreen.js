import React, { useEffect, useRef } from "react";
import {Animated, View, Text, Image, StyleSheet, Dimensions } from "react-native";
import LoadingGif from "../assets/gifs/welcomeScreens/loading.gif"

const { width, height } = Dimensions.get("window");
const baseUnit = width / 100;

const SplashScreen = () => {
  const fadeAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 0.2,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [fadeAnim]);
  return (
    <View style={styles.container}>
      <Image
        source={LoadingGif} // Replace with the correct path to your GIF
        style={styles.animation}
      />
      <Animated.Text style={[styles.loadingText, { opacity: fadeAnim }]}>
        Loading...
      </Animated.Text>
      <Text style={styles.messageText}>
        Don't worry. Your furry friends are floating on by and will be with you
        shortly.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F4DFBA", 
  },
  animation: {
    width: width * 0.8, 
    height: height * 0.4, 
  },
  loadingText: {
    fontFamily:"Fredoka_600SemiBold",
    marginTop: baseUnit * 15, 
    fontSize: baseUnit * 7, 
    fontWeight: "bold",
    color: "#65451F", 
  },
  messageText: {
    fontFamily:"Fredoka_500Medium",
    marginTop: baseUnit * 4, 
    fontSize: baseUnit * 4, 
    fontStyle: "italic",
    textAlign: "center",
    color: "#6e6e6e", 
    paddingHorizontal: 30, 
  },
});

export default SplashScreen;
