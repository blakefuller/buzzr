import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, Picker } from 'react-native';
import { colors, scaleMultiplier } from '../constants'
import { Ionicons } from '@expo/vector-icons'
function SetupScreen(props) {

   //// STATE

   const [wasSuccessful, setWasSuccessful] = useState(true)

   //// CONSTRUCTOR

   useEffect(() => {

   }, [])

   //// FUNCTIONS

   //// RENDER

   return (
      <View style={styles.screen}>
         <Ionicons name={wasSuccessful ? 'ios-checkmark-circle-outline' : 'ios-close-circle-outline'} size={100 * scaleMultiplier} color={colors.onPrimary}/>
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