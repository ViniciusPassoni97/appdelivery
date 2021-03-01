import React from 'react';
import {View,Text} from 'react-native';
import {StyleInfo} from './style';

export default function Info() {
    return (
        <View style={StyleInfo.container}>
            <View style={StyleInfo.containerHeader}>
                <Text>Info</Text>
            </View>
        </View>
    );
}