import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RouteIndex from './src/routes/index';
import {ChallengeContext} from './src/contexts/shopping';

export default function App() {
  return (
    <NavigationContainer>
      <ChallengeContext.Provider value={'teste'}>
        <RouteIndex />
      </ChallengeContext.Provider>
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
