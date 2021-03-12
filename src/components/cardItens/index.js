import React,{useState,useContext} from 'react';
import {View,Text,Image,TextInput} from 'react-native';
import ShoppingItem from '../../../assets/shopping-item.png';
import {containerCardItem} from './style';
import {RectButton} from 'react-native-gesture-handler';
import { ChallengeContext } from '../../contexts/shopping';

export default function cardItens(props) {
    const {        
        itemShopping,
        setShoppingItem
    } = useContext(ChallengeContext);

    function addItemShoppingCar() {
        try {
            const item = {
                description:props.title,
                value:props.valour,
                quantidade:quantidade,
                valueTotal:quantidade*props.valour,
                id:props.id,
                category_id:props.category_id,
                image:props.imagem
            }
            setShoppingItem(item);
            console.log(itemShopping);
            alert('Item adicionado ao carrinho com suceso !');
        } catch (error) {
            alert('Falha ao adicionar o Item'+error);
        }
    }

    const [quantidade,setQuantidade] = useState();

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
                        <RectButton onPress={addItemShoppingCar} style={containerCardItem.containerItemButtonShopping}>
                            <Image source={ShoppingItem}/>
                        </RectButton>
                    </View>
                </View>
            </View>
        </View>
    );
}