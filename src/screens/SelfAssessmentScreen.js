import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { RootLayout } from '../navigation/RootLayout';
import PreferencesScreen from '../screens/PreferencesScreen';

export const SelfAssessmentScreen = ({navigation}) => {
  return (
    <RootLayout navigation={navigation}>
      <ScrollView contentContainerStyle={styles.container}>
     
      {/* Title Section */}
      <View style={styles.titleSection}>
        <Text style={styles.title}>Self-Assessment</Text>
        <View style={styles.underline}></View>
      </View>

      {/* Description */}
      <Text style={styles.description}>
        Welcome to your self-assessment! This quick and easy check-in helps us understand your well-being better and tailor our support to your needs. Let's get started!
      </Text>

      {/* Disclaimer */}
      <Text style={styles.disclaimer}>
        Disclaimer: The series of tests is a self-administered instrument used in primary care settings. This assessment is 
        <Text style={{ color: 'red', fontWeight: 'bold' }}> NOT </Text> 
        a diagnostic test. Please consult a professional if you are concerned about your well-being.
      </Text>

      {/* Button */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Preferences')}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </ScrollView>
    </RootLayout>
   
    <View style={styles.container}>
      {/* Top Left Greeting */}
      <Text style={styles.greeting}>Self Assessment</Text>
      
      {/* Centered Subtext */}
      <View style={styles.middleContainer}>
        <Text style={styles.subText}>
          Welcome to your self-assessment! This quick and easy check-in helps us understand your well-being better and tailor our support to your needs. Let’s get started!
        </Text>
      </View>
      
      {/* Bottom Text and Button */}
      <View style={styles.bottomContainer}>
        <Text style={styles.bottomText}>
          Disclaimer: The series of test is a self-administered instrument used in primary care settings. This assessment is <Text style={styles.redText}>NOT</Text> a diagnostic test. Please consult a professional if you are concerned about your well-being.
        </Text>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('NextScreen')} // Replace 'NextScreen' with your target screen name
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center',
  },
  titleSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  underline: {
    height: 1,
    backgroundColor: '#000',
    width: '50%',
    marginTop: 5,
  },
  description: {
    textAlign: 'justify',
    fontSize: 16,
    marginVertical: 30,
    color: '#333',
  },
  disclaimer: {
    textAlign: 'justify',
    fontSize: 12,
    color: '#999',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#6200ee',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',  // Ensure spacing between top, middle, and bottom sections
  },
  greeting: {
    fontSize: 40,  // Larger font for title effect
    fontWeight: 'bold',
    textAlign: 'left',
    textDecorationLine: 'underline',  // Underline the title
  },
  middleContainer: {
    justifyContent: 'center',  // Center vertically
    alignItems: 'center',      // Center horizontally
    flex: 1,                   // Takes up remaining space
  },
  subText: {
    fontSize: 20,
    color: '#333',
    textAlign: 'center',  // Center text
    marginHorizontal: 20, // Optional: add padding to avoid touching the screen edges
  },
  bottomContainer: {
    alignItems: 'center',  // Center the bottom text and button
  },
  bottomText: {
    fontSize: 15,
    color: '#6c757d',
    fontStyle: 'italic',
    marginBottom: 20,  // Add spacing between text and button
  },
  redText: {
    color: 'red',  // Style for the word "NOT"
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  button: {
    backgroundColor: '#65558F',  // Button color
    paddingVertical: 8,
    paddingHorizontal: 100,
    borderRadius: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});