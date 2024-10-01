
import React, { useState,  } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Dimensions } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import { ScrollView } from 'react-native-gesture-handler';
import { RootLayout } from '../navigation/RootLayout';
import { useNavigation, useFocusEffect } from '@react-navigation/native';



// Get screen dimensions for responsiveness
const { width } = Dimensions.get('window');
const CIRCLE_SIZE = width / 6; // Adjust circle size based on screen width

// Define emotions and corresponding colors
const emotions = [
  { color: 'red', emotion: 'Angry', details: 'Feeling intense displeasure or rage.' },
  { color: 'yellow', emotion: 'Happy', details: 'Feeling joy and contentment.' },
  { color: 'blue', emotion: 'Sad', details: 'Feeling sorrow or unhappiness.' },
  { color: 'green', emotion: 'Calm', details: 'Feeling at peace and relaxed.' },
];

export const MoodScreen = () => {
  const [selectedEmotion, setSelectedEmotion] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  // Handle circle press with animation
  const handleCirclePress = (emotion) => {
    setSelectedEmotion(emotion);
    setModalVisible(true);
  };

  // Create an array of 100 animated circles
  const renderCircles = () => {
    return Array.from({ length: 100 }).map((_, index) => {
      const section = Math.floor(index / 25); // 4 sections, 25 circles each
      const emotion = emotions[section];
      
      return (
        <AnimatedCircle
          key={index}
          color={emotion.color}
          emotion={emotion.emotion}
          onPress={() => handleCirclePress(emotion)}
        />
      );
    });
  };

  return (
   <RootLayout screenName='Mood' navigation={navigation}>
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.grid}>
        {renderCircles()}
      </ScrollView>

      {/* Modal for showing emotion details */}
      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.emotionTitle}>{selectedEmotion?.emotion}</Text>
            <Text style={styles.emotionDetails}>{selectedEmotion?.details}</Text>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>

    </RootLayout> 
  );
};

const AnimatedCircle = ({ color, emotion, onPress }) => {
  const scale = useSharedValue(1); // Shared value to handle scaling

  // Create animated style for scaling effect
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: withSpring(scale.value) }],
  }));

  const handlePressIn = () => {
    scale.value = 1.2; // Scale up when pressed
  };

  const handlePressOut = () => {
    scale.value = 1; // Scale down to original size
    onPress(); // Trigger the onPress event
  };

  return (
    <TouchableOpacity
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      activeOpacity={0.8}
    >
      <Animated.View style={[styles.circle, animatedStyle, { backgroundColor: color }]}>
        <Text style={styles.circleText}>{emotion}</Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  circle: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },
  circleText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 12,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  emotionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  emotionDetails: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  closeButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#2196F3',
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
