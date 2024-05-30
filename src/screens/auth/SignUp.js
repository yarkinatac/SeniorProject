import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from "../../hooks/useAuth";
import ToggleButton from '../../components/buttons/ToggleButtonAuth';
import InputComponent from '../../components/inputs/InputComponent';
import PhoneNumberInputComponent from '../../components/inputs/PhoneNumberInputComponent';
import SocialSignInButtons from '../../components/buttons/SocialSignInButtons';
import SubmitButton from '../../components/buttons/SubmitButton';
import DividerWithPaw from "../../components/dividers/DividerWithPaw";
import * as MailComposer from 'expo-mail-composer';

const SignUp = () => {
  const { signUp } = useAuth();
  const [userType, setUserType] = useState('personal');
  const opacity = useRef(new Animated.Value(1)).current;
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phoneNumber: '',
    password: '',
    shelterName: '',
    permitNumber: '',
    address: '',
    repName: '',
    repEmail: '',
    repPhone: ''
  });
  const navigation = useNavigation();

  const toggleOptions = [
    { label: 'Personal', value: 'personal' },
    { label: 'Shelter', value: 'shelter' }
  ];

  const handleSubmit = async () => {
    try {
      let payload;
      if (userType === 'personal') {
        const { fullname, email, phoneNumber, password } = formData;
        payload = { fullname: fullname.trim(), email: email.trim(), phoneNumber: phoneNumber.trim(), password: password.trim() };
        await signUp(userType, payload);
        Alert.alert("Success", "You have been registered successfully!");
        navigation.navigate("MainMenu");
      } else {
        const { shelterName, permitNumber, address, repName, repEmail, repPhone } = formData;
        payload = {
          shelterName: shelterName.trim(),
          permitNumber: permitNumber.trim(),
          address: address.trim(),
          repName: repName.trim(),
          repEmail: repEmail.trim(),
          repPhone: repPhone.trim()
        };

        const emailBody = `
          Shelter Name: ${shelterName}\n
          Permit Number: ${permitNumber}\n
          Address: ${address}\n
          Representative Name: ${repName}\n
          Representative Email: ${repEmail}\n
          Representative Phone: ${repPhone}
        `;

        const emailOptions = {
          recipients: ['swe.selim@gmail.com'],
          subject: 'New Shelter Sign-Up',
          body: emailBody,
        };

        const isAvailable = await MailComposer.isAvailableAsync();
        if (isAvailable) {
          await MailComposer.composeAsync(emailOptions);
          Alert.alert("Success", "Your registration details have been sent to our team!");
        } else {
          Alert.alert("Error", "Mail composer is not available on this device.");
        }
      }
    } catch (error) {
      console.error("SignUp Error:", error);
      Alert.alert("Registration Failed", error.message);
    }
  };

  useEffect(() => {
    Animated.sequence([
      Animated.timing(opacity, { toValue: 0, duration: 100, useNativeDriver: true }),
      Animated.timing(opacity, { toValue: 1, duration: 500, useNativeDriver: true })
    ]).start();
  }, [userType]);

  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const navigateToSignIn = () => {
    navigation.navigate('SignIn');
  };

  const handleTermsPress = () => {
    // Handle terms press
  };

  const handlePrivacyPress = () => {
    // Handle privacy press
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Sign Up</Text>
        <ToggleButton options={toggleOptions} onChange={setUserType} />
      </View>
      <ScrollView style={styles.formContainer}>
        <Animated.View style={[styles.form, { opacity }]}>
          {userType === 'personal' ? (
            <View>
              <InputComponent placeholder="Full Name" onChangeText={(text) => handleInputChange('fullname', text)} value={formData.fullname} />
              <InputComponent placeholder="Email" keyboardType={"email-address"} onChangeText={(text) => handleInputChange('email', text)} autoCapitalize={"none"} value={formData.email} />
              <PhoneNumberInputComponent onChangeText={(text) => handleInputChange('phoneNumber', text)} value={formData.phoneNumber} />
              <InputComponent placeholder="Password" secureTextEntry onChangeText={(text) => handleInputChange('password', text)} value={formData.password} />
            </View>
          ) : (
            <View>
              <InputComponent placeholder="Official Name of the Shelter" onChangeText={(text) => handleInputChange('shelterName', text)} value={formData.shelterName} />
              <InputComponent placeholder="Official Permit Number" keyboardType={"phone-pad"} onChangeText={(text) => handleInputChange('permitNumber', text)} value={formData.permitNumber} />
              <InputComponent placeholder="Full Address" onChangeText={(text) => handleInputChange('address', text)} value={formData.address} multiline={true} numberOfLines={3} />
              <Text style={styles.subHeader}>Shelter Representative</Text>
              <InputComponent placeholder="Full Name" onChangeText={(text) => handleInputChange('repName', text)} value={formData.repName} />
              <InputComponent placeholder="Email" keyboardType={"email-address"} onChangeText={(text) => handleInputChange('repEmail', text)} autoCapitalize={"none"} value={formData.repEmail} />
              <PhoneNumberInputComponent onChangeText={(text) => handleInputChange('repPhone', text)} value={formData.repPhone} />
            </View>
          )}
        </Animated.View>
        <SubmitButton title="Submit" onPress={handleSubmit} />
        <Text style={styles.text}>Already have an account?{' '}
          <Text style={styles.loginText} onPress={navigateToSignIn}>
            Log in
          </Text>
        </Text>
        <DividerWithPaw />
        <Text style={styles.dividerText}>
          or continue with
        </Text>
        <SocialSignInButtons />
        <Text style={styles.terms}>
          By signing up to create an account I accept Company's {' '}
          <Text style={styles.link} onPress={handleTermsPress}>
            Terms of Use
          </Text>
          {' and '}
          <Text style={styles.link} onPress={handlePrivacyPress}>
            Privacy Policy.
          </Text>
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4DFBA',
  },
  headerContainer:{
    marginTop: "15%"
  },
  header: {
    fontFamily: "Fredoka_600SemiBold",
    fontSize: 32,
    marginTop: 30,
    marginBottom: 50,
    marginLeft: 15,
  },
  formContainer: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 15,
    borderWidth: 0.2,
    borderRadius: 15,
    borderColor: "black",
    backgroundColor: "#F9E2C1"
  },
  subHeader: {
    fontFamily: "Fredoka_500Medium",
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10
  },
  text: {
    fontFamily: "Fredoka_500Medium",
    textAlign: "center",
    marginVertical: 20
  },
  loginText: {
    color: '#A6573E',
    fontFamily: "Fredoka_500Medium",
  },
  dividerText: {
    fontSize: 18,
    fontFamily: "Fredoka_500Medium",
    color: 'black',
    textAlign: 'center',
    marginTop: 20
  },
  terms: {
    fontFamily: "Fredoka_400Regular",
    marginBottom: 80,
    alignSelf: "center",
    textAlign: "center",
    width: "70%"
  },
  link: {
    color: '#A6573E',
  }
});

export default SignUp;
