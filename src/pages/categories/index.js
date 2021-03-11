import React,{useEffect,useState} from 'react';
import { Text, View,Image,ScrollView,TouchableNativeFeedback } from 'react-native';
import CardCategories from '../../components/cardCategories/index';
import {StyleCategories} from './style';
import Vector from '../../../assets/vector.png';
import { useNavigation } from '@react-navigation/native';
import {RectButton} from 'react-native-gesture-handler';
import api from '../../api/index';


export default function Categories(){
    const [categories, setCategories]= useState([
        {
          description:'',
          image:'https://th.bing.com/th/id/OIP.IUHhrZatqdgEqxT5lsaSIAHaFD?w=230&h=180&c=7&o=5&dpr=1.5&pid=1.7',
          id:0
        }
    ]);

    const navigation = useNavigation();

    function HandleSlash() {
        navigation.navigate('Splash');  
    }

    function HandleIten(id) {
        navigation.navigate('Item',{id}); 
    }

    useEffect(()=>{
        api.get('categories').then(response=>{
            setCategories(response.data);
        }).catch(error => console.log(error));
    },[]);

    return (
       <View style={StyleCategories.containerCategories}>
           <View style={StyleCategories.containerCategoriesHeader}>
                <RectButton onPress={HandleSlash}>
                    <Image source={Vector} style={StyleCategories.containerCategoriesHeaderVector}/>
                </RectButton>
                <Text style={StyleCategories.containerCategoriesHeaderText} >Categories</Text>
           </View>
           <View style={StyleCategories.containerCategoriesCard}>
               <ScrollView style={{ flex: 1 }}>
               <View style={StyleCategories.containerCategoriesScrow}>
                    {categories.map((categoria)=>{
                        return (
                            <TouchableNativeFeedback onPress={()=>HandleIten(categoria.id)}> 
                                <RectButton>
                                    <CardCategories key={categoria.id} urlImage={categoria.image} title={categoria.description} number='12'/>
                                </RectButton>
                            </TouchableNativeFeedback>
                        );
                    })}
                 </View>
               </ScrollView>
            </View>
       </View>
    )
}