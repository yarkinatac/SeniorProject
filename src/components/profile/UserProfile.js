import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { FontAwesome, FontAwesome6 } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStars = rating % 1 !== 0 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStars;
  
  let stars = [];
  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <FontAwesome key={`full-${i}`} name="star" size={24} color="#A6573E" />
    );
  }
  if (halfStars) {
    stars.push(
      <FontAwesome key={`half`} name="star-half-empty" size={24} color="#A6573E" />
    );
  }
  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <FontAwesome key={`empty-${i}`} name="star-o" size={24} color="#A6573E" />
    );
  }
  return <View style={styles.starsContainer}>{stars}</View>;
};

const UserProfile = ({
  name,
  profilePicUri,
  rating,
  numOfRating,
  userType,
  location,
  pets,
}) => {
  const navigation = useNavigation();

  const navigateToNewPet = () => {
    navigation.navigate("PetSelection");
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={profilePicUri} style={styles.profilePicContainer} />
        <View style={styles.profileBio}>
          <View style={styles.nameContainer}>
            <Text style={styles.nameText}>{name}</Text>
          </View>

          <TouchableOpacity style={styles.starsContainer}>
            {renderStars(rating)}
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.infoL}>
          <View style={styles.userType}>
            <FontAwesome name="paw" size={24} color="#A6573E" style={styles.paw} />
            <Text style={styles.infoText}>
              {userType}
            </Text>
          </View>
          <View style={styles.userLoc}>
            <FontAwesome6 name="location-dot" size={24} color="#A6573E" />
            <Text style={styles.infoText}>{location}</Text>
          </View>
        </View>
        <View style={styles.infoR}>
          <TouchableOpacity style={styles.chatButton} onPress={navigateToNewPet}>
            <Text style={styles.chatText}>New Pet</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.infoText}>{pets} pets</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const { width } = Dimensions.get("window");
const baseWidth = 375;
const baseUnit = (width / baseWidth) * 4;

const styles = StyleSheet.create({

  profileContainer: {
    flexDirection: "row",
    gap: baseUnit * 10,
  },
  profilePicContainer: {
    width: 35 * baseUnit,
    height: 35 * baseUnit,
    borderRadius: 30,
    borderColor: "#A6573E",
    borderWidth: baseUnit,
    overflow: "scroll",
    resizeMode: "contain",
    marginBottom: 2 * baseUnit,
  },
  settings: {
    alignSelf: "flex-end",
  },
  profileBio: {
    alignSelf: "center",
    marginBottom: baseUnit * 15,
  },
  nameText: {
    fontSize: 7 * baseUnit,
    fontWeight: "bold",
    marginVertical: 2 * baseUnit,
    marginTop: baseUnit * 5,
    fontFamily:"Fredoka_600SemiBold",
  },
  infoText: {
    fontSize: 4 * baseUnit,
    color: "#A6573E",
    marginBottom: 3 * baseUnit,
    fontFamily:"Fredoka_500Medium",
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: baseUnit * 3,
  },
  chatButton: {
    backgroundColor: "#A6573E",
    padding: baseUnit * 1.5,
    paddingHorizontal: baseUnit * 7,
    borderRadius:   6,
  },
  chatText: {
    fontSize: 4 * baseUnit,
    color: "white",
    textAlign: "center",
    fontFamily:"Fredoka_400Regular",
  },
  infoL: {
    gap: baseUnit * 4,
  },
  infoR: {
    alignItems: "center",
    gap: baseUnit * 4,
  },

  starsContainer: {
    flexDirection: "row",
    marginBottom: 1 * baseUnit,
    gap: baseUnit,
  },
  star: {
    width: 4 * baseUnit,
    height: 4 * baseUnit,
    // Add your star image here
  },
  userType: {
    flexDirection: "row",
    gap: baseUnit,
  },
  userLoc: {
    flexDirection: "row",
    gap: baseUnit * 2,
    marginLeft: baseUnit * 0.5,
  },
  nameContainer: {
    width: width*0.4
  }
});

export default UserProfile;
