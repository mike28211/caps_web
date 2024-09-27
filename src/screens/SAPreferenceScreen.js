import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';   //https://www.npmjs.com/package/react-native-radio-buttons-group

import { RootLayout } from '../navigation/RootLayout';


export const SAPreferenceScreen = ({navigation}) => {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [availability, setAvailability] = useState('morning'); 

  return (
    <RootLayout navigation={navigation} screenName={'Preferences'}>
      <View style={styles.container}>
      
    
      {/* Title */}
      <Text style={styles.title}>Preferences</Text>

      {/* Age Input */}
      <View style={styles.inputSection}>
        <Text style={styles.label}>Age of Professional</Text>
        <TextInput
          style={styles.input}
          value={age}
          onChangeText={setAge}
          keyboardType="numeric"
          placeholder="Enter age"
        />
      </View>

      {/* Gender Selection */}
      <View style={styles.inputSection}>
        <Text style={styles.label}>Gender of Professional</Text>
        <RadioGroup
          radioButtons={[
            { id: '1', label: 'Male', value: 'male' },
            { id: '2', label: 'Female', value: 'female' },
          ]}
          onPress={setGender}
          selectedId={gender}
          layout="row"
        />
      </View>

      {/* Availability Selection */}
      <View style={styles.inputSection}>
        <Text style={styles.label}>Availability</Text>
        <RadioGroup
          radioButtons={[
            { id: '1', label: 'Morning', value: 'morning' },
            { id: '2', label: 'Afternoon', value: 'afternoon' },
            { id: '3', label: 'Evening', value: 'evening' },
          ]}
          onPress={setAvailability}
          selectedId={availability}
          layout="row"
        />
      </View>

      {/* Next Button */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SelfAssessment2')}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
    </RootLayout>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  icon: {
    width: 24,
    height: 24,
  },
  logo: {
    width: 40,
    height: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    marginTop: 45,
  },
  inputSection: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#6200ee',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});