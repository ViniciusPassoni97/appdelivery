import React from 'react';
import { Text, View,Image } from 'react-native';
import Menu from '../../components/menu/index';
import {StyleCategories} from './style';
import Vector from '../../../assets/vector.png';

export default function Categories(){
    return (
       <View style={StyleCategories.containerMenu}>
            <Image style='' source={Vector} />
            <Text>Categories</Text>
            <Menu />
       </View>
    )
}