import React from 'react';
import {View,Text} from 'react-native';
import {ContainerShopping} from './style';
import {RectButton} from 'react-native-gesture-handler';
import { Ionicons,FontAwesome  } from '@expo/vector-icons';

export default function Shopping() {
    return(
        <View style={ContainerShopping.container}>
            <View style={ContainerShopping.containerHeader}>
                <View style=''>
                    <RectButton>
                        <Ionicons name="return-up-back" size={40} color="black" />
                    </RectButton>
                </View>
                <View style=''>
                    <Text style={ContainerShopping.containerHeaderText}>Carrinho de Compras</Text>  
                </View>
                <View style={ContainerShopping.containerHeaderReturn}>
                    <RectButton>
                        <FontAwesome name="check-square-o" size={40} color="black" />
                    </RectButton>
                </View>
            </View>
        </View>
    );
}