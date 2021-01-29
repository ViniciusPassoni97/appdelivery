import React from 'react';
import {View,Text,Image} from 'react-native';
import {StyleCardCategory} from './style';
import {RectButton} from 'react-native-gesture-handler';

export default function CardCategories(props) {
    return(
        <View style={StyleCardCategory.containerCategory}>
            <RectButton>
                <View style={StyleCardCategory.containerCategoryImage}>
                    <Image style={StyleCardCategory.categoryImage} source={props.urlImage}/>
                </View>
                <View style={StyleCardCategory.containerCategoryText}>
                    <Text style={StyleCardCategory.categoryText}>{props.title}</Text>
                </View>
                <View style={StyleCardCategory.containerCategoryQuantity}>
                    <Text style={StyleCardCategory.categoryQuantity}>({props.number})</Text>
                </View>
            </RectButton>
            {props.children}
        </View>
    )
}