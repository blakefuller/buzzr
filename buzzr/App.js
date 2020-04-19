import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BuzzrNavigator from './navigation/BuzzrNavigator'
import * as Font from 'expo-font';

export default function App() {

   // keeps track of whether fonts are loaded
   const [fontsLoaded, setFontsLoaded] = useState(false)

   //// CONSTRUCTOR

   useEffect(() => {
      loadFonts();
   }, [])

   //// FUNCTIONS

   // loads up all the fonts
   async function loadFonts() {
      await Font.loadAsync({
         'extra-bold': require('./assets/fonts/OpenSans-ExtraBold.ttf'),
      });
      await Font.loadAsync({
         'extra-bold-italic': require('./assets/fonts/OpenSans-ExtraBoldItalic.ttf'),
      }); 
      await Font.loadAsync({
         'semi-bold': require('./assets/fonts/OpenSans-SemiBold.ttf'),
      }); 
      await Font.loadAsync({
         'semi-bold-italic': require('./assets/fonts/OpenSans-SemiBoldItalic.ttf'),
      });      
      await Font.loadAsync({
         'bold': require('./assets/fonts/OpenSans-Bold.ttf'),
      });
      await Font.loadAsync({
         'bold-italic': require('./assets/fonts/OpenSans-BoldItalic.ttf'),
      });
      await Font.loadAsync({
         'regular': require('./assets/fonts/OpenSans-Regular.ttf'),
      });
      await Font.loadAsync({
         'italic': require('./assets/fonts/OpenSans-Italic.ttf'),
      });
      await Font.loadAsync({
         'light': require('./assets/fonts/OpenSans-Light.ttf'),
      });
      await Font.loadAsync({
         'light-italic': require('./assets/fonts/OpenSans-LightItalic.ttf'),
      });
      setFontsLoaded(true);
   }
   if (fontsLoaded) {
      return (
         <BuzzrNavigator />
      );
   } else {
      return null
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
   },
});