import React from 'react';
import { Text, View,Image,TextInput } from 'react-native';
import Menu from '../../components/menu/index';
import {StyleCategories} from './style';
import Vector from '../../../assets/vector.png';
import { useNavigation } from '@react-navigation/native';
import {RectButton} from 'react-native-gesture-handler';

export default function Categories(){
    function HandleSlash() {
        console.log('Splash');
        navigation.navigate('Splash');  
      }
    return (
       <View style={StyleCategories.containerCategories}>
           <View style={StyleCategories.containerCategoriesHeader}>
                <Image style={StyleCategories.containerCategoriesHeaderVector} source={Vector} onPress={HandleSlash}/>
                <Text style={StyleCategories.containerCategoriesHeaderText} >Categories</Text>
                <TextInput
                    style={{ height: 55, borderColor: 'gray', borderWidth: 1,marginTop:15 }}
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