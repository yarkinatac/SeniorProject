import React from 'react';
import { TouchableOpacity, Image, StyleSheet, View } from 'react-native';
import { Card, Text, useTheme } from '@rneui/themed';

const OptionCard = ({ mainText, helpfulText, icon, onPress }) => {
  const { theme } = useTheme(); // Using the themed hook to access the current theme

  return (
    <TouchableOpacity onPress={onPress}>
      <Card containerStyle={[styles.option, {backgroundColor: theme.colors.primary}]}>
        {icon && <Image source={icon} style={styles.icon} />}
        <View style={styles.textContainer}>
          <Text h4 h4Style={styles.mainText}>{mainText}</Text>
          {helpfulText && <Text style={styles.helpfulText}>{helpfulText}</Text>}
        </View>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  option: {
    flexDirection: 'row',
    width: "90%",
    alignItems: 'center',
    borderRadius: 20,
    padding: 10,
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
  },
  textContainer: {
    flex: 1,
  },
  mainText: {
    fontFamily: "Fredoka_500Medium", 
    paddingBottom: 5,
  },
  helpfulText: {
    fontFamily: "Fredoka_400Regular", 
    fontSize: 14,
    color: '#6e6e6e',
    paddingRight: 10,
  },
});

export default OptionCard;
