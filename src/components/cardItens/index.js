import React from 'react';
import {View,Text,Image} from 'react-native';
import Boston from '../../../assets/boston.png';
import ShoppingItem from '../../../assets/shopping-item.png';
import {containerCardItem} from './style';
import {RectButton} from 'react-native-gesture-handler';

export default function cardItens(props) {
    function addItemShoppingCar(id,description,image,value,category_id) {
        console.log('Quero comprar esse item : ',id,description,image,value,category_id)
    }
    return(
        <View key={props.id} style={containerCardItem.containerItem}>
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
                        <RectButton onPress={addItemShoppingCar(props.id,props.title,props.valour,props.unidade,props.category_id)} style={containerCardItem.containerItemButtonShopping}>
                            <Image source={ShoppingItem}/>
                        </RectButton>
                    </View>
                </View>
            </View>
        </View>
    );
}