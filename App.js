import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, SafeAreaView, Platform, Dimensions } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks'; 
import { Navigator } from "./routes/AppNavigator";

export default function App() {

  //Console Logs Worth Keeping
  console.log(useDimensions());

  return (
   
    <Navigator/>
    


  );
}