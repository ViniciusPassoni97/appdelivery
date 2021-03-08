import React from 'react';
import { Text, View, ImageBackground, Image } from 'react-native';
import { ContainerSplash } from './styles';
import SplashImage from '../../../assets/splashscreen.png';
import Logo from '../../../assets/logo.png';
import IconSplash from '../../../assets/iconSplash.png';
import { useNavigation } from '@react-navigation/native';
import {RectButton} from 'react-native-gesture-handler';

export default function Splash() {
  const navigation = useNavigation();

  function HandleCategories() {
    navigation.navigate('Categories');  
  }
  return (
    <View style={ContainerSplash.container}>
      <ImageBackground source={SplashImage} style={ContainerSplash.srcImage}>
        <Image style={ContainerSplash.containerImgLogo} source={Logo} />
        <View style={ContainerSplash.footer}>
            <Image style={ContainerSplash.containerImgLogo} source={IconSplash} />
            <View style={ContainerSplash.containerTextTitle} > 
              <Text style={ContainerSplash.textInfo}>App Delivery</Text>
              <Text style={ContainerSplash.textInfo}>Seja bem vindo !</Text>
            </View>
            <View style={ContainerSplash.containerTextInfo}>
              <Text style={ContainerSplash.containerTextInfoText}>
              Faça pedidos sem sair de casa, escolha a melhor
              forma de entrega e de pagamento</Text>
            </View>
            <View style={ContainerSplash.containerButton}>
                <RectButton style={ContainerSplash.containerButtonViewBtn} onPress={HandleCategories}>
                  <Text title='Click' style={ContainerSplash.containerButtonBtn}>Entrar</Text>
                </RectButton>
                <RectButton style={ContainerSplash.containerButtonDismiss}>
                  <Text title='Dismiss' style={ContainerSplash.containerButtonBtnDismiss}>Sair</Text>
                </RectButton>
            </View>
        </View>
      </ImageBackground>
    </View>
  );
}
