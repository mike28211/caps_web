import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from '../screens';
import { SelfAssessmentScreen } from '../screens';
import { ForumsScreen } from '../screens';
import { ViewProfScreen } from '../screens';
import { ViewOrgScreen } from '../screens';
import { MoodScreen } from '../screens';
import { ProfileScreen } from '../screens';
import { MenuScreen } from '../screens';
import { NotificationScreen } from '../screens';
import { PreferencesScreen } from '../screens';
import { SelfAssessmentScreen2 } from '../screens';
import {SelfAssessmentScreen3}  from  '../screens';
import { SelfAssessmentResultScreen } from '../screens';
import { ProfessionalHomeScreen } from '../screens';

const Stack = createStackNavigator();

export const AppStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Home" 
                component={HomeScreen} 
                options={{ headerShown: false }} // Hide the header for HomeScreen
            />
            <Stack.Screen 
                name="SelfAssessment" 
                component={SelfAssessmentScreen} 
                options={{ headerShown: false }} // Show the header for SelfAssessmentScreen
            />
            <Stack.Screen 
                name="Forums" 
                component={ForumsScreen} 
                options={{ headerShown: true }} // Show the header for ForumsScreen
            />
            <Stack.Screen 
                name="ViewProfessionals" 
                component={ViewProfScreen} 
                options={{ headerShown: true }} // Show the header for ViewProfessionalsScreen
            />
            <Stack.Screen 
                name="ViewOrganizations" 
                component={ViewOrgScreen} 
                options={{ headerShown: true }} // Show the header for ViewOrganizationsScreen
            />
            <Stack.Screen 
                name="Mood" 
                component={MoodScreen} 
                options={{ headerShown: true }} // Show the header for ViewOrganizationsScreen
            /> 
            <Stack.Screen 
                name="Profile" 
                component={ProfileScreen} 
                options={{ headerShown: true }} // Show the header for ViewOrganizationsScreen
            /> 
            <Stack.Screen 
                name="Menu" 
                component={MenuScreen} 
                options={{ headerShown: true }} // Show the header for ViewOrganizationsScreen
            /> 
            <Stack.Screen 
                name="Notifications" 
                component={NotificationScreen} 
                options={{ headerShown: true }} // Show the header for ViewOrganizationsScreen
            /> 
             <Stack.Screen 
                name="Preferences" 
                component={PreferencesScreen} 
                options={{ headerShown: false }}
            />
             <Stack.Screen 
                name="SelfAssessment2" 
                component={SelfAssessmentScreen2} 
                options={{ headerShown: false }} 
            />
            <Stack.Screen 
                name="SelfAssessment3" 
                component={SelfAssessmentScreen3} 
                options={{ headerShown: false }} 
            />
             <Stack.Screen 
                name="SelfAssessmentResult" 
                component={SelfAssessmentResultScreen} 
                options={{ headerShown: false }} 
            />
            <Stack.Screen 
                name="ProfessionalHome" 
                component={ProfessionalHomeScreen} 
                options={{ headerShown: false }} 
            />
        </Stack.Navigator>
    );
}