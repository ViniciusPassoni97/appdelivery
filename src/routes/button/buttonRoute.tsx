import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Shopping from '../../pages/shopping/index';
import Info from '../../pages/info/index';
import Categories from '../../pages/categories';
import {AntDesign,Entypo,Fontisto  } from '@expo/vector-icons';

const {Navigator,Screen} = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Navigator
      tabBarOptions={{
        style:{
          elevation:0,
          shadowOpacity:0,
          height:64
        },
        tabStyle:{
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
        },
        iconStyle:{
          flex:0,
          width:60,
          height:35
        },
        inactiveBackgroundColor:'#f3f3f3'
      }}
    >
      <Screen 
      name="Home" 
      component={Categories} 
      options={{
        tabBarLabel:'',
        tabBarIcon:()=>{
          return(
            <AntDesign name="bars" size={33} color="black" />
          )
        }
      }} 
      />
      <Screen 
      name="Shopping" 
      component={Shopping} 
      options={{
        tabBarLabel:'',
        tabBarIcon:()=>{
          return(
            <Fontisto name="shopping-basket-add" size={33} color="black" />
          )
        }
      }} 
      />
      <Screen 
      name="Info" 
      component={Info}
      options={{
        tabBarLabel:'',
        tabBarIcon:()=>{
          return(
            <Entypo name="user" size={24} color="black" />
          )
        }
      }} 
      />
    </Navigator>
  );
}