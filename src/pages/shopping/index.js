import React,{useContext,useEffect} from 'react';
import {View,Text,ScrollView} from 'react-native';
import {ContainerShopping} from './style';
import {RectButton} from 'react-native-gesture-handler';
import { Ionicons,FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import ShoppingCardItem from '../../components/cardShopping/index';
import { ChallengeContext } from '../../contexts/shopping';

export default function Shopping() {
    const { itemShopping } = useContext(ChallengeContext);
    useEffect(()=>{
        console.log(itemShopping);
    },[itemShopping]);
    
    const navigation = useNavigation();

    function HandleCategories() {
      navigation.navigate('Home');  
    }
    function HandleCheck() {
        navigation.navigate('Check');  
      }
    return(
        <View style={ContainerShopping.container}>
            <View style={ContainerShopping.containerHeader}>
                <View style={ContainerShopping.containerHeaderReturn}>
                    <RectButton onPress={HandleCategories}>
                        <Ionicons name="return-up-back" size={40} color="black" />
                    </RectButton>
                </View>
                <View style=''>
                    <Text style={ContainerShopping.containerHeaderText}>Carrinho de Compras</Text>  
                </View>
                <View style={ContainerShopping.containerHeaderCheck}>
                    <RectButton onPress={HandleCheck}>
                        <FontAwesome name="check-square-o" size={40} color="black" />
                    </RectButton>
                </View>
            </View>
            <ScrollView style={ContainerShopping.containerItens}>
                <ShoppingCardItem />
            </ScrollView>
        </View>
    );
}