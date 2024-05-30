import React from "react";
import { Image, StyleSheet, Dimensions, View } from "react-native";
import { Button, Text } from "@rneui/themed";


const SquareButton = ({ imageSource, label, onPress, imageStyle }) => (
  <Button
    buttonStyle={styles.button}
    onPress={onPress}
    containerStyle={{ margin: "2%" }}
  >
    <View style={styles.content}>
      <Text style={styles.label}>{label}</Text>
      <Image source={imageSource} style={[styles.image, imageStyle]} />
    </View>
  </Button>
);
const buttonWidth = Dimensions.get("window").width / 2 - 30;
const { height } = Dimensions.get("window");
const baseUnit = height / 100;

const styles = StyleSheet.create({
  button: {
    width: buttonWidth,
    height: baseUnit * 22,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#EBAF78",
    borderRadius: 24,
    borderColor:"#A6573E",
    borderWidth: 0.75,
  },
  content: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "90%", 
    height: "85%", 
    resizeMode: "contain",
  },
  label: {
    fontFamily: "Fredoka_500Medium",
    fontSize: baseUnit * 3,
    marginVertical: "5%",
    alignSelf: "flex-start",
    marginLeft: "5%",
  },
});

export default SquareButton;
