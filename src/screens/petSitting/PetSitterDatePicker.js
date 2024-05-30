import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Alert, Dimensions } from "react-native";
import { Calendar } from "react-native-calendars";
import * as CalendarAPI from "expo-calendar";
import PetDetailsInput from "../../components/inputs/PetDetailsInput";
import SubmitButton from "../../components/buttons/SubmitButton";
import CustomHeader from "../../components/header/Header";

const SearchPetSitter3 = () => {
  const [request, setRequest] = useState("");
  const [description, setDescription] = useState("");
  const [markedDates, setMarkedDates] = useState({});
  const [calendarId, setCalendarId] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  useEffect(() => {
    (async () => {
      const { status } = await CalendarAPI.requestCalendarPermissionsAsync();
      if (status === "granted") {
        const calendars = await CalendarAPI.getCalendarsAsync(
          CalendarAPI.EntityTypes.EVENT
        );
        setCalendarId(calendars[0].id);
      }
    })();
  }, []);

  const onDayPress = (day) => {
    const today = new Date().toISOString().split("T")[0];

    // Block selecting dates before today
    if (day.dateString < today) {
      Alert.alert("Invalid Date", "You cannot select a date before today.");
      return;
    }

    let marked = {};

    if (!startDate) {
      setStartDate(day.dateString);
      marked[day.dateString] = {
        startingDay: true,
        color: "#65451F",
        textColor: "#ffffff",
      };
    } else if (!endDate && day.dateString > startDate) {
      setEndDate(day.dateString);
      let start = new Date(startDate);
      let end = new Date(day.dateString);
      let current = new Date(start);

      while (current <= end) {
        const dateString = current.toISOString().split("T")[0];
        if (dateString === startDate) {
          marked[dateString] = {
            startingDay: true,
            color: "#65451F",
            textColor: "#ffffff",
          };
        } else if (dateString === day.dateString) {
          marked[dateString] = {
            endingDay: true,
            color: "#65451F",
            textColor: "#ffffff",
          };
        } else {
          marked[dateString] = {
            color: "#65451F",
            textColor: "#ffffff",
          };
        }
        current.setDate(current.getDate() + 1);
      }
    } else {
      setStartDate(day.dateString);
      setEndDate(null);
      marked[day.dateString] = {
        startingDay: true,
        color: "#65451F",
        textColor: "#ffffff",
      };
    }

    setMarkedDates(marked);
  };

  const addEventToCalendar = async () => {
    if (!calendarId || !startDate || !endDate) {
      Alert.alert("Missing Information", "Please select a date range.");
      return;
    }

    const details = {
      title: "Pet Sitting Request",
      startDate: new Date(startDate),
      endDate: new Date(endDate),
      notes: description,
      timeZone: "GMT",
    };

    await CalendarAPI.createEventAsync(calendarId, details);
    Alert.alert(
      "Event added to calendar",
      "Your request has been added to the calendar."
    );
    // Logic to send the date range to the database goes here
  };

  const onPressArrowLeft = (subtractMonth) => {
    const today = new Date();
    const previousMonth = new Date(currentMonth);
    previousMonth.setMonth(currentMonth.getMonth() - 1);

    if (
      previousMonth.getFullYear() < today.getFullYear() ||
      (previousMonth.getFullYear() === today.getFullYear() &&
        previousMonth.getMonth() < today.getMonth())
    ) {
      return;
    }

    setCurrentMonth(previousMonth);
    subtractMonth();
  };

  const onPressArrowRight = (addMonth) => {
    const nextMonth = new Date(currentMonth);
    nextMonth.setMonth(currentMonth.getMonth() + 1);

    setCurrentMonth(nextMonth);
    addMonth();
  };

  return (
    <View style={styles.container}>
      <CustomHeader />
      <Text style={styles.title}>Select dates</Text>
      <View style={styles.contentContainer}>
        <Calendar
          current={currentMonth.toISOString().split("T")[0]}
          onDayPress={onDayPress}
          markedDates={markedDates}
          markingType={"period"}
          renderArrow={(direction) => (
            <Text style={styles.arrowText}>
              {direction === "left" ? "<" : ">"}
            </Text>
          )}
          onPressArrowLeft={onPressArrowLeft}
          onPressArrowRight={onPressArrowRight}
          firstDay={1} // Week starts from Monday
          theme={{
            backgroundColor: "#EAC696",
            calendarBackground: "#EAC696",
            textSectionTitleColor: "#b6c1cd",
            selectedDayBackgroundColor: "#ff9e80",
            selectedDayTextColor: "#ffffff",
            todayTextColor: "#A6573E",
            dayTextColor: "#2d4150",
            textDisabledColor: "#d9e1e8",
            dotColor: "#A6573E",
            selectedDotColor: "#ffffff",
            arrowColor: "#65451F",
            monthTextColor: "black",
            indicatorColor: "black",
            textDayFontFamily: "Fredoka_500Medium",
            textMonthFontFamily: "Fredoka_500Medium",
            textDayHeaderFontFamily: "Fredoka_600Medium",
          }}
        />
        <View style={styles.inputContainer}>
          <PetDetailsInput
            value={request}
            onChangeText={setRequest}
            placeholder="Add Requests"
            style={styles.input}
          />
          <PetDetailsInput
            value={description}
            onChangeText={setDescription}
            placeholder="Add Description"
            multiline={true}
            style={styles.input}
          />
        </View>
      </View>

      <SubmitButton
        title="Add to List"
        onPress={addEventToCalendar}
        style={styles.button}
      />
    </View>
  );
};
const { width, height } = Dimensions.get("window");
const baseUnit = width / 100;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4DFBA",
  },
  title: {
    fontFamily: "Fredoka_600SemiBold",
    fontSize: baseUnit * 6,
    marginVertical: baseUnit * 2,
    marginLeft: baseUnit * 3,
    color: "#000",
  },
  contentContainer: {
    marginHorizontal: baseUnit * 5,
  },
  inputContainer:{
    marginTop: baseUnit * 10
  },
  arrowText: {
    fontSize: 18,
    color: "orange",
  },
});

export default SearchPetSitter3;
