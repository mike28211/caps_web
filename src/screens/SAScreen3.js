import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';   //https://www.npmjs.com/package/react-native-radio-buttons-group
import { RootLayout } from '../navigation/RootLayout';
import { Colors } from '../config';

export const SAScreen3 = ({navigation, route}) => {
  const { gad7Total, phq9Total } = route.params;
  // State for each question's answer
  const [answers, setAnswers] = useState({
    upsetUnexpectedly: '0', 
    unableControlThings: '0',
    nervousAndStressed: '0',
    handlePersonalProblems: '0',
    thingsGoingYourWay: '0',
    unableToCope: '0',
    controlIrritations: '0',
    onTopOfThings: '0',
    angeredByThings: '0',
    pilingUpDifficulties: '0',
  });

  const handleSelectOption = (key, value) => {
    setAnswers((prevAnswers) => ({ ...prevAnswers, [key]: value }));
  };

  const calculatePSSTotalScore = () => {
    const pssKeys = [
      'upsetUnexpectedly',
      'unableControlThings',
      'nervousAndStressed',
      'handlePersonalProblems',
      'thingsGoingYourWay',
      'unableToCope',
      'controlIrritations',
      'onTopOfThings',
      'angeredByThings',
      'pilingUpDifficulties',
    ];
    //Questions that need to be reversed
    const reversedKeys = ['handlePersonalProblems', 'thingsGoingYourWay', 'controlIrritations', 'onTopOfThings']
    //Reversing the score
    const reverseScore = (value) => {
      switch (parseInt(value)) {
        case 0: return 4;
        case 1: return 3;
        case 2: return 2;
        case 3: return 1;
        case 4: return 0;
        default: return value;
      }
    }
    //Calculate the total score
    return pssKeys.reduce((total, key) => {
      const answer = answers[key];
      const score = reversedKeys.includes(key) ? reverseScore(parseInt(answer)) : parseInt(answer);
      return total + score;
    }, 0); //Initialize total to 0
  };

  const handleFinish = () => {
    const pssTotal = calculatePSSTotalScore();
    navigation.navigate('SelfAssessmentResult', { gad7Total, phq9Total, pssTotal });
  };

  const radioOptions = [
    { id: '1', label: 'Never', value: '0' },
    { id: '2', label: 'Almost never', value: '1' },
    { id: '3', label: 'Sometimes', value: '2' },
    { id: '4', label: 'Fairly often', value: '3' },
    { id: '5', label: 'Very often', value: '4' },
  ];

  return (
    <RootLayout screenName={'SelfAssessment'} navigation={navigation}>
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
              radioButtons={radioOptions}
              onPress={(radioButtonsArray) => {
                console.log('radioButtonsArray:', radioButtonsArray);
                const selectedButton = radioButtonsArray.find(rb => rb.selected);
                handleSelectOption(question.key, selectedButton ? selectedButton.value : '0');
              }}
              containerStyle={styles.radioGroupContainer}
            />
          </View>
        </View>
      ))}

      {/* Next Button */}
      <TouchableOpacity style={styles.button} onPress={handleFinish}>
        <Text style={styles.buttonText}>Finish</Text>
      </TouchableOpacity>
    </ScrollView>
    </RootLayout>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  introText: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
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
    backgroundColor: Colors.purple,
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
