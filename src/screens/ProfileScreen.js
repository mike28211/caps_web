import * as React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';


export default function ProfileScreen({ navigation }) {
  const [profileImage, setProfileImage] = useState(require('../assets/testprofile.jpg')); // Initial image

  // Function to handle image picking
  const pickImage = async () => {
    // Request permission to access media library
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission denied', 'Sorry, we need camera roll permissions to make this work!');
      return;
    }

    // Open image picker
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1], // Keep image square
      quality: 1,     // Maximum quality
    });

    // If user selects an image
    if (!result.canceled) {
      setProfileImage({ uri: result.assets[0].uri }); // Update the profile image
    }
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <View style={styles.header}>
        {/* Greeting and Subtext */}
        <View style={styles.textContainer}>
          <Text style={styles.ProfileTitle}>Profile</Text>
        </View>
      </View>

      {/* Divider Line */}
      <View style={styles.divider} />

      {/* Profile Image with Camera Icon */}
      <View style={styles.imageContainer}>
        <Image
          source={profileImage} // Display selected image
          style={styles.profileImage}
        />
        <TouchableOpacity style={styles.cameraIcon} onPress={pickImage}>
          <Ionicons name="camera-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    marginRight: 10,
  },
  ProfileTitle: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  divider: {
    height: 1, // Thickness of the divider line
    backgroundColor: '#ddd', // Color of the divider line
    marginVertical: 20, // Space around the divider line
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative', // Ensure the camera icon is positioned relative to this container
  },
  profileImage: {
    width: 165,
    height: 165,
    borderRadius: 100, // Makes the image circular
  },
  cameraIcon: {
    position: 'absolute',
    bottom: 10, // Adjust as needed to position the icon above the bottom edge of the image
    backgroundColor: '#000', // Background color for visibility
    borderRadius: 15,        // Adjusted for better appearance
    padding: 8,              // Padding to make the icon area larger and more clickable
    zIndex: 1,               // Ensure the icon appears on top of the profile image
    elevation: 5,            // Adds shadow to the icon (on Android)
  },
});
