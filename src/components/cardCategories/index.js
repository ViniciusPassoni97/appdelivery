import React from 'react';
import {View,Text,Image} from 'react-native';
import {StyleCardCategory} from './style';
import {RectButton} from 'react-native-gesture-handler';
import Vegetables from '../../../assets/vegetables.png';

export default function CardCategories(props) {
    return(
        <View style={StyleCardCategory.containerCategory}>
            <RectButton>
                <View style=''>
                    <Image source={Vegetables}/>
                </View>
                <View style=''>
                    <Text>Vegetables</Text>
                </View>
                <View style=''>
                    <Text>39</Text>
                </View>
            </RectButton>
        </View>
    )
}

