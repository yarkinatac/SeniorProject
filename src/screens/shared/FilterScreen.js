import React, { useState, useEffect } from "react";
import { View, ScrollView, StyleSheet, Dimensions, Alert } from "react-native";
import { Slider, Text } from "@rneui/themed";
import CheckboxComponent from "../../components/buttons/CheckboxComponent";
import DropdownComponent from "../../components/inputs/DropdownComponent";
import ToggleButtonPets from "../../components/buttons/ToggleButtonPets";
import axios from "axios";
import SubmitButton from "../../components/buttons/SubmitButton";
import SecondaryButton from "../../components/buttons/SecondaryButton";

const fetchBreeds = async (petType) => {
  try {
    let apiUrl = "";
    let apiKey = "";
    if (petType === "dog") {
      apiUrl = "https://api.thedogapi.com/v1/breeds";
      apiKey = "live_nxJ5jce2mTR7ftAgY66Z2GtY7KaAgf6TLbPnQBxMfFDT10bK5DAR5dvAj5WccUZV";
    } else if (petType === "cat") {
      apiUrl = "https://api.thecatapi.com/v1/breeds";
      apiKey = "live_gXjfFOL8S74dyk3P2eRzWU8aXBQPmF1uBZ0a37hldd3NsHg8avoiIiGwSGXDEc8E";
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

const FilterScreen = ({ navigation }) => {
  const [age, setAge] = useState(5);
  const [distance, setDistance] = useState(10);
  const [personality, setPersonality] = useState([]);
  const [breed, setBreed] = useState("");
  const [sex, setSex] = useState([]);
  const [size, setSize] = useState([]);
  const [shedding, setShedding] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState("");
  const [petType, setPetType] = useState(""); // No default pet type
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    if (petType) {
      fetchBreeds(petType).then(setBreeds);
    }
  }, [petType]);

  const handlePersonalityChange = (trait) => {
    if (personality.includes(trait)) {
      setPersonality(personality.filter((item) => item !== trait));
    } else {
      setPersonality([...personality, trait]);
    }
  };

  const handleSexChange = (trait) => {
    if (sex.includes(trait)) {
      setSex(sex.filter((item) => item !== trait));
    } else {
      setSex([...sex, trait]);
    }
  };

  const handleSizeChange = (trait) => {
    if (size.includes(trait)) {
      setSize(size.filter((item) => item !== trait));
    } else {
      setSize([...size, trait]);
    }
  };

  const handleSheddingChange = (trait) => {
    if (shedding.includes(trait)) {
      setShedding(shedding.filter((item) => item !== trait));
    } else {
      setShedding([...shedding, trait]);
    }
  };

  const handleSave = () => {
    const filters = {
      petType,
      selectedBreed,
      sex,
      age,
      distance,
      size,
      shedding,
      personality,
    };
    navigation.navigate("AdoptPet", { filters });
  };

  const toggleOptions = [
    { label: "Dog", value: "dog" },
    { label: "Cat", value: "cat" },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.headerText}>Filters</Text>

      <View style={styles.unit}>
        <Text style={styles.label}>Pet Type:</Text>
        <ToggleButtonPets options={toggleOptions} onChange={setPetType} activeColor="#A6573E" />
      </View>

      {petType && (
        <View style={styles.unit}>
          <Text style={styles.label}>Breed:</Text>
          <DropdownComponent
            data={breeds}
            onSelect={setSelectedBreed}
            selectedValue={selectedBreed}
            placeholder="Select Breed"
            style={styles.dropdown}
          />
        </View>
      )}

      <View style={styles.unit}>
        <Text style={styles.label}>Sex:</Text>
        {["Female", "Male"].map((option) => (
          <CheckboxComponent
            key={option}
            title={option}
            isChecked={sex.includes(option.toLowerCase())}
            onCheck={() => handleSexChange(option.toLowerCase())}
            textColor="black"
          />
        ))}
      </View>

      <View style={styles.unit}>
        <View style={styles.sliderText}>
          <Text style={styles.label}>Age:</Text>
          <Text style={styles.label}>
            {"< "}
            {age} years
          </Text>
        </View>
        <Slider
          value={age}
          onValueChange={(value) => setAge(value)}
          maximumValue={10}
          minimumValue={1}
          step={1}
          thumbStyle={{
            height: 6 * baseUnit,
            width: 6 * baseUnit,
            backgroundColor: "#A6573E",
          }}
        />
      </View>

      <View style={styles.unit}>
        <Text style={styles.label}>Size:</Text>
        {["X Small", "Small", "Medium", "Large", "X Large"].map((option) => (
          <CheckboxComponent
            key={option}
            title={option}
            isChecked={size.includes(option.toLowerCase())}
            onCheck={() => handleSizeChange(option.toLowerCase())}
            textColor="black"
          />
        ))}
      </View>

      <View style={styles.unit}>
        <Text style={styles.label}>Shedding:</Text>
        {["Low", "Medium", "High"].map((option) => (
          <CheckboxComponent
            key={option}
            title={option}
            isChecked={shedding.includes(option.toLowerCase())}
            onCheck={() => handleSheddingChange(option.toLowerCase())}
            textColor="black"
          />
        ))}
      </View>

      <View style={styles.unit}>
        <Text style={styles.label}>Personality:</Text>
        {["Energetic", "Calm", "Curious"].map((trait) => (
          <CheckboxComponent
            key={trait}
            title={trait}
            isChecked={personality.includes(trait.toLowerCase())}
            onCheck={() => handlePersonalityChange(trait.toLowerCase())}
            textColor="black"
          />
        ))}
      </View>

      <SubmitButton title="Save" onPress={handleSave} color="#A6573E" />
      <SecondaryButton
        title="Reset"
        onPress={() => {
          setAge(5);
          setPersonality([]);
          setBreed("");
          setSex([]);
          setSize([]);
          setShedding([]);
          setSelectedBreed("");
          setPetType("");
        }}
        color="#A6573E"
        
      />
    </ScrollView>
  );
};

const { width } = Dimensions.get("window");
const baseUnit = width / 100;

const styles = StyleSheet.create({
  container: {
    padding: 4 * baseUnit,
    paddingTop: 3 * baseUnit,
    backgroundColor: "#F4DFBA",
  },
  headerText: {
    fontFamily: "Fredoka_600SemiBold",
    textAlign: "center",
    marginTop: 10 * baseUnit,
    fontSize: 10 * baseUnit,
    color: "black",
  },
  label: {
    fontFamily: "Fredoka_500Medium",
    fontSize: 6 * baseUnit,
    color: "#A6573E",
    marginBottom: 3 * baseUnit,
  },
  sliderText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  unit: {
    marginBottom: baseUnit * 3,
  },
  dropdown: {
    height: 50,
    width: "100%",
  },
});

export default FilterScreen;
