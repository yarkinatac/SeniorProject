import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { Card } from "@rneui/themed";

const PetTypeCard = ({ IconComponent, label, info, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.touchableArea}>
      <Card
        containerStyle={styles.cardContainer}
        wrapperStyle={styles.cardWrapper}
      >
        {IconComponent}
        <Text style={styles.petLabel}>{label}</Text>
        <Text style={styles.info}>{info}</Text>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchableArea: {
    width: '35%',  
    marginVertical: 5,  // Space between rows
    marginRight: '5.5%',    
  },
  cardContainer: {
    alignItems: "center",
    backgroundColor: "#65451F",
    borderRadius: 15,
    borderColor: "#65451F",
    width: '100%',  
  },
  cardWrapper: {
    alignItems: "center",
  },
  petLabel: {
    color: "#FFF7E9",
    fontFamily: "Fredoka_500Medium",
    fontSize: 22,
    marginTop: 10,
  },
  info: {
    color: "#FFF7E9",
    fontSize: 14,
    fontFamily: "Fredoka_400Regular",
  },
});


export default PetTypeCard;
