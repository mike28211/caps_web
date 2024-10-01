import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { ProfessionalHomeScreen } from '../screens';
import { ViewRequestScreen } from '../screens';
import { ViewRequestHistoryScreen } from '../screens';
import { MenuScreen } from '../screens';

const Stack = createStackNavigator();

export const ProfessionalStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="ProfessionalHome" 
                component={ProfessionalHomeScreen} 
                options={{ headerShown: false }} // Hide the header for HomeScreen
            />
            <Stack.Screen 
                name="ViewRequest" 
                component={ViewRequestScreen} 
                options={{ headerShown: false }} // Show the header for SelfAssessmentScreen
            />
            <Stack.Screen 
                name="ViewRequestHistory" 
                component={ViewRequestHistoryScreen} 
                options={{ headerShown: false }} // Show the header for ForumScreen
            />
            <Stack.Screen 
                name="Menu" 
                component={MenuScreen} 
                options={{ headerShown: false }} // Show the header for ViewProfessionalsScreen
            />
        </Stack.Navigator>
    );
}