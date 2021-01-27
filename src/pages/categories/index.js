import React from 'react';
import { Text, View,Image,TextInput } from 'react-native';
import Menu from '../../components/menu/index';
import {StyleCategories} from './style';
import Vector from '../../../assets/vector.png';
import { useNavigation } from '@react-navigation/native';
import {RectButton} from 'react-native-gesture-handler';

export default function Categories(){
    const navigation = useNavigation();

    function HandleSlash() {
        console.log('Splash');
        navigation.navigate('Splash');  
      }
    return (
       <View style={StyleCategories.containerCategories}>
           <View style={StyleCategories.containerCategoriesHeader}>
                <RectButton onPress={HandleSlash}>
                    <Image source={Vector} style={StyleCategories.containerCategoriesHeaderVector}/>
                </RectButton>
                <Text style={StyleCategories.containerCategoriesHeaderText} >Categories</Text>
                <TextInput
                    style={StyleCategories.containerCategoriesHeaderInput}
                />
           </View>
           <View style={StyleCategories.containerCategoriesCard}>
               
            </View>
            <View style={StyleCategories.containerCategoriesMenu}>
                <Menu />
            </View>
       </View>
    )
}