import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { RootLayout } from '../navigation/RootLayout';
import { Colors } from '../config';

export const SAResultScreen = ({ navigation, route }) =>{
  
    // receive the scores as props
  const { phqScore, gadScore, pssScore } = route.params || { phqScore: 15, gadScore: 15, pssScore: 15 }; // default values for scores

  return (
    <RootLayout screenName="SAResult" navigation={navigation}>
       <ScrollView style={styles.container}>
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

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
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
    paddingHorizontal: 20,
    paddingVertical: 10,
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
    backgroundColor: Colors.purple,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
