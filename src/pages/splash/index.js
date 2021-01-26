import React from 'react';
import { Text, View, ImageBackground, Image, TouchableHighlight } from 'react-native';
import { ContainerSplash } from './styles';
import SplashImage from '../../../assets/splashscreen.png';
import Logo from '../../../assets/logo.png';
import IconSplash from '../../../assets/iconSplash.png';
import { useNavigation } from '@react-navigation/native';
import {RectButton} from 'react-native-gesture-handler';

export default function Splash() {
  const navigation = useNavigation();

  function HandleCategories() {
    console.log('Click');
    navigation.navigate('Categories');  
  }
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
                <RectButton style={ContainerSplash.containerButtonViewBtn} onPress={HandleCategories}>
                  <Text title='Click' style={ContainerSplash.containerButtonBtn}>order now</Text>
                </RectButton>
                <RectButton style={ContainerSplash.containerButtonDismiss}>
                  <Text title='Dismiss' style={ContainerSplash.containerButtonBtnDismiss}>dismiss</Text>
                </RectButton>
            </View>
        </View>
      </ImageBackground>
    </View>
  );
}
