import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View,Image } from 'react-native';
import { ContainerSplash } from './styles';
import SplashImage from '../../../assets/splashscreen.png'

export default function Splash() {
  return (
    <View style={ContainerSplash.container}>
      <Image source={SplashImage} style={ContainerSplash.srcImage}/>
      <Text>Splashh</Text>
      <StatusBar style="auto" />
    </View>
  );
}
