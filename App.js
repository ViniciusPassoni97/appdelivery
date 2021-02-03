import React from 'react';
import { StyleSheet } from 'react-native';
import Categories from './src/pages/categories/index';
import Splash from './src/pages/splash/index.js';
import Item from './src/pages/item/index';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const {Navigator, Screen} = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false}}>
        <Screen name="Splash" component={Splash}/>
        <Screen name="Categories" component={Categories}/>
        <Screen name="Item" component={Item}/>
      </Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
