import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

import { RootLayout } from '../navigation/RootLayout';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export const SelfAssessmentResultScreen = ({ navigation, route }) =>{
  
    // receive the scores as props
  const { phqScore, gadScore, pssScore } = route.params || { phqScore: 15, gadScore: 15, pssScore: 15 }; // default values for scores

  return (
    <RootLayout navigation={navigation}>
       <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image style={styles.icon} source={require('../assets/arrow_back.svg')} />
        </TouchableOpacity>
        <Image style={styles.logo} source={require('../assets/icon-lotus-flower.svg')} />
        <TouchableOpacity>
          <Image style={styles.icon} source={require('../assets/notifications.svg')} />
        </TouchableOpacity>
      </View>

      {/* Title */}
      <Text style={styles.title}>Your total score was ..... </Text>

      {/* Scores Section */}
      <View style={styles.scoreSection}>
        <Text style={styles.scoreText}>15 in PHQ-9 (Depression Test)</Text>
        <Text style={styles.resultText}>Your result suggests that you may be....</Text>

        <Text style={styles.scoreText}>15 in GAD-7 (Anxiety Screening Test)</Text>
        <Text style={styles.resultText}>Your result suggests that you may be....</Text>

        <Text style={styles.scoreText}>15 in PSS (Stress Test)</Text>
        <Text style={styles.resultText}>Your result suggests that you may be....</Text>
      </View>

      {/* Disclaimer Section */}
      <Text style={styles.disclaimer}>
        Disclaimer: The scores on the following self-assessment do 
        <Text style={{ color: 'red', fontWeight: 'bold' }}> NOT </Text> 
        reflect any particular diagnosis or course of treatment. They are meant as a tool to help assess your current mental well-being. 
        If you have any further concerns about your current well-being, please seek a professional.
      </Text>

      {/* Action Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SeekProfessionalScreen')}>
          <Text style={styles.buttonText}>Seek Professional</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.finishButton]} onPress={() => navigation.navigate('HomeScreen')}>
          <Text style={styles.buttonText}>Finish</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
    </RootLayout>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  scoreSection: {
    marginBottom: 20,
  },
  scoreText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  resultText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 15,
  },
  disclaimer: {
    fontSize: 12,
    textAlign: 'center',
    marginVertical: 20,
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#6200ee',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
    marginBottom: 20,
  },
  finishButton: {
    backgroundColor: '#6200ee',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
