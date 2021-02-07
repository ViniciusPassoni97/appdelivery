import React from 'react';
import {View,Text,Image,TextInput} from 'react-native';
import Boston from '../../../assets/boston.png';
import {containerCardItem} from './style';
import {RectButton} from 'react-native-gesture-handler';

export default function cardItens() {
    return(
        <View style={containerCardItem.containerItem}>
            <View>
                <Image source={Boston} />
            </View>
            <View>
                <Text>Boston Lettuce</Text>
                <View>
                    <View style={containerCardItem.containerItem}>
                        <Text>Valor</Text>
                        <Text>Valor</Text>
                        <Text>Valor</Text>
                    </View>
                    <View style={containerCardItem.containerItem}>
                        <RectButton>
                            <TextInput />
                        </RectButton>
                        <RectButton>
                            <Text>Botao 1</Text>
                        </RectButton>
                    </View>
                </View>
            </View>
        </View>
    );
}