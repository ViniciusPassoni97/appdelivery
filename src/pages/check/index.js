import React,{useState} from 'react';
import { View, Text, ScrollView, Picker} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { ContainerCheck } from './style';
import { RectButton } from 'react-native-gesture-handler';
import { EvilIcons,FontAwesome5,MaterialCommunityIcons,MaterialIcons } from '@expo/vector-icons'; 
import MapView from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';

export default function Check(){
    const [selectedValue, setSelectedValue] = useState("domicilio");
    const [widthSelect, setWidthSelect] = useState(0);

    useEffect(()=>{
        if(selectedValue==='domicilio'){
            setWidthSelect(200);
        }else if(selectedValue==='buscar'){
            setWidthSelect(250);
        }
        console.log(widthSelect)
        console.log(selectedValue);
    },[selectedValue]);

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
                <View style={ContainerCheck.containerPgModel}>
                    <View style={ContainerCheck.containerPgModelHeader}>
                        <Text style={ContainerCheck.containerPgModelHeaderText}>Modelo de Entrega</Text>
                        <MaterialCommunityIcons name="truck-delivery-outline" size={30} color="black" />
                    </View>
                    <View>
                        <Picker
                            selectedValue={selectedValue}
                            style={{ 
                                height: 80, 
                                width: widthSelect,
                            }}
                            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                        >
                        <Picker.Item label="Á domicílio" value="domicilio" />
                        <Picker.Item label="Buscar Pessoalmente" value="buscar" />
                        </Picker>
                    </View>
                </View>
                <View style={ContainerCheck.containerPg}> 
                    { selectedValue=== 'domicilio' ?(
                     <>
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
                                }}/>
                            </View>
                        </View>
                      </>
                    ):(
                        <>
                        <View style={ContainerCheck.containerPgText}>
                            <View style={ContainerCheck.containerMap}>
                                <View style={ContainerCheck.containerPgText}>
                                    <Text style={ContainerCheck.containerPgMethod}>Endereço para Busca</Text>
                                    <FontAwesome5 name="address-card" size={24} color="black" />
                                </View>
                                <View style={ContainerCheck.containerPgOptions}>
                                    <View>
                                        <Text style={ContainerCheck.containerPgOptionsText}>Rua : 24 de maio</Text>
                                    </View>
                                    <View>
                                        <Text style={ContainerCheck.containerPgOptionsText}>Bairro : Centro</Text>
                                    </View>
                                    <View>
                                        <Text style={ContainerCheck.containerPgOptionsText}>Número : 501</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        </>
                    )}
                </View>
            </View>
            <View style={ContainerCheck.containerButton}>
                <RectButton style={ContainerCheck.buttonPag}>
                    <Text style={ContainerCheck.buttonPagText}> Pagar </Text>
                    <MaterialIcons name="payment" size={30} color="white" />
                </RectButton>
            </View>
        </ScrollView>
    );
}