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
                        <ItemCard/>
                    </View>
                    <View style=''>
                        <ItemCard/>
                    </View>
                    <View style=''>
                        <ItemCard/>
                    </View>
                    <View style=''>
                        <ItemCard/>
                    </View>
                    <View style=''>
                        <ItemCard/>
                    </View>
                </ScrollView>
           </View>
        </View>
    )
}