import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';  
//Screems
import HomeScreen from './screens/HomeScreen'
import MoodScreen from './screens/MoodScreen'
import ProfileScreen from './screens/ProfileScreen'


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
                headerShown: false, // This hides the header
            })}
            
            
            >
               
            <Tab.Screen name={homeName} component={HomeScreen}/>
            <Tab.Screen name={moodName} component={MoodScreen}/>
            <Tab.Screen name={profileName} component={ProfileScreen}/>

            </Tab.Navigator>
    

       
    );
}

