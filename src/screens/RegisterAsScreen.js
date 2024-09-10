import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';

const RegisterAsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Logo Image */}
      <Image 
        source={require('../assets/tranqheal-logo.png')}  // Replace with the actual path to your logo file
        style={styles.logo}
        resizeMode="contain"
      />
      {/* Register As Text */}
      <Text style={styles.registerText}>Register as?</Text>
      
      {/* Seeker Button */}
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Signup')} // Adjust navigation
      >
        <Text style={styles.buttonText}>Seeker</Text>
      </TouchableOpacity>
      
      {/* Professional Button */}
      <TouchableOpacity 
        style={styles.button}
        //onPress={() => navigation.navigate('ProfessionalSignup')} // Adjust navigation
      >
        <Text style={styles.buttonText}>Professional</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',  // White background
  },
  logo: {
    width: 300,   // Adjust the size of the logo as needed
    height: 300,  // Adjust the size of the logo as needed
    marginBottom: 50,  // Space between logo and text/buttons
  },
  registerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#000',
  },
  button: {
    backgroundColor: '#9B51E0', // Purple button color
    borderRadius: 25,  // Rounded button
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginVertical: 10,  // Space between the two buttons
    width: 250,  // Adjust button width as needed
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',  // White text color
    fontSize: 18,
    fontWeight: 'bold',
  }
});

export default RegisterAsScreen;