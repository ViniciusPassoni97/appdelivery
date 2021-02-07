import React from 'react';
import {View,Text,Image,TextInput,ScrollView} from 'react-native';
import { StyleCategories } from './style';
import {RectButton} from 'react-native-gesture-handler';
import Vector from '../../../assets/vector.png';


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
                        <Text>Item</Text>
                    </View>
                    <View style=''>
                        <Text>Item</Text>
                    </View>
                    <View style=''>
                        <Text>Item</Text>
                    </View>
                    <View style=''>
                        <Text>Item</Text>
                    </View>
                    <View style=''>
                        <Text>Item</Text>
                    </View>
                </ScrollView>
           </View>
        </View>
    )
}