import React from 'react';
import {View,Text} from 'react-native';
import {StyleInfo} from './style';
import MapView from 'react-native-maps';

export default function Info() {
    return (
        <View style={StyleInfo.container}>
            <View style={StyleInfo.containerHeader}>
                <Text style={StyleInfo.containerHeaderTitle}>Info</Text>
            </View>
            <View style={StyleInfo.containerMap}>
                <MapView
                    style={StyleInfo.containerHeaderMap}
                    initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                    }}
                />
            </View>
        </View>
    );
}