import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import { signOut } from 'firebase/auth';
import { auth } from '../config';
import { RootLayout } from '../navigation';

export const MenuScreen = ({ navigation }) => {
  const handleLogout = () => {
    signOut(auth).catch((error) => {
      console.log("Error signing out: ", error);
    });
  }
  return (
    <RootLayout screenName="Menu" navigation={navigation}>
      <View style={styles.container}>
        <Text>Menu Screen</Text> 
        <Button title="Logout" onPress={handleLogout} />
      </View>
    </RootLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
