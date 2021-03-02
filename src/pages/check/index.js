import React from 'react';
import {View,Text,ScrollView} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import {ContainerCheck} from './style';
import {RectButton} from 'react-native-gesture-handler';
import { EvilIcons,FontAwesome5 } from '@expo/vector-icons'; 
import MapView from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';

export default function Check(){
    const navigation = useNavigation();
    function HandleCheck() {
        navigation.navigate('Shopping');  
    }
    return (
        <ScrollView style={ContainerCheck.container}>
            <View style={ContainerCheck.containerHeader}>
                <RectButton onPress={HandleCheck}>
                    <Ionicons name="return-up-back" size={40} color="black" />
                </RectButton>
                <Text style={ContainerCheck.containerHeaderText}>Confira as Informações</Text>
            </View>
            <View>
                <View style={ContainerCheck.containerPg}>
                    <View style={ContainerCheck.containerPgText}>
                        <Text style={ContainerCheck.containerPgMethod}>Método de Pagamento</Text>
                        <RectButton>
                            <Text>Editar</Text>
                        </RectButton>
                    </View>
                    <View style={ContainerCheck.containerPgText}>
                        <EvilIcons name="credit-card" size={24} color="black" />
                        <Text>4747 4747 4747 4747</Text>
                    </View>
                </View>
                <View style={ContainerCheck.containerPg}> 
                    <View style={ContainerCheck.containerPgText}>
                        <Text style={ContainerCheck.containerPgMethod}>Endereço para entrega</Text>
                        <FontAwesome5 name="address-card" size={24} color="black" />
                    </View>
                    <View style={ContainerCheck.containerPgText}>
                        <View style={ContainerCheck.containerMap}>
                            <MapView
                                style={ContainerCheck.containerHeaderMap}
                                initialRegion={{
                                latitude: 37.78825,
                                longitude: -122.4324,
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421,
                            }}
                        />
            </View>
                    </View>
                </View>
            </View>
            <View>
                
            </View>
            <View>
                
            </View>
            <View>
                
            </View>
        </ScrollView>
    );
}