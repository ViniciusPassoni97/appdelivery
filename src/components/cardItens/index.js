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
            <View style={containerCardItem.containerItemInfo}>
                <Text style={containerCardItem.containerItemInfoTitle}>{props.title}</Text>
                <View>
                    <View style={containerCardItem.containerItemInfoValuor}>
                        <Text style={containerCardItem.containerItemInfoTextValuor}>{props.valour}</Text>
                        <Text style={containerCardItem.containerItemInfoText}> R$ / </Text>
                        <Text style={containerCardItem.containerItemInfoText}>{props.unidade}</Text>
                    </View>
                    <View style={containerCardItem.containerItemInfoButons}>
                        <RectButton>
                            <TextInput />
                        </RectButton>
                        <RectButton style={containerCardItem.containerItemButtonShopping}>
                            <Image source={ShoppingItem}/>
                        </RectButton>
                    </View>
                </View>
            </View>
        </View>
    );
}