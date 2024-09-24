import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';   //https://www.npmjs.com/package/react-native-radio-buttons-group

import { RootLayout } from '../navigation/RootLayout';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export const SelfAssessmentScreen3 = ({navigation}) => {
  // State for each question's answer
  const [answers, setAnswers] = useState({
   
    upsetUnexpectedly: 'never', 
    unableControlThings: 'never',
    nervousAndStressed: 'never',
    handlePersonalProblems: 'never',
    thingsGoingYourWay: 'never',
    unableToCope: 'never',
    controlIrritations: 'never',
    onTopOfThings: 'never',
    angeredByThings: 'never',
    pilingUpDifficulties: 'never',
  });

  const handleSelectOption = (key, value) => {
    setAnswers((prevAnswers) => ({ ...prevAnswers, [key]: value }));
  };

  return (
    <RootLayout navigation={navigation}>
      <ScrollView style={styles.container}>
     
      {/* Title */}
      
      <Text style={styles.introText}>
        In the last month, how often..
      </Text>

      {/* Questions with Never options */}
      {[
        { label: 'How often have you been upset because of something that happened unexpectedly?', key: 'upsetUnexpectedly' },
        { label: 'Have you felt that you were unable to control the important things in your life?', key: 'unableControlThings' },
        { label: 'Have you felt nervous and stressed?', key: 'nervousAndStressed' },
        { label: 'Have you felt confident about your ability to handle your personal problems?', key: 'handlePersonalProblems' },
        { label: 'Have you felt that things were going your way?', key: 'thingsGoingYourWay' },
        { label: 'Have you found that you could not cope with all the things you had to do?', key: 'unableToCope' },
        { label: 'Have you been able to control irritations in your life?', key: 'controlIrritations' },
        { label: 'Have you felt that you were on top of things?', key: 'onTopOfThings' },
        { label: 'Have you been angered because of things that happened that were outside of your control?', key: 'angeredByThings' },
        { label: 'Have you felt difficulties were piling up so high that you could not overcome them?', key: 'pilingUpDifficulties' },
      ].map((question) => (
        <View style={styles.inputSection} key={question.key}>
          <Text style={styles.label}>{question.label}</Text>
          <View style={styles.radioGroup}>
            <RadioGroup
              radioButtons={[
                { id: '1', label: 'Never', value: 'never' },
                { id: '2', label: 'Sometimes', value: 'sometimes' },
                { id: '3', label: 'Fairly often', value: 'fairlyOften' },
                { id: '4', label: 'Very often', value: 'veryOften' },
              ]}
              onPress={(value) => handleSelectOption(question.key, value)}
              selectedId={answers[question.key]}
              containerStyle={styles.radioGroupContainer}
            />
          </View>
        </View>
      ))}

      {/* Next Button */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SelfAssessmentResult')}>
        <Text style={styles.buttonText}>Finish</Text>
      </TouchableOpacity>
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
  introText: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  inputSection: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  radioGroup: {
    alignItems: 'flex-start',
  },
  radioGroupContainer: {
    width: '100%', 
    alignItems: 'flex-start', 
  },
  button: {
    backgroundColor: '#6200ee',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
