import React from 'react';
import { Text, View,Image } from 'react-native';
import Menu from '../../components/menu/index';
import {StyleCategories} from './style';
import Vector from '../../../assets/vector.png';

export default function Categories(){
    return (
       <View style={StyleCategories.containerCategories}>
           <View style={StyleCategories.containerCategoriesHeader}>
                <Image style={StyleCategories.containerCategoriesHeaderVector} source={Vector} />
                <Text style={StyleCategories.containerCategoriesHeaderText} >Categories</Text>
           </View>
           <View style={StyleCategories.containerCategoriesCard}>
               
            </View>
            <View style={StyleCategories.containerCategoriesMenu}>
                <Menu />
            </View>
       </View>
    )
}