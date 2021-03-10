import React,{ useEffect ,useState } from 'react';
import {View,Text,Image,ScrollView} from 'react-native';
import { StyleCategories } from './style';
import {RectButton} from 'react-native-gesture-handler';
import Vector from '../../../assets/vector.png';
import ItemCard from '../../../src/components/cardItens/index';
import { useNavigation,useRoute } from '@react-navigation/native';
import api from '../../api/index';

export default function Item(){
    const [item,setItem] = useState('');
    const navigation = useNavigation();
    const route = useRoute();
    const routeParams = route.params.id;
    
    useEffect(()=>{
        api.get(`categories/item/${routeParams}`).then(response=>{
            setItem(response.data);
            console.log(item);
        }).catch(error => console.log(error));
    },[setItem]);

    function handelButtonExit(){
        navigation.navigate('Categories');  
    }
    return(
        <View style={StyleCategories.container}>
            <View style={StyleCategories.containerItensHeader}>
                <RectButton onPress={handelButtonExit}>
                    <Image source={Vector} style={StyleCategories.containerItensHeaderImg}/>
                </RectButton>
                <Text style={StyleCategories.containerItensHeaderText} >Vegetables</Text>
           </View>
           <View style={StyleCategories.containerItensScrow}>
                <ScrollView style={{ flex:1 }}>
                    <View style=''>
                        <ItemCard title='Boston Lettuce' unidade='KG' valour={'5.2'}/>
                    </View>
                </ScrollView>
           </View>
        </View>
    )
}