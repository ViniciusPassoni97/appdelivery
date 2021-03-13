import React,{useState,useContext} from 'react';
import { View, Text, ScrollView, Picker} from 'react-native';
import { ContainerCheck } from './style';
import { RectButton } from 'react-native-gesture-handler';
import { EvilIcons,FontAwesome5,MaterialCommunityIcons,MaterialIcons,Ionicons,AntDesign } from '@expo/vector-icons'; 
import MapView,{Marker} from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { ChallengeContext } from '../../contexts/shopping';

export default function Check(){
    const { sumValourTotal } = useContext(ChallengeContext);
    const [selectedValue, setSelectedValue] = useState("domicilio");
    const [widthSelect, setWidthSelect] = useState(0);
    const [marginTop, setMarginTop] = useState(0);
    const [valourTotal, setValourTotal] = useState(sumValourTotal);

    useEffect(()=>{
        console.log(sumValourTotal);
        if(selectedValue==='domicilio'){
            setWidthSelect(200);
            setMarginTop(10)
        }else if(selectedValue==='buscar'){
            setWidthSelect(250);
            const margin = (marginTop+150);
            setMarginTop(-150);
        }
    },[selectedValue]);

    const navigation = useNavigation();

    function HandleCheck() {
        navigation.navigate('Shopping');  
    }

    function HandlePlay(){
        navigation.navigate('Play')
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
                                    latitude: -23.2750897,
                                    longitude: -50.0701293,
                                    latitudeDelta: 0.01,
                                    longitudeDelta: 0.01,
                                }}>
                                    <Marker 
                                        coordinate={{
                                            latitude: -23.2750897,
                                            longitude: -50.0701293,
                                        }}
                                    />
                                </MapView>
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
                                    <View style={ContainerCheck.containerPgOptionsCity}>
                                        <Text style={ContainerCheck.containerPgOptionsTextCity}>Santo Antônio da Platina</Text>
                                        <FontAwesome5 style={{ marginTop:5,marginLeft:5 }} name="city" size={22} color="black" />
                                    </View>
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
            <View style={{
                textAlign:'center',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
                marginTop:marginTop
            }}> 
                <RectButton style={ContainerCheck.buttonPagVl}>
                    <Text style={ContainerCheck.buttonPagValor}> Valor :</Text>
                    <View style={ContainerCheck.buttonPagValorContainer}>
                        <Text style={ContainerCheck.buttonPagValorContainerText}>R$ </Text>
                        <Text style={ContainerCheck.buttonPagValorContainerText}>{valourTotal}</Text>
                    </View>
                    <View>
                        <FontAwesome5 style={{marginTop:6}} name="money-check-alt" size={24} color="white" />
                    </View>
                </RectButton>
                <RectButton onPress={HandlePlay} style={ContainerCheck.buttonPag}>
                    <Text style={ContainerCheck.buttonPagText}> Pagar </Text>
                    <AntDesign style={{marginTop:10}} name="shoppingcart" size={35} color="white" />
                </RectButton>
            </View>
        </ScrollView>
    );
}