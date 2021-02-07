import React from 'react';
import {View,Text,Image,TextInput,ScrollView} from 'react-native';
import { StyleCategories } from './style';
import {RectButton} from 'react-native-gesture-handler';
import Vector from '../../../assets/vector.png';
import ItemCard from '../../../src/components/cardItens/index';

export default function Item(){
    return(
        <View style={StyleCategories.container}>
            <View style={StyleCategories.containerItensHeader}>
                <RectButton>
                    <Image source={Vector} style={StyleCategories.containerItensHeaderImg}/>
                </RectButton>
                <Text style={StyleCategories.containerItensHeaderText} >Vegetables</Text>
                <TextInput
                    style={StyleCategories.containerItemHeaderInput}
                />
           </View>
           <View style={StyleCategories.containerItensScrow}>
                <ScrollView style={{ flex:1 }}>
                    <View style=''>
                        <ItemCard title='Boston Lettuce' unidade='KG' valour={'0.2'}/>
                    </View>
                    <View style=''>
                        <ItemCard title='Boston Lettuce' unidade='UN' valour={'2.5'}/>
                    </View>
                    <View style=''>
                        <ItemCard title='Boston Lettuce' unidade='KG' valour={'3.2'}/>
                    </View>
                    <View style=''>
                        <ItemCard title='Boston Lettuce' unidade='UN' valour={'4.1'}/>
                    </View>
                    <View style=''>
                        <ItemCard title='Boston Lettuce' unidade='KG' valour={'5.2'}/>
                    </View>
                </ScrollView>
           </View>
        </View>
    )
}