import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './src/screens/WelcomeScreen';
import RegisterAsScreen from './src/screens/RegisterAsScreen';
import SignupScreen from './src/screens/SignupScreen';
import LoginScreen from './src/screens/LoginScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen}/>
        <Stack.Screen name="RegisterAs" component={RegisterAsScreen}/>
        <Stack.Screen name="Signup" component={SignupScreen}/>
        <Stack.Screen name="Login" component={LoginScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}