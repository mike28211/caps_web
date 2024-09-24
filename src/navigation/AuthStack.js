import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { WelcomeScreen, RegisterAsScreen, LoginScreen, SignupScreen, ProfessionalRegisterScreen } from '../screens';
import { ProfessionalHomeScreen } from '../screens';  //testing

const Stack = createStackNavigator();

export const AuthStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="Welcome"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="RegisterAs" component={RegisterAsScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
            <Stack.Screen name="ProfessionalRegister" component={ProfessionalRegisterScreen} />
            <Stack.Screen name="ProfessionalHome" component={ProfessionalHomeScreen} />
        </Stack.Navigator>
    );
}