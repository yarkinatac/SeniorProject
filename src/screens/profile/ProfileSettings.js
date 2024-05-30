import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";
import ProfileTextInput from "../../components/inputs/ProfileTextInput";
import MockPhoto from "../../assets/images/profile/avatar.png";
import CustomButton from "../../components/buttons/SubmitButton";
import CustomHeader from "../../components/header/HeaderSettings";
import SecondaryButton from "../../components/buttons/SecondaryButton";
import useLogout from "../../hooks/useLogout";

const { width } = Dimensions.get("window");
const baseUnit = (width / 375) * 4; // Base unit for responsive design

const ProfileSettingsScreen = () => {
  const [userInfo, setUserInfo] = useState({
    firstName: "Selim",
    lastName: "Yaylalı",
    email: "bebe@gmail.com",
    phone: "603-443-3041",
    address: "Washington, DC",
    language: "English",
  });

  const handleInputChange = (name, value) => {
    setUserInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handlePress = () => {
    // Define what happens when you press the button
    console.log("Button pressed");
  };

  const saveProfile = () => {
    // Here you would handle the saving of the profile data
    console.log("Profile saved", userInfo);
  };

  const logout = useLogout();

  return (
    <View style={styles.container}>
      <CustomHeader />
      <ScrollView>
        <View style={styles.section}>
          <Image source={MockPhoto} style={styles.profilePic} />
          <Text style={styles.sectionTitle}>Information</Text>
          <ProfileTextInput
            name="firstName"
            value={userInfo.firstName}
            onChangeText={handleInputChange}
            placeholder="First Name"
          />
          <ProfileTextInput
            name="lastName"
            value={userInfo.lastName}
            onChangeText={handleInputChange}
            placeholder="Last Name"
          />
          <ProfileTextInput
            name="email"
            value={userInfo.email}
            onChangeText={handleInputChange}
            placeholder="Email"
          />
          <ProfileTextInput
            name="phone"
            value={userInfo.phone}
            onChangeText={handleInputChange}
            placeholder="Phone"
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Preferences</Text>
          <ProfileTextInput
            name="address"
            value={userInfo.address}
            onChangeText={handleInputChange}
            placeholder="Address"
          />
          <ProfileTextInput
            name="language"
            value={userInfo.language}
            onChangeText={handleInputChange}
            placeholder="Language"
          />
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton
            onPress={handlePress}
            title="Save"
            buttonColor="#A6573E" // Example button color
            textColor="#FFFBF3" // Example text color
          />
          <SecondaryButton
            onPress={logout}
            title="Log Out"
            buttonColor="#EBAF78" // Another example button color
            textColor="#A6573E"
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4DFBA",
  },
  profilePic: {
    width: baseUnit * 45,
    height: baseUnit * 45,
    borderRadius:  30,
    borderWidth: baseUnit,
    borderColor: "#A6573E",
    alignSelf: "center",
    marginBottom: baseUnit * 4,
  },
  section: {
    marginBottom: baseUnit * 4,
    padding: 20,
  },
  sectionTitle: {
    fontFamily: "Fredoka_600SemiBold",
    fontSize: baseUnit * 6.5,
    fontWeight: "bold",
    marginVertical: baseUnit * 4,
  },
  buttonContainer: {
    alignItems: "center",
    marginBottom: "20%",
  },
});

export default ProfileSettingsScreen;
