import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { RootLayout } from '../navigation/RootLayout';

const moodData = {
  highEnergyLowPleasant: [
    'enraged', 'panicked', 'stressed', 'jittery', 'shocked',
    'livid', 'furious', 'frustrated', 'tensed', 'stunned',
    'fuming', 'frightened', 'angry', 'nervous', 'restless',
    'anxious', 'apprehensive', 'worried', 'irritated', 'annoyed',
    'repulsed', 'troubled', 'concerned', 'uneasy', 'peeved'
  ],
  lowEnergyLowPleasant: [
    'disgusted', 'glum', 'disappointed', 'down', 'apathetic',
    'pessimistic', 'morose', 'discouraged', 'sad', 'bored',
    'allenated', 'miserable', 'lonely', 'disheartened', 'tired',
    'despondent', 'depressed', 'sullen', 'exhausted', 'fatigued',
    'despairing', 'hopeless', 'desolate', 'spent', 'drained'
  ],
  highEnergyHighPleasant: [
    'surprised', 'upbeat', 'festive', 'exhilarated', 'estatic',
    'hyper', 'cheerful', 'motivated', 'inspired', 'elated',
    'energized', 'lively', 'excited', 'optimistic', 'enthusiastic',
    'pleased', 'focused', 'happy', 'proud', 'thrilled', 
    'pleasant', 'joyful', 'hopeful', 'playful', 'blissful'
  ],
  lowEnergyHighPleasant: [
    'at ease', 'easygoing', 'content', 'loving', 'fulfilled',
    'calm', 'secure', 'satisfied', 'grateful', 'touched',
    'relaxed', 'chill', 'restful', 'blessed', 'balanced',
    'mellow', 'thoughtful', 'peaceful', 'comfortable', 'carefree',
    'sleepy', 'complacent', 'tranquil', 'cozy', 'serene'
  ]
};

export const MoodMeterScreen = ({ navigation }) => {
  const [selectedMood, setSelectedMood] = useState('');

  const handleDotPress = (mood) => {
    setSelectedMood(mood);
  };

  return (
    <RootLayout screenName={'MoodMeterScreen'} navigation={navigation}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>How are you feeling right now?</Text>

        {/* Left side labels */}
        <View style={styles.leftLabelContainer}>
          <Text style={styles.energyLabel}>High Energy</Text>
          <Text style={styles.energyLabel}>Low Energy</Text>
        </View>

        {/* Horizontal ScrollView for quadrants */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
          <View style={styles.quadrantContainer}>
            <View style={styles.quadrant}>
              {moodData.highEnergyLowPleasant.map((mood, index) => (
                <TouchableOpacity
                  key={index}
                  style={[styles.dot, { backgroundColor: "#FF6347" }]} // Red
                  onPress={() => handleDotPress(mood)}
                />
              ))}
            </View>

            <View style={styles.quadrant}>
              {moodData.highEnergyHighPleasant.map((mood, index) => (
                <TouchableOpacity
                  key={index}
                  style={[styles.dot, { backgroundColor: "#FFD700" }]} // Yellow
                  onPress={() => handleDotPress(mood)}
                />
              ))}
            </View>

            <View style={styles.quadrant}>
              {moodData.lowEnergyLowPleasant.map((mood, index) => (
                <TouchableOpacity
                  key={index}
                  style={[styles.dot, { backgroundColor: "#4682B4" }]} // Blue
                  onPress={() => handleDotPress(mood)}
                />
              ))}
              {/* Low Pleasantness Label */}
              <Text style={styles.pleasantnessLabel}>Low Pleasantness</Text>
            </View>

            <View style={styles.quadrant}>
              {moodData.lowEnergyHighPleasant.map((mood, index) => (
                <TouchableOpacity
                  key={index}
                  style={[styles.dot, { backgroundColor: "#32CD32" }]} // Green
                  onPress={() => handleDotPress(mood)}
                />
              ))}
              {/* High Pleasantness Label */}
              <Text style={styles.pleasantnessLabel}>High Pleasantness</Text>
            </View>
          </View>
        </ScrollView>

        <Text style={styles.moodText}>{selectedMood ? `You are feeling ${selectedMood}` : "Select a mood"}</Text>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Mood2')}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </ScrollView>
    </RootLayout>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  horizontalScroll: {
    flexDirection: "row",
    marginVertical: 10,
  },
  quadrantContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  quadrant: {
    flexDirection: "column", // Stack dots vertically in each quadrant
    alignItems: "center",
    paddingHorizontal: 10,
  },
  dot: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginVertical: 5,
  },
  moodText: {
    fontSize: 18,
    marginTop: 20,
    textAlign: "center",
  },
  button: {
    marginTop: 20,
    backgroundColor: "#4682B4",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: "center",
  },
  
// Adjusted label containers and styles
leftLabelContainer: {
   position:'absolute',
   top:'15%',
   left:'5%',
   justifyContent:'space-between',
   height:'70%',
},
energyLabel:{
   fontSize:14,
   fontWeight:'bold',
   transform:[{rotate:'-90deg'}],
},
pleasantnessLabel:{
   fontSize:14,
   fontWeight:'bold',
   position:'absolute',
   bottom:-20, // Positioning at the bottom of the quadrant
},
});