import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Splash from './src/pages/splash/index.js';
export default function App() {
  return (
    <View style={styles.container}>
      <Splash />
    </View>
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
