import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RouteIndex from './src/routes/index';
import {CountdownProvider} from './src/providers/Shopping';

export default function App() {
  return (
    <NavigationContainer>
      <RouteIndex />
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
