import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import * as Google from 'expo-google-app-auth';

const LoginScreen = ({navigation}) => {

  const signInWithGoogle = async () => {
    try {
      const result = await Google.logInAsync({
        androidClientId: 'YOUR_ANDROID_CLIENT_ID',
        iosClientId: 'YOUR_IOS_CLIENT_ID',
        scopes: ['profile', 'email'],
      });
      if (result.type === 'success') {
        console.log(result.user);
        // Handle successful login here
      } else {
        console.log('Login cancelled');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/tranqheal-logo.png')} style={styles.logo} />
      <Text style={styles.title}>Welcome back.</Text>

      <TextInput placeholder="Username" style={styles.input} />
      <TextInput placeholder="Password" style={styles.input} secureTextEntry />
      
      <TouchableOpacity style={styles.registerButton} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.registerText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.or}>or register with</Text>

      <TouchableOpacity style={styles.googleButton} onPress={signInWithGoogle}>
        <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png'}} style={styles.googleIcon} />
      </TouchableOpacity>

      <View style={styles.loginContainer}>
      <Text>
        Don't have an account? 
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.loginLink}>Register</Text>
        </TouchableOpacity>
      </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#f0f0f0',
    marginBottom: 15,
  },
  registerButton: {
    width: '100%',
    backgroundColor: '#9B51E0',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
  },
  registerText: {
    color: '#fff',
    fontSize: 16,
  },
  or: {
    color: '#8e8e8e',
    marginBottom: 10,
  },
  googleButton: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#dcdcdc',
    marginBottom: 20,
  },
  googleIcon: {
    width: 24,
    height: 24,
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    fontSize: 14,
    color: '#8e8e8e',
  },
  loginLink: {
    color: '#9B51E0',
    fontWeight: 'bold',
    marginLeft: 5,
  }
});

export default LoginScreen;
