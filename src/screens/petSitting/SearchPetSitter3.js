import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import PetDetailsInput from "../../components/inputs/PetDetailsInput";
import DarkBrownButton from "../../components/buttons/DarkBrownButton";
import BackButton from "../../assets/images/icons/back-button.png";
import PetImage from "../../assets/images/home/breeding.png";
import { Calendar } from "react-native-calendars"; // Ensure you've installed react-native-calendars

const SearchPetSitter3 = ({navigation}) => {
  const [request, setRequest] = useState("");
  const [description, setDescription] = useState("");
  const [emailToggle, setEmailToggle] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack()
        }}
      >
        <Image source={BackButton} />
      </TouchableOpacity>
      <View style={styles.imageContainer}>
      <Image source={PetImage} style={styles.petImage} />
      </View>
      <Text style={styles.title}>Select dates</Text>
      <Calendar
  theme={{
    backgroundColor: '#ffffff',
    calendarBackground: '#F4DFBA',
    textSectionTitleColor: '#b6c1cd',
    textSectionTitleDisabledColor: '#d9e1e8',
    selectedDayBackgroundColor: '#ff9e80',
    selectedDayTextColor: '#ffffff',
    todayTextColor: '#ff9e80',
    dayTextColor: '#2d4150',
    textDisabledColor: '#d9e1e8',
    dotColor: '#00adf5',
    selectedDotColor: '#ffffff',
    arrowColor: 'orange',
    disabledArrowColor: '#d9e1e8',
    monthTextColor: 'black',
    indicatorColor: 'blue',
    textDayFontFamily: 'Fredoka_500Medium',
    textMonthFontFamily: 'Fredoka_500Medium',
    textDayHeaderFontFamily: 'Fredoka_600Medium',
    textDayFontWeight: '300',
    textMonthFontWeight: 'bold',
    textDayHeaderFontWeight: '300',
    textDayFontSize: 16,
    textMonthFontSize: 16,
    textDayHeaderFontSize: 16
  }}

  // Marked dates
  markedDates={{
    '2024-01-18': {selected: true, marked: true, selectedColor: 'orange'},
    '2024-01-19': {marked: true},
    '2024-01-20': {marked: true, dotColor: 'red', activeOpacity: 0}
  }}
      />
      <PetDetailsInput
        value={request}
        onChangeText={setRequest}
        placeholder="Add Requests"
      />
      <PetDetailsInput
        value={description}
        onChangeText={setDescription}
        placeholder="Add Description"
        multiline={true}
      />
      <View style={styles.componentContainer}>
      <DarkBrownButton title="Add to List" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4DFBA",
    justifyContent: "center",
    paddingHorizontal: "15%"
  },
  imageContainer: {
    marginTop: "5%",
    borderRadius: 25,
    borderWidth: 1.5,
    borderColor: "#A6573E",
    borderStyle: "solid",
  },
  petImage: {
    width: 360, // or another measurement to fit your layout
    height: 120, // or another measurement to maintain aspect ratio
    resizeMode: "cover",

  },
  title: {
    fontFamily:"Fredoka_600SemiBold",
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: '5%',
  },
  componentContainer: {
    alignSelf: "center",
  }
  // Add styles for other components as needed
});

export default SearchPetSitter3;
