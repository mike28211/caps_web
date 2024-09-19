import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';

export default function SelfAssessmentScreen2() {
  // State for each question's answer
  const [answers, setAnswers] = useState({
    interest: 'notAtAll',
    feelingDown: 'notAtAll',
    sleepIssues: 'notAtAll',
    tiredness: 'notAtAll',
    appetite: 'notAtAll',
  });

  const handleSelectOption = (key, value) => {
    setAnswers((prevAnswers) => ({ ...prevAnswers, [key]: value }));
  };

  return (
    <ScrollView style={styles.container}>
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

      {/* Title */}
      <Text style={styles.title}>Self-Assessment</Text>
      <Text style={styles.introText}>
        Over the last two weeks, how often have you been bothered by any of the following problems?
      </Text>

      {/* Questions */}
      {[
        {
          label: 'Little interest or pleasure in doing things.',
          key: 'interest',
        },
        {
          label: 'Feeling down, depressed, or hopeless.',
          key: 'feelingDown',
        },
        {
          label: 'Trouble falling or staying asleep, or sleeping too much.',
          key: 'sleepIssues',
        },
        {
          label: 'Feeling tired or having little energy.',
          key: 'tiredness',
        },
        {
          label: 'Poor appetite or overeating.',
          key: 'appetite',
        },
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
              layout="row" // Change layout to row for better alignment
            />
          </View>
        </View>
      ))}

      {/* Next Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex :1,
    backgroundColor:'#fff',
    paddingHorizontal :20,
    paddingVertical :10,
  },
  header:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginBottom :20,
  },
  introText:{
    fontSize :16,
    textAlign:'center',
    marginBottom :20,
    color:'#333',
  },
  icon:{
    width :24,
    height :24,
  },
  logo:{
    width :40,
    height :40,
  },
  title:{
    fontSize :24,
    fontWeight:'bold',
    textAlign:'center',
    marginBottom :30,
  },
  inputSection:{
    marginBottom :20,
  },
  label:{
    fontSize :16,
    fontWeight:'bold',
    marginBottom :10,
  },
  radioGroup:{
    flexDirection:'row', // Align items horizontally
    alignItems:'center', // Center items vertically
  },
  button:{
    backgroundColor:'#6200ee',
    paddingVertical :15,
    paddingHorizontal :40,
    borderRadius :25,
    alignItems:'center',
    marginTop :20,
  },
  buttonText:{
    color:'#fff',
    fontSize :16,
    fontWeight:'bold',
  }
});