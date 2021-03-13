import React from 'react';
import {View,Text,Image,TouchableOpacity} from 'react-native';
import {ContainerShoppingItens} from './style';
import {RectButton} from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';

export default function CardShoppingItns(props) {
    return(
        <RectButton style={ContainerShoppingItens.container}>
            <View style={ContainerShoppingItens.info}>
                <View style={ContainerShoppingItens.infoImage}>
                    <Image style={ContainerShoppingItens.infoImageImg} source={{uri:props.imagem}} />
                </View>
                <View style={ContainerShoppingItens.infoTexts}>
                    <Text style={ContainerShoppingItens.infoTextsLabel}>{props.description}</Text>
                    <Text style={ContainerShoppingItens.infoTextsLabel}>Valor Unitario : R$ {props.value}</Text>
                    <Text style={ContainerShoppingItens.infoTextsLabel}>Quantidade : {props.quantidade} / UN</Text>
                </View>
            </View>
            <View style={ContainerShoppingItens.botton}>
                <View>
                    <TouchableOpacity style={ContainerShoppingItens.bottonButtonTouchableOpacity}> 
                        <RectButton style={ContainerShoppingItens.bottonButton}>
                            <Text style={ContainerShoppingItens.bottonButtonRemove}>Remover</Text>
                            <AntDesign style={ContainerShoppingItens.bottonButtonIcon} name="delete" size={30} color="white" />
                        </RectButton>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text>Total : R$ {props.valueTotal}</Text>
                </View>
            </View>
        </RectButton>
    );
}