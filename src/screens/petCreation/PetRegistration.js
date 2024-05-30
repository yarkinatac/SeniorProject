import React, { useState, useEffect } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import InputComponent from "../../components/inputs/InputComponent";
import CheckboxComponent from "../../components/buttons/CheckboxComponent";
import PersonalityButton from "../../components/buttons/PersonalityButton";
import DropdownComponent from "../../components/inputs/DropdownComponent";
import CustomHeader from "../../components/header/Header";
import SubmitButton from "../../components/buttons/SubmitButton";
import axios from "axios";

const fetchBreeds = async (petType) => {
  try {
    let apiUrl = "";
    let apiKey = "";
    if (petType === "dog") {
      apiUrl = "https://api.thedogapi.com/v1/breeds";
      apiKey =
        "live_nxJ5jce2mTR7ftAgY66Z2GtY7KaAgf6TLbPnQBxMfFDT10bK5DAR5dvAj5WccUZV";
    } else if (petType === "cat") {
      apiUrl = "https://api.thecatapi.com/v1/breeds";
      apiKey =
        "live_gXjfFOL8S74dyk3P2eRzWU8aXBQPmF1uBZ0a37hldd3NsHg8avoiIiGwSGXDEc8E";
    }

    const response = await axios.get(apiUrl, {
      headers: { "x-api-key": apiKey },
    });

    return response.data.map((breed) => breed.name);
  } catch (error) {
    console.error(`Error fetching ${petType} breeds:`, error);
    return [];
  }
};

