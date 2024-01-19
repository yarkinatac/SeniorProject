import React from "react";
import { View, StyleSheet } from "react-native";

const PaginationDots = ({ currentIndex, totalScreens }) => {
  return (
    <View style={styles.container}>
      {Array.from({ length: totalScreens }, (_, index) => (
        <View
          key={index}
          style={[
            styles.dot,
            index === currentIndex ? styles.activeDot : styles.inactiveDot,
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 5,
    paddingTop: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: "black", // Active dot color
  },
  inactiveDot: {
    backgroundColor: "grey", // Inactive dot color
  },
});

export default PaginationDots;
