import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, ImageBackground } from 'react-native';
import { ContainerSplash } from './styles';
import SplashImage from '../../../assets/splashscreen.png';

export default function Splash() {
  return (
    <View style={ContainerSplash.container}>
      <ImageBackground source={SplashImage} style={ContainerSplash.srcImage}>
        <View style={ContainerSplash.footer}>

        </View>
      </ImageBackground>
    </View>
  );
}
