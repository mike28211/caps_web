import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import PreferencesScreen from '../screens/PreferencesScreen';

const Stack = createStackNavigator();

export default function SelfAssessmentScreen({navigation}) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Image style={styles.icon} source={require('../assets/arrow_back.svg')} />
        </TouchableOpacity>
        <Image style={styles.logo} source={require('../assets/icon-lotus-flower.svg')} />
        <TouchableOpacity>
          <Image style={styles.icon} source={require('../assets/notifications.svg')} />
        </TouchableOpacity>
      </View>

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
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  icon: {
    width: 24,
    height: 24,
  },
  logo: {
    width: 40,
    height: 40,
  },
  titleSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  underline: {
    height: 1,
    backgroundColor: '#000',
    width: '50%',
    marginTop: 5,
  },
  description: {
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 30,
    color: '#333',
  },
  disclaimer: {
    textAlign: 'center',
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
    fontSize: 16,
    fontWeight: 'bold',
  },
});

