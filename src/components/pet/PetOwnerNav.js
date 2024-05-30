import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Icon } from '@rneui/themed';

const defaultAvatar = require('../../assets/images/profile/avatar.png');

const PetOwnerNav = ({ onPress, owner }) => {
  const { avatarUrl, name } = owner || { avatarUrl: null, name: "Unknown" };
  const avatarSource = avatarUrl ? { uri: avatarUrl } : defaultAvatar;

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={avatarSource} style={styles.avatar} />
      <View style={styles.textContainer}>
        <Text style={styles.ownerText}>Owner</Text>
        <Text style={styles.nameText}>{name}</Text>
      </View>
      <Icon
        name="chevron-right"
        type="font-awesome"
        color="#A6573E"
        size={baseUnit * 6}
        containerStyle={styles.iconContainer}
      />
    </TouchableOpacity>
  );
};

const { width } = Dimensions.get("window");
const baseUnit = width / 100;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EAC696',
    borderRadius: 20,
    paddingVertical: baseUnit * 2,
    paddingHorizontal: baseUnit * 4,
    marginVertical: baseUnit * 2,
    alignSelf: "center"
  },
  avatar: {
    width: baseUnit * 14,
    height: baseUnit * 14,
    borderRadius: 30,
    borderWidth: 1
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: baseUnit * 3
  },
  ownerText: {
    fontFamily: 'Fredoka_600SemiBold',
    color: '#A6573E',
    fontSize: baseUnit * 6,
  },
  ownerName: {
    fontFamily: 'Fredoka_500Medium',
    color: '#0000',
    fontSize: baseUnit * 5,
    textTransform: "capitalize"
  },
  nameText: {
    fontFamily: 'Fredoka_400Regular',
    fontSize: baseUnit * 4,
    color: '#323232',
    textTransform: "capitalize"
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    marginLeft: baseUnit * 4,
  },
});

export default PetOwnerNav;
