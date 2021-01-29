import React from 'react';
import { View,Image} from 'react-native';
import Grid from '../../../assets/grid.png';
import User from '../../../assets/user.png';
import Shopping from '../../../assets/shopping-cart.png';
import {StyleMenu} from './style';
import {RectButton} from 'react-native-gesture-handler';

export default function Menu() {
    return(
        <View style={StyleMenu.containerMenu}>
            <View>
                <RectButton style={StyleMenu.containerMenuItem}>
                    <Image style={StyleMenu.containerMenuImage} source={Grid} />
                </RectButton>
            </View>
            <View>
                <RectButton style={StyleMenu.containerMenuItem}>
                    <Image style={StyleMenu.containerMenuImage} source={User} />
                </RectButton>
            </View >
            <View>
                <RectButton style={StyleMenu.containerMenuItem}>
                    <Image style={StyleMenu.containerMenuImage} source={Shopping} />
                </RectButton>
            </View>
        </View>
    );
}