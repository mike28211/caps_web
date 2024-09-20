import * as React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { RootLayout } from '../navigation/RootLayout';

export const HomeScreen = ({ navigation }) => {
  return (
    <RootLayout navigation={navigation}>
      <View style={{ flex: 1, padding: 20 }}>
        {/* Header Section */}
        <View style={styles.header}>
          {/* Greeting and Subtext */}
          <View style={styles.textContainer}>
            <Text style={styles.greeting}>Hello, Seeker!</Text>
            <Text style={styles.subText}>Assess, Connect, Thrive: Your Path to Mental Wellness</Text>
          </View>
          {/* Profile Picture */}
          <Image
            source={require('../assets/testprofile.jpg')} // Replace with your image URI
            style={styles.profileImage}
          />
        </View>
        {/* To-Do List Buttons */}
        <View style={{ marginTop: 40 }}>
          <TouchableOpacity onPress={() => navigation.navigate('SelfAssessment')} style={styles.todoItem}>
            <View style={styles.circle}>
              <Ionicons name="clipboard-outline" size={24} color="white" />
            </View>
            <Text style={styles.todoText}>Self-Assessment</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Forums')} style={styles.todoItem}>
            <View style={styles.circle}>
              <Ionicons name="chatbox-outline" size={24} color="white" />
            </View>
            <Text style={styles.todoText}>Forums</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('ViewProfessionals')} style={styles.todoItem}>
            <View style={styles.circle}>
              <Ionicons name="person-circle-outline" size={24} color="white" />
            </View>
            <Text style={styles.todoText}>View Professionals</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('ViewOrganizations')} style={styles.todoItem}>
            <View style={styles.circle}>
              <Ionicons name="business-outline" size={24} color="white" />
            </View>
            <Text style={styles.todoText}>View Organizations</Text>
          </TouchableOpacity>
        </View>
      </View>
    </RootLayout>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,                // Ensures the text container takes up remaining space
    marginRight: 10,        // Adds space between the text and the profile image
  },
  greeting: {
    fontSize: 26,
    fontWeight: 'bold',
    fontFamily: 'Manrope',
  },
  subText: {
    fontSize: 14,
    color: '#6c757d', // A lighter color for the subtext
    marginTop: 5,     // Space between the greeting and subtext
    flexShrink: 1,    // Allows the subtext to shrink and wrap to fit the space
  },
  profileImage: {
    width: 185,
    height: 185,
    borderRadius: 100, // Makes the image circular
  },
  todoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    width: 360,
    height: 80,
    padding: 10,
    backgroundColor: '#F7F2FA',
    borderRadius: 12,
    
    // Drop shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    // Drop shadow for Android
    elevation: 5,
  },
  todoText: {
    marginLeft: 15,
    fontSize: 18,
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20, // Half of width and height for perfect circle
    backgroundColor: '#65558F',
    justifyContent: 'center',  // Centers the icon horizontally
    alignItems: 'center',      // Centers the icon vertically
  },
});