const PetRegistration = ({ route }) => {
  const navigation = useNavigation();
  const { petType, advertType } = route.params; // Ensure advertType is received
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [breed, setBreed] = useState("");
  const [sex, setSex] = useState("");
  const [breeds, setBreeds] = useState([]);
  const [size, setSize] = useState("");
  const [shedding, setShedding] = useState("");
  const [bio, setBio] = useState("");
  const [personalityTraits, setPersonalityTraits] = useState([]);
  const [showAllPersonalities, setShowAllPersonalities] = useState(false);
  const healthOptions = ["Healthy", "Needs Attention", "Special Needs"];
  const personalityOptions = [
    "Energetic",
    "Calm",
    "Aggressive",
    "Affectionate",
    "Shy",
    "Curious",
    "Easy-Going",
    "Grumpy",
  ];
  const maxPersonalityTraits = 4;

  const togglePersonalityTrait = (trait) => {
    setPersonalityTraits((prevTraits) => {
      if (prevTraits.includes(trait)) {
        return prevTraits.filter((t) => t !== trait);
      } else if (prevTraits.length < maxPersonalityTraits) {
        return [...prevTraits, trait];
      }
      return prevTraits;
    });
  };

  const handleSexChange = (value) => setSex(value);
  const handleSizeChange = (selectedSize) => setSize(selectedSize);
  const handleSheddingChange = (selectedShedding) => setShedding(selectedShedding);
  const handleBreedSelect = (selectedBreed) => setBreed(selectedBreed);
  const handleToggleViewAll = () => setShowAllPersonalities(!showAllPersonalities);

  useEffect(() => {
    fetchBreeds(petType).then(setBreeds);
  }, [petType]);

  const validateName = (name) => typeof name === "string" && name.trim() !== "";
  const validateAge = (age) => /^\d+$/.test(age);
  const handleSubmit = async () => {
    if (!validateName(name)) {
      alert("Please enter a valid name.");
      return;
    }
  
    if (!validateAge(age)) {
      alert("Please enter a valid age using numbers only.");
      return;
    }
  
    const petData = {
      name,
      age: parseInt(age, 10),
      breed,
      sex,
      size,
      shedding,
      bio,
      personality: personalityTraits.join(", "),
      advertType: 0,
      petType, // Ensure petType is included
    };
  
  
    navigation.navigate("PhotoUpload", { petData });
  };
  

  return (
    <View style={styles.header}>
      <CustomHeader />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.label}>Name:</Text>
        <InputComponent
          placeholder="Enter pet's name"
          onChangeText={setName}
          value={name}
          style={styles.textField}
        />
        {!validateName(name) && name.length > 0 && (
          <Text style={styles.errorText}>Name is required.</Text>
        )}

        <Text style={styles.label}>Age:</Text>
        <InputComponent
          placeholder="Enter pet's age"
          onChangeText={setAge}
          value={age}
          keyboardType="numeric"
          style={styles.textField}
        />
        {!validateAge(age) && age.length > 0 && (
          <Text style={styles.errorText}>Age must be a number.</Text>
        )}

        <View>
          <Text style={styles.label}>Breed:</Text>
          <DropdownComponent
            data={breeds}
            onSelect={handleBreedSelect}
            selectedValue={breed}
            placeholder="Select Breed"
          />
        </View>

        <View style={styles.checkboxGroup}>
          <Text style={styles.label}>Sex:</Text>
          <CheckboxComponent
            title="Male"
            onCheck={() => handleSexChange("male")}
            isChecked={sex === "male"}
            style={styles.CheckboxComponent}
          />
          <CheckboxComponent
            title="Female"
            onCheck={() => handleSexChange("female")}
            isChecked={sex === "female"}
            style={styles.CheckboxComponent}
          />
        </View>

        <View style={styles.checkboxGroup}>
          <Text style={styles.label}>Size:</Text>
          <CheckboxComponent
            title="X-Small"
            onCheck={() => handleSizeChange("xSmall")}
            isChecked={size === "xSmall"}
            style={styles.CheckboxComponent}
          />
          <CheckboxComponent
            title="Small"
            onCheck={() => handleSizeChange("small")}
            isChecked={size === "small"}
            style={styles.CheckboxComponent}
          />
          <CheckboxComponent
            title="Medium"
            onCheck={() => handleSizeChange("medium")}
            isChecked={size === "medium"}
            style={styles.CheckboxComponent}
          />
          <CheckboxComponent
            title="Large"
            onCheck={() => handleSizeChange("large")}
            isChecked={size === "large"}
            style={styles.CheckboxComponent}
          />
          <CheckboxComponent
            title="X-Large"
            onCheck={() => handleSizeChange("xLarge")}
            isChecked={size === "xLarge"}
            style={styles.CheckboxComponent}
          />
        </View>

        <View style={styles.checkboxGroup}>
          <Text style={styles.label}>Shedding:</Text>
          <CheckboxComponent
            title="Low"
            onCheck={() => handleSheddingChange("low")}
            isChecked={shedding === "low"}
            style={styles.CheckboxComponent}
          />
          <CheckboxComponent
            title="Medium"
            onCheck={() => handleSheddingChange("medium")}
            isChecked={shedding === "medium"}
            style={styles.CheckboxComponent}
          />
          <CheckboxComponent
            title="High"
            onCheck={() => handleSheddingChange("high")}
            isChecked={shedding === "high"}
            style={styles.CheckboxComponent}
          />
        </View>

        <View>
          <Text style={styles.label}>Health Info:</Text>
          <DropdownComponent
            data={healthOptions}
            onSelect={() => {}}
            selectedValue={""}
            placeholder="Select Health Status"
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Personality:</Text>
          <View style={styles.personalityContainer}>
            {personalityOptions
              .slice(0, showAllPersonalities ? personalityOptions.length : 6)
              .map((option, index) => (
                <PersonalityButton
                  key={`${option}-${index}`}
                  title={option}
                  isSelected={personalityTraits.includes(option)}
                  onToggle={(trait) => {
                    togglePersonalityTrait(trait);
                  }}
                />
              ))}
          </View>
          <TouchableOpacity onPress={handleToggleViewAll}>
            <Text style={styles.viewAllText}>
              {showAllPersonalities ? "View Less" : "View All"}
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.label}>Bio:</Text>
          <InputComponent
            placeholder="Your pet's info"
            onChangeText={setBio}
            value={bio}
            multiline={true}
            style={styles.bioField}
            numberOfLines={3}
          />
        </View>

        <View style={styles.submitButtonContainer}>
          <SubmitButton title="NEXT" onPress={handleSubmit} />
        </View>
      </ScrollView>
    </View>
  );
};

const { width } = Dimensions.get("window");
const baseUnit = width / 100;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F4DFBA",
    padding: baseUnit * 5,
  },
  textField: {
    marginBottom: baseUnit * 0.01,
    borderColor: "#65451F",
    borderWidth: 1,
  },
  section: {
    marginBottom: baseUnit,
  },
  sectionTitle: {
    fontSize: baseUnit * 5,
    fontFamily: "Fredoka_400Regular",
    marginBottom: 10,
  },
  personalityContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 10,
  },
  viewAllText: {
    fontFamily: "Fredoka_400Regular",
    color: "black",
    textAlign: "right",
    marginBottom: 10,
    marginRight: baseUnit * 4,
  },
  label: {
    fontFamily: "Fredoka_500Medium",
    fontSize: baseUnit * 5,
    marginVertical: baseUnit * 2,
    marginLeft: baseUnit,
    textAlign: "left",
  },
  CheckboxComponent: {
    marginVertical: baseUnit * 2,
    marginLeft: baseUnit * 1.5,
  },
  bioField: {
    height: baseUnit * 25,
  },
  submitButtonContainer: {
    marginBottom: 100,
  },
  errorText: {
    color: "red",
    fontFamily: "Fredoka_400Regular",
  },
});

export default PetRegistration;

