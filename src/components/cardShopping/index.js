import React from 'react';
import {View,Text,Image,TouchableOpacity} from 'react-native';
import {ContainerShoppingItens} from './style';
import {RectButton} from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import Boston from '../../../assets/boston.png';

export default function CardShoppingItns(props) {
    return(
        <RectButton style={ContainerShoppingItens.container}>
            <View style={ContainerShoppingItens.info}>
                <View style={ContainerShoppingItens.infoImage}>
                    <Image source={Boston} />
                </View>
                <View style={ContainerShoppingItens.infoTexts}>
                    <Text style={ContainerShoppingItens.infoTextsLabel}>Repolho</Text>
                    <Text style={ContainerShoppingItens.infoTextsLabel}>Valor Unitario : R$ 5,00</Text>
                    <Text style={ContainerShoppingItens.infoTextsLabel}>Quantidade : 2 / UN</Text>
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
                    <Text>Total : R$ 10,00</Text>
                </View>
            </View>
        </RectButton>
    );
}