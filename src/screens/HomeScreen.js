import * as React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import SelfAssessmentScreen from '../screens/SelfAssessmentScreen';
import ViewOrgScreen from '../screens/ViewOrgScreen';
import ViewProfScreen from '../screens/ViewProfScreen';
import ForumsScreen from '../screens/ForumsScreen';

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  const { width } = Dimensions.get('window'); // Get the width of the device screen

  return (
    <View style={styles.container}>
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
      <View style={styles.todoContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('SelfAssessment')} style={styles.todoItem}>
          <View style={styles.circle}>
            <Ionicons name="clipboard-outline" size={24} color="white" />
          </View>
          <Text style={styles.todoText}>Self-Assessment</Text>
          <Image source={require('../assets/selfassessmentpic.jpg')} style={styles.todoImage} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Forums')} style={styles.todoItem}>
          <View style={styles.circle}>
            <Ionicons name="people-outline" size={24} color="white" />
          </View>
          <Text style={styles.todoText}>Forums</Text>
          <Image source={require('../assets/forumspic.png')} style={styles.todoImage} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Professionals')} style={styles.todoItem}>
          <View style={styles.circle}>
            <Ionicons name="person-circle-outline" size={24} color="white" />
          </View>
          <Text style={styles.todoText}>View Professionals</Text>
          <Image source={require('../assets/professionalspic.jpg')} style={styles.todoImage} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Organizations')} style={styles.todoItem}>
          <View style={styles.circle}>
            <Ionicons name="briefcase-outline" size={24} color="white" />
          </View>
          <Text style={styles.todoText}>View Organizations</Text>
          <Image source={require('../assets/orgspic.jpg')} style={styles.todoImage} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ headerShown: false }} // Hide the header for HomeScreen
      />
      <Stack.Screen 
        name="SelfAssessment" 
        component={SelfAssessmentScreen} 
        options={{ headerShown: false }} // Show the header for SelfAssessmentScreen
      />
      <Stack.Screen 
        name="Forums" 
        component={ForumsScreen} 
        options={{ headerShown: false }} // Show the header for ForumsScreen
      />
      <Stack.Screen 
        name="Professionals" 
        component={ViewProfScreen} 
        options={{ headerShown: true }} // Show the header for ViewProfessionalsScreen
      />
      <Stack.Screen 
        name="Organizations" 
        component={ViewOrgScreen} 
        options={{ headerShown: true }} // Show the header for ViewOrganizationsScreen
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  textContainer: {
    flex: 1,
    marginRight: 10,
  },
  greeting: {
    fontSize: 24, // Adjusted for better scalability
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 16, // Adjusted for better scalability
    color: '#6c757d',
    marginTop: 5,
    flexShrink: 1,
  },
  profileImage: {
    width: 165,
    height: 165,
    borderRadius: 40, // Circular image
  },
  todoContainer: {
    flex: 1,
    marginTop: 20,
  },
  todoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    padding: 5,
    backgroundColor: '#F7F2FA',
    borderRadius: 12,
    shadowColor: '#000',
    width: '360',
    height: '80',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  todoText: {
    marginLeft: 15,
    fontSize: 16, // Adjusted for better scalability
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#65558F',
    justifyContent: 'center',
    alignItems: 'center',
  },
  todoImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginLeft: 'auto', // Align to the right
  },
});
