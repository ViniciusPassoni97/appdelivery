import React from 'react';
import {View,Text,Image,TextInput} from 'react-native';
import Boston from '../../../assets/boston.png';
import ShoppingItem from '../../../assets/shopping-item.png';
import {containerCardItem} from './style';
import {RectButton} from 'react-native-gesture-handler';

export default function cardItens(props) {
    return(
        <View style={containerCardItem.containerItem}>
            <View>
                <Image source={Boston} />
            </View>
            <View style=''>
                <Text style=''>{props.title}</Text>
                <View>
                    <View style={containerCardItem.containerItem}>
                        <Text>{props.valour}</Text>
                        <Text> R$ / </Text>
                        <Text>{props.unidade}</Text>
                    </View>
                    <View style={containerCardItem.containerItem}>
                        <RectButton>
                            <TextInput />
                        </RectButton>
                        <RectButton>
                            <Image source={ShoppingItem}/>
                        </RectButton>
                    </View>
                </View>
            </View>
        </View>
    );
}