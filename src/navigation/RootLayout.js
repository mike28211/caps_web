import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image, SafeAreaView, StatusBar } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export const RootLayout = ({ children, navigation, screenName }) => {

  const renderLeftIcon = () => {
    if (screenName === 'Home') {
      return (
        <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
          <Ionicons name="menu" size={30} color="black" />
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={30} color="black" />
        </TouchableOpacity>
      );
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>

        <StatusBar barStyle="dark-content" backgroundColor={'white'}/>

        {/* Header */}
        <View style={styles.header}>
            {renderLeftIcon()}
            <Image source={require('../assets/small-logo.jpg')} style={styles.logo} />
            <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
            <Ionicons name="notifications-outline" size={30} color="black" />
            </TouchableOpacity>
        </View>

        {/* Main content (children) */}
        <View style={{ flex: 1 }}>{children}</View>

        {/* Footer Navigation */}
        <View style={styles.footer}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Ionicons name="home-outline" size={30} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Mood')}>
            <Ionicons name="happy-outline" size={30} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Ionicons name="person-outline" size={30} color="black" />
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
    elevation: 3, // for shadow on Android
  },
  logo: {
    width: 150,
    height: 40,
    resizeMode: 'contain',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: 'white',
    elevation: 10,
  },
});
