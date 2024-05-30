import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  FlatList,
  Dimensions,
  TextInput,
  Animated
} from 'react-native';

const DropdownComponent = ({ data, onSelect, selectedValue, placeholder, style }) => {
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState(selectedValue);
  const [searchQuery, setSearchQuery] = useState('');
  const [animation] = useState(new Animated.Value(0));

  const handleSelect = (item) => {
    setValue(item);
    onSelect(item);
    setVisible(false);
    animateModal(false);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredData = data.filter((item) =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleModal = () => {
    setVisible(!visible);
    animateModal(!visible);
  };

  const animateModal = (isOpening) => {
    Animated.timing(animation, {
      toValue: isOpening ? 1 : 0,
      duration: 300,
      useNativeDriver: true
    }).start();
  };

  const modalTranslateY = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [300, 0]
  });

  return (
    <View style={[styles.dropdownContainer, style]}>
      <TouchableOpacity style={styles.dropdownButton} onPress={toggleModal}>
        <Text style={styles.dropdownText}>{value || placeholder}</Text>
      </TouchableOpacity>
      <Modal transparent={true} visible={visible} onRequestClose={toggleModal}>
        <TouchableOpacity style={styles.modalOverlay} onPress={toggleModal}>
          <Animated.View style={[styles.modalContent, { transform: [{ translateY: modalTranslateY }] }]}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search..."
              value={searchQuery}
              onChangeText={handleSearch}
            />
            <FlatList
              data={filteredData}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.item} onPress={() => handleSelect(item)}>
                  <Text style={styles.itemText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </Animated.View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const { width } = Dimensions.get('window');
const baseUnit = width / 100;

const styles = StyleSheet.create({
  dropdownContainer: {
    marginTop: 10,
    marginBottom: 10,
  },
  dropdownButton: {
    height: baseUnit * 13,
    backgroundColor: '#F4DFBA',
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#65451F',
    borderRadius: 12,
    justifyContent: 'center',
  },
  dropdownText: {
    fontFamily: 'Fredoka_400Regular',
    color: 'black',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 4,
    padding: 10,
    maxHeight: 300,
    width: '80%',
  },
  searchInput: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 10,
    paddingHorizontal: 10,
    fontFamily: 'Fredoka_400Regular',
    color: 'black',
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  itemText: {
    fontFamily: 'Fredoka_400Regular',
    color: 'black',
  },
});

export default DropdownComponent;
