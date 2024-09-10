import * as React from 'react';
import {NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';  
import {createNativeStackNavigator} from '@react-navigation/stack';

//Screems
import HomeScreen from './HomeScreen'
import MoodScreen from './MoodScreen'
import ProfileScreen from './ProfileScreen'


// Screen names
const homeName = 'Home';
const moodName = 'Mood';
const profileName  = 'Profile';



const Tab = createBottomTabNavigator();

export default function MainContainer(){
    return(
    
        
            <Tab.Navigator 
            initialRouteName ={homeName}
            screenOptions={({route})=>({
                tabBarIcon: ({ focused, color, size}) => {
                    let iconName;
                    let rn = route.name;

                    if (rn === homeName){
                        iconName = focused ? 'home' : 'home-outline'
                    }else if(rn === moodName){
                        iconName = focused ? 'happy' : 'happy-outline'
                    }else if(rn === profileName){
                        iconName = focused ? 'person' : 'person-outline'
                    }

                    return <Ionicons name={iconName} size={size} color={color}/>
                },
            })}
            
            
            >
               
            <Tab.Screen name={homeName} component={HomeScreen}/>
            <Tab.Screen name={moodName} component={MoodScreen}/>
            <Tab.Screen name={profileName} component={ProfileScreen}/>

            </Tab.Navigator>
    

       
    );
}

