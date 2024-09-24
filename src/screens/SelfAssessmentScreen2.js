import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';   //https://www.npmjs.com/package/react-native-radio-buttons-group

import { RootLayout } from '../navigation/RootLayout';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export const SelfAssessmentScreen2 = ({navigation}) => {
  // State for each question's answer
  const [answers, setAnswers] = useState({
    interest: 'notAtAll',
    feelingDown: 'notAtAll',
    sleepIssues: 'notAtAll',
    tiredness: 'notAtAll',
    appetite: 'notAtAll',
    feelingBad: 'notAtAll',
    concentration: 'notAtAll',
    movingSlowly: 'notAtAll',
    thoughts: 'notAtAll',
    feelingNervous: 'notAtAll',
    controlWorrying: 'notAtAll',
    tooMuchWorrying: 'notAtAll',
    troubleRelaxing: 'notAtAll',
    restlessness: 'notAtAll',
    irritable: 'notAtAll',
    afraid: 'notAtAll',
    
  });

  const handleSelectOption = (key, value) => {
    setAnswers((prevAnswers) => ({ ...prevAnswers, [key]: value }));
  };

  return (
    <RootLayout navigation={navigation}>
      <ScrollView style={styles.container}>

      {/* Title */}
      <Text style={styles.title}>Self-Assessment</Text>
      <Text style={styles.introText}>
        Over the last two weeks, how often have you been bothered by any of the following problems?
      </Text>

      {/* Questions with Not at all options */}
      {[
        { label: 'Little interest or pleasure in doing things.', key: 'interest' },
        { label: 'Feeling down, depressed, or hopeless.', key: 'feelingDown' },
        { label: 'Trouble falling or staying asleep, or sleeping too much.', key: 'sleepIssues' },
        { label: 'Feeling tired or having little energy.', key: 'tiredness' },
        { label: 'Poor appetite or overeating.', key: 'appetite' },
        { label: 'Feeling bad about yourself... or that you are a failure or have let yourself or your family down.', key: 'feelingBad' },
        { label: 'Trouble concentrating on things, such as reading the newspaper or watching television.', key: 'concentration' },
        { label: 'Moving or speaking so slowly that other people could have noticed. Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual.', key: 'movingSlowly' },
        { label: 'Thoughts that you would be better off dead, or of hurting yourself.', key: 'thoughts' },
        { label: 'Feeling nervous, anxious, or on edge.', key: 'feelingNervous' },
        { label: 'Not being able to stop or control worrying.', key: 'controlWorrying' },
        { label: 'Worrying too much about different things.', key: 'tooMuchWorrying' },
        { label: 'Trouble relaxing.', key: 'troubleRelaxing' },
        { label: 'Being so restless that it is hard to sit still.', key: 'restlessness' },
        { label: 'Being easily annoyed or irritable.', key: 'irritable' },
        { label: 'Feeling afraid, as if something awful might happen.', key: 'afraid' },
      ].map((question) => (
        <View style={styles.inputSection} key={question.key}>
          <Text style={styles.label}>{question.label}</Text>
          <View style={styles.radioGroup}>
            <RadioGroup
              radioButtons={[
                { id: '1', label: 'Not at all', value: 'notAtAll' },
                { id: '2', label: 'Several days', value: 'severalDays' },
                { id: '3', label: 'More than half the days', value: 'moreThanHalf' },
                { id: '4', label: 'Nearly every day', value: 'nearlyEveryDay' },
              ]}
              onPress={(value) => handleSelectOption(question.key, value)}
              selectedId={answers[question.key]}
              containerStyle={styles.radioGroupContainer}
            />
          </View>
        </View>
      ))}

      {/* Next Button */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SelfAssessment3')}>
        <Text style={styles.buttonText}>Next</Text>
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
    fontSize: 16,
    textAlign: 'justify',
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
