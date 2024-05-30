import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Image,
  Modal,
  ActivityIndicator,
} from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import CustomHeader from "../../components/header/HeaderShare";
import SecondaryButton from "../../components/buttons/SecondaryButton";
import PetDetails from "../../components/pet/PetDetails";
import PetOwnerNav from "../../components/pet/PetOwnerNav";
import PagerView from "react-native-pager-view";
import axios from 'axios';

const PetInformation = ({ route, navigation }) => {
  const { pet } = route.params;
  const [pets, setPets] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [confirmModalVisible, setConfirmModalVisible] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPets = async () => {
    try {
      const response = await axios.get('https://petsconapi3.azurewebsites.net/api/v2/Pet');
      setPets(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPets();
  }, []);

  const handleImagePress = (index) => {
    setSelectedImageIndex(index);
    setModalVisible(true);
  };

  const handleDelete = async (petId) => {
    try {
      await axios.delete(`https://petsconapi3.azurewebsites.net/api/v2/Pet/${petId}`);
      fetchPets(); // Fetch the updated pet list after deletion
      navigation.goBack(); // Navigate back after deletion
    } catch (error) {
      console.log(pet);
      console.error("Error deleting pet:", error);
    }
    setConfirmModalVisible(false);
  };

  const owner = pet.owner || { avatarUrl: null, fullname: "Selim Yaylalı" };

  if (isLoading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text>Error fetching pets</Text>;
  }

  return (
    <View style={styles.container}>
      <CustomHeader />
      <PagerView style={styles.pagerView} initialPage={0}>
        {pet.photos.map((photo, index) => (
          <TouchableOpacity key={index} onPress={() => handleImagePress(index)}>
            <View style={styles.page}>
              <Image source={{ uri: photo.photoUrl }} style={styles.image} />
            </View>
          </TouchableOpacity>
        ))}
      </PagerView>
      <ScrollView style={styles.container}>
        <View style={styles.detailsContainer}>
          <View style={styles.middleBar}>
            <Text style={styles.name}>{pet.name}</Text>
            <Ionicons
              name="remove-circle-sharp"
              size={baseUnit * 8}
              color="white"
              onPress={() => setConfirmModalVisible(true)} // Show confirm modal
            />
          </View>
          <View style={styles.detailsRow}>
            <PetDetails title="Age" value={`${pet.age} Years`} />
            <PetDetails title="Breed" value={pet.breed} />
          </View>
          <View style={styles.detailsRow}>
            <PetDetails title="Sex" value={pet.sex} />
            <PetDetails title="Location" value="Karsiyaka, İzmir" />
          </View>
          <View style={styles.bioContainer}>
            <Text style={styles.detailTitle}>Bio:</Text>
            <Text style={styles.bio}>{pet.bio}</Text>
          </View>
          <PetOwnerNav
            onPress={() => {}}
            owner={{
              avatarUrl: owner.avatarUrl,
              name: owner.fullname,
            }}
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.likeButton}>
              <FontAwesome name="heart-o" size={baseUnit * 8} color="#A6573E" />
            </TouchableOpacity>
            <SecondaryButton title="Let's Match" />
          </View>
        </View>
      </ScrollView>
      <Modal visible={modalVisible} transparent={true}>
        <View style={styles.modalContainer}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.closeButtonText}>X</Text>
          </TouchableOpacity>
          <PagerView
            style={styles.fullPagerView}
            initialPage={selectedImageIndex}
          >
            {pet.photos.map((photo, index) => (
              <View key={index} style={styles.fullPage}>
                <Image
                  source={{ uri: photo.photoUrl }}
                  style={styles.fullImage}
                />
              </View>
            ))}
          </PagerView>
        </View>
      </Modal>
      <Modal visible={confirmModalVisible} transparent={true}>
        <View style={styles.confirmModalContainer}>
          <View style={styles.confirmModalContent}>
            <Text style={styles.confirmText}>Do you want to delete this pet?</Text>
            <View style={styles.confirmButtonContainer}>
              <TouchableOpacity
                style={styles.confirmButton}
                onPress={() => handleDelete(pet.petId)} // Pass pet.petId as the argument
              >
                <Text style={styles.confirmButtonText}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.confirmButton}
                onPress={() => setConfirmModalVisible(false)}
              >
                <Text style={styles.confirmButtonText}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const { width, height } = Dimensions.get("window");
const baseUnit = width / 100;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#876445",
  },
  pagerView: {
    width: width,
    height: height * 0.25,
  },
  page: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: width,
    height: height * 0.25,
    resizeMode: "cover",
  },
  name: {
    fontFamily: "Fredoka_600SemiBold",
    fontSize: baseUnit * 8,
    color: "white",
  },
  detailsContainer: {
    padding: baseUnit * 4,
    paddingHorizontal: baseUnit * 5,
    paddingBottom: baseUnit * 50,
    paddingTop: baseUnit * 8,
    backgroundColor: "#876445",
    alignSelf: "center",
    width: width,
  },
  middleBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: baseUnit * 2,
  },
  detailsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: baseUnit * 2,
  },
  detailTitle: {
    fontFamily: "Fredoka_500Medium",
    fontSize: baseUnit * 5,
    color: '#EBAF78',
  },
  detailValue: {
    fontFamily: "Fredoka_400Regular",
    fontSize: baseUnit * 4,
    color: 'white',
    textTransform: "capitalize",
  },
  bioContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    marginBottom: baseUnit * 2,
    width: width * 0.9,
    alignItems: "flex-start",
    marginLeft: baseUnit * 2,
  },
  bio: {
    fontFamily: "Fredoka_400Regular",
    marginTop: baseUnit * 1.2,
    fontSize: baseUnit * 4,
    marginBottom: baseUnit * 8,
    color: "white",
  },
  buttonContainer: {
    marginTop: baseUnit * 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: baseUnit * 3,
  },
  likeButton: {
    backgroundColor: "#EAC696",
    padding: baseUnit * 1,
    borderRadius: 7,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    justifyContent: "center",
    alignItems: "center",
  },
  fullPagerView: {
    width: width,
    height: height,
  },
  fullPage: {
    justifyContent: "center",
    alignItems: "center",
  },
  fullImage: {
    width: width,
    height: height,
    resizeMode: "contain",
  },
  closeButton: {
    position: "absolute",
    top: baseUnit * 10,
    right: baseUnit * 8,
    zIndex: 1,
  },
  closeButtonText: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
  confirmModalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  confirmModalContent: {
    width: width * 0.8,
    padding: baseUnit * 5,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
  confirmText: {
    fontSize: baseUnit * 6,
    fontFamily: "Fredoka_600SemiBold",
    marginBottom: baseUnit * 4,
  },
  confirmButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  confirmButton: {
    padding: baseUnit * 3,
    backgroundColor: "#A6573E",
    borderRadius: 10,
    alignItems: "center",
    flex: 1,
    marginHorizontal: baseUnit * 2,
  },
  confirmButtonText: {
    color: "white",
    fontSize: baseUnit * 4,
  },
});

export default PetInformation;
