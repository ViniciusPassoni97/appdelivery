import React from 'react';
import { Text, View, ImageBackground, Image, Button } from 'react-native';
import { ContainerSplash } from './styles';
import SplashImage from '../../../assets/splashscreen.png';
import Logo from '../../../assets/logo.png';
import IconSplash from '../../../assets/iconSplash.png';

export default function Splash() {
  return (
    <View style={ContainerSplash.container}>
      <ImageBackground source={SplashImage} style={ContainerSplash.srcImage}>
        <Image style={ContainerSplash.containerImgLogo} source={Logo} />
        <View style={ContainerSplash.footer}>
            <Image style={ContainerSplash.containerImgLogo} source={IconSplash} />
            <View style={ContainerSplash.containerTextTitle} > 
              <Text style={ContainerSplash.textInfo}>Non-Contact</Text>
              <Text style={ContainerSplash.textInfo}>Deliveries</Text>
            </View>
            <View style={ContainerSplash.containerTextInfo}>
              <Text style={ContainerSplash.containerTextInfoText}>
              When placing an order, 
              select the option "Contactless delivery" 
              and the courier will leave your order at the door.</Text>
            </View>
            <View style={ContainerSplash.containerButton}>
              <View style={ContainerSplash.containerButtonViewBtn}>
                <Button title='Click' style={ContainerSplash.containerButtonBtn}/>
              </View>
              <View style={ContainerSplash.containerButtonViewBtn}>
                <Button title='Click' style={ContainerSplash.containerButtonBtn}/>
              </View>
            </View>
        </View>
      </ImageBackground>
    </View>
  );
}
