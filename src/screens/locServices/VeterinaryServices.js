import React from "react";
import {
  View,
  Dimensions,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import ServiceCard from "../../components/cards/ServiceCard";
import LocServiceNav from "../../components/nav/LocServiceNav";
import Divider from "../../components/dividers/Divider";
import ArrowLeft from "../../assets/images/icons/arrow-left.png";
import { useNavigation } from "@react-navigation/native"; // Assuming you're using react-navigation

const VeterinaryServices = () => {
  const navigation = useNavigation();

  const nearbyVeterinaries = [
    {
      name: "Comb and Collar",
      rating: 5,
      distance: 2.5,
      price: "100",
      status: "open",
      hours: "8:00 am - 5:00 pm",
    },
    {
      name: "Comb and Collar",
      rating: 5,
      distance: 2.5,
      price: "100",
      status: "open",
      hours: "8:00 am - 5:00 pm",
    },
  ];
  const recommendedVeterinaries = [
    {
      name: "Paws and Relax Spa",
      rating: 5,
      distance: 3.5,
      price: "120",
      status: "open",
      hours: "9:00 am - 8:00 pm",
    },
  ];
  const handleServiceSelect = (screen) => {
    navigation.navigate("screen");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButtonContainer}
        onPress={() => {
          navigation.navigate("HomeScreen");
        }}
      >
        <Image source={ArrowLeft} style={styles.backButton} />
      </TouchableOpacity>
      <LocServiceNav
        onServiceSelect={handleServiceSelect}
        activeService="VeterinaryServices"
      />
      <Divider />
      <View style={styles.sectionContainer}>
        <View style={styles.containerTitle}>
          <Text style={styles.sectionTitle}>Nearby Veterinaries</Text>
          <TouchableOpacity
            onPress={() => {
              /* navigate to all nearby boardings */
            }}
          >
            <Text style={styles.seeAll}>See all</Text>
          </TouchableOpacity>
        </View>

        {nearbyVeterinaries.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            onPress={() => {
              /* navigate to service detail */
            }}
          />
        ))}
      </View>
      <Divider />
      <View style={styles.sectionContainer}>
        <View style={styles.containerTitle}>
          <Text style={styles.sectionTitle}>Recommended Veterinaries</Text>
          <TouchableOpacity
            onPress={() => {
              /* navigate to all recommended boardings */
            }}
          >
            <Text style={styles.seeAll}>See all</Text>
          </TouchableOpacity>
        </View>

        {recommendedVeterinaries.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            onPress={() => {
              /* navigate to service detail */
            }}
          />
        ))}
      </View>
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
  containerTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: baseUnit * 5,
    marginTop: baseUnit * 7,
  },
  sectionTitle: {
    fontFamily: "Fredoka_500Medium",
    fontSize: baseUnit * 5,
  },
  seeAll: {
    color: "#646464",
    marginTop: baseUnit,
    fontFamily: "Fredoka_400Regular",
    fontSize: baseUnit * 4,
  },
  backButtonContainer: {
    backgroundColor: "#775227",
    height: baseUnit * 20,
  },
  backButton: {
    marginTop: baseUnit * 12,
    marginLeft: baseUnit * 1.5,
  },
});

export default VeterinaryServices;
