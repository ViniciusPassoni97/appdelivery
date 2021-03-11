import React,{useState} from 'react';
import {View,Text,Image,TextInput} from 'react-native';
import ShoppingItem from '../../../assets/shopping-item.png';
import {containerCardItem} from './style';
import {RectButton} from 'react-native-gesture-handler';

export default function cardItens(props) {
    const [quantidade,setQuantidade] = useState('');
    function addItemShoppingCar(id,description,image,value,category_id) {
        //console.log('Quero comprar esse item : ',id,description,image,value,category_id)
    }
    return(
        <View style={containerCardItem.containerItem}>
            <View>
                <Image style={containerCardItem.categoryImage} source={{uri:props.imagem}}/>
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
                        <TextInput
                            style={{ height:45,width:60,borderRadius:10,borderColor: 'gray', borderWidth: 1,textAlign:'center' }}
                            onChangeText={text => setQuantidade(text)}
                            value={quantidade}
                        />
                        <RectButton onPress={addItemShoppingCar(props.id,props.title,props.valour,props.unidade,props.category_id)} style={containerCardItem.containerItemButtonShopping}>
                            <Image source={ShoppingItem}/>
                        </RectButton>
                    </View>
                </View>
            </View>
        </View>
    );
}