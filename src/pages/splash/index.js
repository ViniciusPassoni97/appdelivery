import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { ContainerSplash } from './styles';

export default function Splash() {
  return (
    <View style={ContainerSplash.container}>
      <Text>Splash</Text>
      <StatusBar style="auto" />
    </View>
  );
}
