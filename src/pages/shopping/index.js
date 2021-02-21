import React from 'react';
import {View,Text} from 'react-native';
import {ContainerShopping} from './style';
import {RectButton} from 'react-native-gesture-handler';
import { Ionicons,FontAwesome  } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import ShoppingCardItem from '../../components/cardShopping/index';
export default function Shopping() {
    const navigation = useNavigation();

    function HandleCategories() {
      navigation.navigate('Home');  
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
                    <RectButton>
                        <FontAwesome name="check-square-o" size={40} color="black" />
                    </RectButton>
                </View>
            </View>
            <View style={ContainerShopping.containerItens}>
                <ShoppingCardItem />
                <ShoppingCardItem />
                <ShoppingCardItem />
                <ShoppingCardItem />
            </View>
        </View>
    );
}