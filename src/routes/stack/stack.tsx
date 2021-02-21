import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import Item from '../../pages/item/index';
import Splash from '../../pages/splash/index';
import RoutesButton from '../button/buttonRoute';

const {Navigator,Screen} = createStackNavigator();

export default function routeStack() {
    return(
        <Navigator screenOptions={{headerShown: false}}>
            <Screen name="Splash" component={Splash}/>
            <Screen name="Item" component={Item}/>
            <Screen name="Categories" component={RoutesButton}>
            </Screen>   
        </Navigator>
    );
}