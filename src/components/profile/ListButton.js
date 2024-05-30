import React from "react";
import { TouchableOpacity, Text, StyleSheet, Dimensions, ImageBackground } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { BlurView } from 'expo-blur';

const { width } = Dimensions.get("window");
const baseWidth = 375;
const baseUnit = (width / baseWidth) * 4;

const ListButton = ({ onPress }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <ImageBackground
      source={require("../../assets/images/profile/background-image.png")} 
      style={{ width: "100%", height: "100%" }}
    >
      <BlurView intensity={10} style={styles.blurView}>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>See List </Text>
          <AntDesign name="enter" size={3 * baseUnit} color="#fff" />
        </TouchableOpacity>
      </BlurView>
    </ImageBackground>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    borderRadius: 6,
    borderWidth: baseUnit,
    borderColor: "#65451F",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: baseUnit / 2,
    width: baseUnit * 80,
    height: baseUnit * 40,
    overflow: "hidden", 
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    borderColor:"white",
    borderWidth: baseUnit / 3,
    backgroundColor: '#65451F', // Semi-transparent background for contrast
    paddingVertical: 3 * baseUnit,
    paddingHorizontal: 6 * baseUnit,
    borderRadius:  4,
  },
  buttonText: {
    fontFamily:"Fredoka_500Medium",
    fontSize: 4 * baseUnit,
    color: "#fff",
    marginLeft: baseUnit, // Add some space between the icon and text
  },
  blurView: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default ListButton;
