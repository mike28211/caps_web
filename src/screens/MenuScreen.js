import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import { signOut } from 'firebase/auth';
import { auth } from '../config';

export const MenuScreen = () => {
  const handleLogout = () => {
    signOut(auth).catch((error) => {
      console.log("Error signing out: ", error);
    });
  }
  return (
    <View style={styles.container}>
      <Text>Menu Screen</Text> 
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
