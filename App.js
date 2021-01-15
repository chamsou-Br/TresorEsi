import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import HomeStack from './Navigations/HomeStack';
import AboutStack from './Navigations/AboutStack';
import ContriptionStack from './Navigations/contriptionStack'
import TabNav from './Navigations/TabNav';





export default function App() {
  return (
     
  <TabNav />
     
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
