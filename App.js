import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//import Ionicons from 'react-native-vector-icons/Ionicons';  
import WelcomeScreen from './src/screens/WelcomeScreen';
import RegisterAsScreen from './src/screens/RegisterAsScreen';
import SignupScreen from './src/screens/SignupScreen';
import LoginScreen from './src/screens/LoginScreen';
//import HomeScreen from './src/screens/HomeScreen';
//import MoodScreen from './src/screens/MoodScreen';
//import ProfileScreen from './src/screens/ProfileScreen';
import MainContainer from './src/screens/MainContainer';



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const homeName = 'Home';
const moodName = 'Mood';
const profileName  = 'Profile';



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen}/>
        <Stack.Screen name="RegisterAs" component={RegisterAsScreen}/>
        <Stack.Screen name="Signup" component={SignupScreen}/>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Home" component={MainContainer}/>
      </Stack.Navigator>
    </NavigationContainer>
    

    
    
    
  );
}

