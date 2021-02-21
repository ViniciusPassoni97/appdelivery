import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import Categories from '../../pages/categories/index';
import Item from '../../pages/item/index';
import Splash from '../../pages/splash/index';
import RoutesButton from '../button/buttonRoute';

const {Navigator,Screen} = createStackNavigator();

export default function routeStack() {
    return(
        <Navigator screenOptions={{headerShown: false}}>
            <Screen name="Splash" component={Splash}/>
            <Screen name="Categories" component={Categories}/>
            <Screen name="Item" component={RoutesButton}/>
        </Navigator>
    );
}