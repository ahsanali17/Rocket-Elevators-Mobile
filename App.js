import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, SafeAreaView, Platform, Dimensions } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks'; 
import SignIn from './app/screens/SignIn';
export default function App() {

  //Console Logs Worth Keeping
  console.log(useDimensions());
  // const {landscape} = useDeviceOrientation();
  // console.log(Dimensions.get('screen'));
  
  return (

    <SignIn />

  );
}