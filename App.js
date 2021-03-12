import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RouteIndex from './src/routes/index';
import {ChallengesProvieder} from './src/contexts/shopping';

export default function App() {
  return (
    <ChallengesProvieder>
      <NavigationContainer>
        <RouteIndex />
      </NavigationContainer>
    </ChallengesProvieder>
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
