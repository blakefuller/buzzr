import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, Picker } from 'react-native';
import { colors, scaleMultiplier } from '../constants'
import { Ionicons } from '@expo/vector-icons'
function SetupScreen(props) {

   //// STATE

   const [wasSuccessful, setWasSuccessful] = useState(true)

   //// CONSTRUCTOR

   useEffect(() => {
      // set wasSuccessful based on AWS feedback
      setWasSuccessful(props.route.params.wasSuccessful)
   }, [])

   //// FUNCTIONS

   //// RENDER

   return (
      <View style={styles.screen}>
         <Ionicons 
            name={wasSuccessful ? 'ios-checkmark-circle-outline' : 'ios-close-circle-outline'} 
            size={100 * scaleMultiplier} 
            color={colors.onPrimary}
         />
         <Text style={styles.statusHeaderText}>{wasSuccessful ? 'Success!' : 'Error'}</Text>
         <Text style={styles.statusBodyText}>{wasSuccessful ? 'You should receive a confirmation text message shortly.' : 'Please contact a host.'}</Text>
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
   statusHeaderText: {
      fontFamily: 'bold',
      fontSize: 30 * scaleMultiplier,
      color: colors.onPrimary
   },
   statusBodyText: {
      fontFamily: 'semi-bold',
      fontSize: 24 * scaleMultiplier,
      color: colors.onPrimary,
      textAlign: 'center'
   }
})

export default SetupScreen;