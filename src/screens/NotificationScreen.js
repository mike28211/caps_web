import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function NotificationScreen() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
    <View style={styles.header}>
      {/* Greeting and Subtext */}
      <View style={styles.textContainer}>
        <Text style={styles.ProfileTitle}>Profile</Text>
      </View>
    </View>
    <View style={styles.divider} />
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
});
