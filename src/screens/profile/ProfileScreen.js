import React, { useContext } from "react";
import { View, StyleSheet, Dimensions, Text, ScrollView, ActivityIndicator } from "react-native";
import UserProfile from "../../components/profile/UserProfile";
import ListButton from "../../components/profile/ListButton";
import CustomHeader from "../../components/header/HeaderSettings";
import { useNavigation } from "@react-navigation/native";
import { UserContext } from "../../context/UserContext"; // Import UserContext
import MockPhoto from "../../assets/images/profile/avatar.png";

const ProfileScreen = ({}) => {
  const navigation = useNavigation();
  const { user, loading, error } = useContext(UserContext); // Fetch user data from context


  const navigateToMyPets = () => {
    navigation.navigate("ProfileMyPets");
  };

  const navigateToFavorites = () => {
    navigation.navigate("ProfileFavPets");
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text>Error fetching user data</Text>;
  }

  if (!user) {
    return <Text>No user data available</Text>;
  }

  return (
    <View style={styles.container}>
      <CustomHeader />
      <ScrollView>
        <View style={styles.profile}>
          <UserProfile
            name={user.fullname}
            profilePicUri={MockPhoto} // Update this if you have the profile picture URL in the user data
            rating={user.rating || 4} // Assuming you have a rating field
            numOfRating={user.numOfRating || 0} // Assuming you have a numOfRating field
            userType={user.userType || "Pet Owner"} // Assuming you have a userType field
            location={user.location || "Marmaris"} // Assuming you have a location field
            pets={user.pets.length}
          />
        </View>
        <View>
          <Text style={styles.listText}>My Pets</Text>
          <ListButton onPress={navigateToMyPets} />
          <Text style={styles.listText}>Favorites</Text>
          <ListButton onPress={navigateToFavorites} />
        </View>
      </ScrollView>
    </View>
  );
};

const { width, height } = Dimensions.get("window");
const baseUnit = width / 100;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F4DFBA",
  },
  profile: {
    marginTop: baseUnit * 6,
  },
  listText: {
    fontFamily: "Fredoka_500Medium",
    fontSize: baseUnit * 6,
    marginLeft: baseUnit * 2,
    marginVertical: baseUnit * 2,
  },
});
export default ProfileScreen;
