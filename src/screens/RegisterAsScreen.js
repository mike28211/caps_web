import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function RegisterAsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register As</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});