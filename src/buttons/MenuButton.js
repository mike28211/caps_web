import React from 'react';
import { TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function MenuButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={{ padding: 10 }}>
      <Ionicons name="menu" size={30} color="#000" /> 
    </TouchableOpacity>
  );
}
