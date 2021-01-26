import React from 'react';
import { View,Image} from 'react-native';
import Grid from '../../../assets/grid.png';
import User from '../../../assets/user.png';
import Shopping from '../../../assets/shopping-cart.png';
import {StyleMenu} from './style';

export default function Menu() {
    return(
        <View style={StyleMenu.containerMenu}>
            <View style={StyleMenu.containerMenuItem}>
                <Image style={StyleMenu.containerMenuImage} source={Grid} />
            </View>
            <View style={StyleMenu.containerMenuItem}>
                <Image style={StyleMenu.containerMenuImage}  source={User} />
            </View >
            <View style={StyleMenu.containerMenuItem}>
                <Image style={StyleMenu.containerMenuImage}  source={Shopping} />
            </View>
        </View>
    );
}