import React from 'react';
import {View,Text,Image} from 'react-native';
import {ContainerShoppingItens} from './style';
import {RectButton} from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';
import Boston from '../../../assets/boston.png';

export default function CardShoppingItns(props) {
    return(
        <RectButton style={ContainerShoppingItens.container}>
            <View style=''>
                <View style=''>
                    <Image source={Boston} />
                </View>
                <View style=''>
                    <Text></Text>
                </View>
            </View>
            <View style={ContainerShoppingItens.botton}>
                <View style={ContainerShoppingItens.botton}>
                    <RectButton>
                        <Text>1</Text>
                    </RectButton>
                    <RectButton>
                         <MaterialIcons name="remove-shopping-cart" size={40} color="black" />
                    </RectButton>
                </View>
                <View>
                    <Text>R$ 89,90</Text>
                </View>
            </View>
        </RectButton>
    );
}