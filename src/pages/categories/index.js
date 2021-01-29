import React from 'react';
import { Text, View,Image,TextInput,ScrollView } from 'react-native';
import Menu from '../../components/menu/index';
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

export default function Categories(){
    const navigation = useNavigation();

    function HandleSlash() {
        console.log('Splash');
        navigation.navigate('Splash');  
    }
    function HandleIten() {
        console.log('Item');
        navigation.navigate('Splash'); 
    }
    return (
       <View style={StyleCategories.containerCategories}>
           <View style={StyleCategories.containerCategoriesHeader}>
                <RectButton onPress={HandleSlash}>
                    <Image source={Vector} style={StyleCategories.containerCategoriesHeaderVector}/>
                </RectButton>
                <Text style={StyleCategories.containerCategoriesHeaderText} >Categories</Text>
                <TextInput
                    style={StyleCategories.containerCategoriesHeaderInput}
                />
           </View>
           <View style={StyleCategories.containerCategoriesCard}>
               <ScrollView style={{ flex: 1 }}>
                   <View style={StyleCategories.containerCategoriesScrow}>
                       <RectButton onClick={HandleIten}>
                            <CardCategories urlImage={VegetablesIcon} title='Vegetables' number='12'/>
                       </RectButton>
                        <CardCategories urlImage={FruitsIcon} title='Fruits' number='39'/>
                   </View>
                   <View style={StyleCategories.containerCategoriesScrow}>
                        <CardCategories urlImage={BreadIcon} title='Bread' number='9'/>
                        <CardCategories urlImage={SweetsIcon} title='Sweets' number='21'/>
                   </View>
                   <View style={StyleCategories.containerCategoriesScrow}>
                        <CardCategories urlImage={SpaghettiIcon} title='Spaghetti' number='7'/>
                        <CardCategories urlImage={CoffeIcon} title='Coffe' number='16'/>
                   </View>
               </ScrollView>
            </View>
            <View style={StyleCategories.containerCategoriesMenu}>
                <Menu />
            </View>
       </View>
    )
}