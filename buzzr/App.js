import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BuzzrNavigator from './navigation/BuzzrNavigator'

export default function App() {
  return (
    <BuzzrNavigator />
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