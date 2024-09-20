import * as React from 'react';
import { View,Text} from 'react-native';

xport const ProfileScreen = ({navigation}) => {
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text
            onPress={() => navigation.navigate('Home')}
            style={{ fontSize: 26, fontWeight: 'bold' }}>Profile Screen
            </Text>
            </View>
    );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    marginRight: 10,
  },
  ProfileTitle: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  divider: {
    height: 1, // Thickness of the divider line
    backgroundColor: '#ddd', // Color of the divider line
    marginVertical: 20, // Space around the divider line
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative', // Ensure the camera icon is positioned relative to this container
  },
  profileImage: {
    width: 165,
    height: 165,
    borderRadius: 100, // Makes the image circular
  },
  cameraIcon: {
    position: 'absolute',
    bottom: 10, // Adjust as needed to position the icon above the bottom edge of the image
    backgroundColor: '#000', // Background color for visibility
    borderRadius: 15,        // Adjusted for better appearance
    padding: 8,              // Padding to make the icon area larger and more clickable
    zIndex: 1,               // Ensure the icon appears on top of the profile image
    elevation: 5,            // Adds shadow to the icon (on Android)
  },
});
