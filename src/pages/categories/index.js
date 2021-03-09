import React,{useEffect,useState} from 'react';
import { Text, View,Image,ScrollView,TouchableNativeFeedback } from 'react-native';
import CardCategories from '../../components/cardCategories/index';
import {StyleCategories} from './style';
import Vector from '../../../assets/vector.png';
import { useNavigation } from '@react-navigation/native';
import {RectButton} from 'react-native-gesture-handler';
import VegetablesIcon from '../../../assets/vegetables.png';
import FruitsIcon from '../../../assets/fruits.png';
import BreadIcon from '../../../assets/bread.png';
import SweetsIcon from '../../../assets/sweets.png';
import SpaghettiIcon from '../../../assets/spaghetti.png';
import CoffeIcon from '../../../assets/coffe.png';
import api from '../../api/index';

export default function Categories(){
    const [categories, setCategories]= useState(null);

    const navigation = useNavigation();

    function HandleSlash() {
        navigation.navigate('Splash');  
    }

    function HandleIten() {
        navigation.navigate('Item'); 
    }

    useEffect(()=>{
        api.get('categories').then(response=>{
            console.log(response.data);
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
                       <TouchableNativeFeedback onPress={HandleIten}> 
                            <RectButton>
                                <CardCategories urlImage={VegetablesIcon} title='Vegetables' number='12'/>
                            </RectButton>
                       </TouchableNativeFeedback>
                       <TouchableNativeFeedback onPress={HandleIten}>
                            <RectButton>
                                <CardCategories urlImage={FruitsIcon} title='Fruits' number='39'/>
                            </RectButton>
                       </TouchableNativeFeedback>
                   </View>
                   <View style={StyleCategories.containerCategoriesScrow}>
                        <TouchableNativeFeedback onPress={HandleIten}>
                            <RectButton>
                                <CardCategories urlImage={BreadIcon} title='Bread' number='9'/>
                            </RectButton>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback onPress={HandleIten}>
                            <RectButton>
                                <CardCategories urlImage={SweetsIcon} title='Sweets' number='21'/>
                            </RectButton>
                        </TouchableNativeFeedback>
                   </View>
                   <View style={StyleCategories.containerCategoriesScrow}>
                        <TouchableNativeFeedback onPress={HandleIten}>
                            <RectButton>
                                <CardCategories urlImage={SpaghettiIcon} title='Spaghetti' number='7'/>
                            </RectButton>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback onPress={HandleIten}>
                            <RectButton>
                                <CardCategories urlImage={CoffeIcon} title='Coffe' number='16'/>
                            </RectButton>
                        </TouchableNativeFeedback>
                   </View>
               </ScrollView>
            </View>
       </View>
    )
}