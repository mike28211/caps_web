import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import MainContainer from './navigation/MainContainer';
import {createNativeStackNavigator} from '@react-navigation/stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';



export default function App() {
  return (
 
    <MainContainer/>
 
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D7CCF2',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
