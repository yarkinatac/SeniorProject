import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, Image } from 'react-native';

const PetOption = ({ mainText, helpfulText, icon, onPress }) => {
  return (
    <TouchableOpacity style={styles.option} onPress={onPress}>
      {icon && <Image source={icon} style={styles.icon} />}
      <View style={styles.textContainer}>
        <Text style={styles.mainText}>{mainText}</Text>
        {helpfulText && <Text style={styles.helpfulText}>{helpfulText}</Text>}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  option: {
    flexDirection: 'row',
    width:"90%",
    alignItems: 'center',
    backgroundColor: '#EBAF78',
    borderRadius: 20,
    padding: '1%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 3,
  },
  icon: {
    width: 80,
    height: 80,
    marginRight: 20,
    marginLeft: 10,
    alignSelf: 'center',
    margin: '5%'
  },
  textContainer: {
    flex: 1,
  },
  mainText: {
    fontFamily:"Fredoka_500Medium", 
    fontSize: 18,
    paddingBottom: '5%'
  },
  helpfulText: {
    fontFamily:"Fredoka_400Regular", 
    fontSize: 14,
    color: '#6e6e6e',
    paddingRight: '10%'
  },
});

export default PetOption;
