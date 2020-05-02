import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, Picker } from 'react-native';
import { colors, scaleMultiplier } from '../constants'
// import {Ionicons} from ''
function SetupScreen(props) {

   //// STATE

   const [wasSuccessful, setWasSuccessful] = useState(false)

   //// CONSTRUCTOR

   useEffect(() => {

   }, [])

   //// FUNCTIONS

   //// RENDER

   return (
      <View style={styles.screen}>
         
      </View>
   )
}

//// STYLES

const styles = StyleSheet.create({
   screen: {
      flex: 1,
      justifyContent: "space-evenly",
      alignItems: "center",
      backgroundColor: colors.primary
   },
   
})

export default SetupScreen;