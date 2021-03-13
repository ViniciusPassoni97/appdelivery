import React from 'react';
import {View,Text,Image,TextInput} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {RectButton} from 'react-native-gesture-handler';
import {ContainerPay} from './style';
import { useNavigation } from '@react-navigation/native';
import Card from '../../../assets/card.png';

export default function Play(){
    const navigation = useNavigation();

    function HandleCheck(){
        navigation.navigate('Check'); 
    }
    return(
        <View style={ContainerPay.container}>
            <View style={ContainerPay.containerHeader}>
                <View style={ContainerPay.containerHeaderText}>
                    <RectButton onPress={HandleCheck}>
                        <Ionicons name="return-up-back" size={40} color="black" />
                    </RectButton>
                </View>
                <View style={ContainerPay.containerHeaderText}>
                    <Text style={{fontSize:18,fontWeight:'bold'}}>Cartão : Crédito / Débito</Text>  
                </View>
            </View>
            <View style={ContainerPay.containerCard}>
                <Image source={Card}/>
            </View>
            <View style={ContainerPay.containerForm}>
                <View style={ContainerPay.containerFormName}>
                    <Text style={ContainerPay.containerFormNameText}>Nome no cartão</Text>
                    <TextInput style={ContainerPay.containerFormNameInput} placeholder='Nome'/>
                </View>
            </View>
        </View>
    )
}