import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, ImageBackground, Image } from 'react-native';
import { ContainerSplash } from './styles';
import SplashImage from '../../../assets/splashscreen.png';
import Logo from '../../../assets/logo.png';

export default function Splash() {
  return (
    <View style={ContainerSplash.container}>
      <ImageBackground source={SplashImage} style={ContainerSplash.srcImage}>
        <Image style={ContainerSplash.containerImgLogo} source={Logo} />
        <View style={ContainerSplash.footer}>
            
        </View>
      </ImageBackground>
    </View>
  );
}
