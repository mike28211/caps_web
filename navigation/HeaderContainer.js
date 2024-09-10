import { Image} from "react-native";
import * as React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';  
import {createNativeStackNavigator} from '@react-navigation/stack';

import NotificationScreen from './screens/NotificationScreen'
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

const Header = (props) =>{
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default Header