import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, Picker } from 'react-native';
import { colors, scaleMultiplier } from '../constants'

function SetupScreen(props) {

   //// STATE

   const [view, setView] = useState('CustomerInput')

   //// CONSTRUCTOR

   useEffect(() => {

   }, [])

   //// FUNCTIONS

   //// RENDER

   return (
      <View style={styles.screen}>
         <View style={styles.headerContainer}>
            <Text style={styles.welcomeText}>Welcome to</Text>
            <Image source={require('../assets/buzzr_logo.png')} style={styles.logo} />
         </View>
         <View style={styles.viewSelectContainer}>
            <Text style={styles.viewSelectText}>Please select your view:</Text>
            <Picker
               selectedValue={view}
               style={styles.picker}
               itemStyle={styles.viewSelectText}
               onValueChange={(itemValue) => setView(itemValue)}
            >
               <Picker.Item label="Customer" value="CustomerInput" />
               <Picker.Item label="Worker" value="Waitlist" />
            </Picker>
         </View>
         <TouchableOpacity
            style={styles.startButton}
            onPress={() => props.navigation.replace(view)}
         >
            <Text style={styles.startButtonText}>Start</Text>
         </TouchableOpacity>
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
   headerContainer: {
      justifyContent: 'center',
   },
   welcomeText: {
      fontFamily: 'bold',
      textAlign: 'center',
      color: colors.onPrimary,
      fontSize: 40 * scaleMultiplier
   },
   logo: {
      width: 600 * scaleMultiplier,
      height: 200,
      resizeMode: 'contain',
   },
   viewSelectContainer: {
      justifyContent: 'flex-start',
      alignItems: 'center',
   },
   viewSelectText: {
      fontFamily: 'bold',
      textAlign: 'center',
      color: colors.onPrimary,
      fontSize: 25 * scaleMultiplier,
   },
   picker: {
      height: 50 * scaleMultiplier, 
      width: 300 * scaleMultiplier, 
      backgroundColor: colors.background, 
      justifyContent: 'center',
      borderRadius: 10,
      marginTop: 35 * scaleMultiplier
   },
   startButton: {
      width: 300 * scaleMultiplier,
      height: 65 * scaleMultiplier,
      backgroundColor: colors.secondary,
      alignContent: "center",
      justifyContent: "center",
      borderRadius: 10
   },
   startButtonText: {
      fontFamily: "bold",
      textAlign: "center",
      color: colors.onSecondary,
      fontSize: 25 * scaleMultiplier
   }
})

export default SetupScreen;