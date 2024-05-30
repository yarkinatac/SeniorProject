import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { Text, Icon } from "@rneui/themed";
import { Entypo } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import CustomHeader from "../../components/header/Header";
import SubmitButton from "../../components/buttons/SubmitButton";
import SecondaryButton from "../../components/buttons/SecondaryButton";
import usePetRegistration from "../../hooks/usePetRegistration";
import { useRoute, useNavigation } from "@react-navigation/native";
import CustomPopup from "../../components/CustomPopUp";

const PhotoUploadScreen = () => {
  const [selectedPhotos, setSelectedPhotos] = useState([]);
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const navigation = useNavigation();
  const route = useRoute();
  const { petData } = route.params;
  const { registerPet, isSubmitting, registrationError } = usePetRegistration();

  useEffect(() => {
    requestPermissions();
  }, []);

  const requestPermissions = async () => {
    const { status: cameraStatus } =
      await ImagePicker.requestCameraPermissionsAsync();
    const { status: mediaLibraryStatus } =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (cameraStatus !== "granted" || mediaLibraryStatus !== "granted") {
      alert(
        "Sorry, we need camera and media library permissions to make this work!"
      );
    }
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedPhotos([...selectedPhotos, ...result.assets.map(asset => ({ uri: asset.uri }))]);
    }
  };

  const takePhoto = async () => {
    const result = await ImagePicker.launchCameraAsync({
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedPhotos([...selectedPhotos, { uri: result.uri }]);
    }
  };

  const handleNext = async () => {
    if (selectedPhotos.length >= 2 && selectedPhotos.length <= 5) {
      try {
        const response = await registerPet(petData, selectedPhotos);

        if (response) {
          setPopupMessage("Pet registered successfully!");
          setPopupVisible(true);
        } else {
          setPopupMessage(registrationError || "Failed to register the pet.");
          setPopupVisible(true);
        }
      } catch (error) {
        console.error("Error registering pet:", error);
        setPopupMessage("An error occurred while registering the pet.");
        setPopupVisible(true);
      }
    } else {
      setPopupMessage("Please select between 2 and 5 photos.");
      setPopupVisible(true);
    }
  };

  const handlePopupClose = () => {
    setPopupVisible(false);
    navigation.navigate("PetRegisteredSuccessfully");
  };

  return (
    <View style={styles.container}>
      <CustomHeader />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Upload a photo of your pet</Text>
        <TouchableOpacity style={styles.imagePlaceholder} onPress={pickImage}>
          <Icon name="image" type="font-awesome" size={50} color="#b5b5b5" />
          <Text style={styles.imagePlaceholderText}>Select picture</Text>
        </TouchableOpacity>

        <Text style={styles.orText}>or</Text>

        <SecondaryButton
          title="Open Camera & Take Photo"
          onPress={takePhoto}
          icon={<Entypo name="camera" size={24} color="black" />}
        />

        <View style={styles.selectedPhotosSection}>
          <Text style={styles.selectedPhotosTitle}>Selected Photos</Text>
          <View style={styles.selectedPhotosContainer}>
            {Array.from({ length: 4 }).map((_, index) => (
              <View key={index} style={styles.photoContainer}>
                {selectedPhotos[index] ? (
                  <Image
                    source={{ uri: selectedPhotos[index].uri }}
                    style={styles.photo}
                  />
                ) : (
                  <Icon
                    name="image"
                    type="font-awesome"
                    size={baseUnit * 12}
                    color="#b5b5b5"
                  />
                )}
              </View>
            ))}
          </View>
          <Text style={styles.instructionText}>
            Select two or more photos to continue
          </Text>
          <SubmitButton title="Next" onPress={handleNext} />
        </View>
      </View>
      <CustomPopup
        visible={popupVisible}
        message={popupMessage}
        onClose={handlePopupClose}
      />
    </View>
  );
};

const { width } = Dimensions.get("window");
const baseUnit = width / 100;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4DFBA",
  },
  contentContainer: {
    flex: 1,
    padding: baseUnit * 4,
  },
  title: {
    fontSize: baseUnit * 6,
    marginBottom: baseUnit * 3,
    fontFamily: "Fredoka_500Medium",
  },
  imagePlaceholder: {
    borderWidth: 1,
    borderColor: "#b5b5b5",
    borderRadius: 10,
    height: "25%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: baseUnit * 2,
  },
  imagePlaceholderText: {
    fontFamily: "Fredoka_400Regular",
    color: "#b5b5b5",
    marginTop: 10,
  },
  orText: {
    fontSize: baseUnit * 6,
    textAlign: "center",
    marginVertical: baseUnit * 3,
    fontFamily: "Fredoka_400Regular",
  },
  selectedPhotosSection: {
    height: "100%",
    margin: baseUnit * - 4,
    padding: "4%",
    alignItems: "center",
    backgroundColor: "#FFF7E9",
    borderTopStartRadius: baseUnit * 7,
    borderTopEndRadius: baseUnit * 7,
    marginTop: baseUnit * 3,
  },
  selectedPhotosTitle: {
    fontSize: baseUnit * 6,
    alignSelf: "flex-start",
    marginBottom: baseUnit * 4,
    fontFamily: "Fredoka_500Medium",
  },
  selectedPhotosContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  photoContainer: {
    width: baseUnit * 18,
    height: baseUnit * 18,
    borderWidth: 1,
    borderColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: baseUnit * 5,
    marginHorizontal: baseUnit * 2
  },
  photo: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  instructionText: {
    marginVertical: baseUnit * 6,
    textAlign: "center",
    fontSize: baseUnit * 4,
    fontFamily: "Fredoka_400Regular",
    marginBottom: baseUnit * 9
  },
});

export default PhotoUploadScreen;
