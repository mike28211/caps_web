import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; 
import { Image } from 'react-native';
import WelcomeScreen from './src/screens/WelcomeScreen';
import RegisterAsScreen from './src/screens/RegisterAsScreen';
import SignupScreen from './src/screens/SignupScreen';
import LoginScreen from './src/screens/LoginScreen';
import MenuScreen from './src/screens/MenuScreen';
import NotificationScreen from './src/screens/NotificationScreen';
import MainContainer from './src/MainContainer';
import MenuButton from './src/buttons/MenuButton';
import NotificationButton from './src/buttons/NotificationButton';




const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="RegisterAs" component={RegisterAsScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen
          name="Home"
          component={MainContainer} // Assuming MainContainer leads to the Home
          options={({ navigation }) => ({
            title: '',
            headerLeft: () => (
              <MenuButton onPress={() => navigation.navigate('Menu')} />
            ),
            headerRight: () => (
              <NotificationButton onPress={() => navigation.navigate('Notifications')} />
            ),
            headerTitle: () => (
              <Image
              source={require('./src/assets/smal-logo.jpg')} // Path to your JPG logo
              style={{ width: 36, height: 36 }} // Adjust the size as necessary
              resizeMode="contain"
            />
          ),
          headerTitleAlign: 'center',
          })}
        />
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="Notifications" component={NotificationScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
