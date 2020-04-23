import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

function SetupScreen(props) {

   //// STATE

   const [view, setView] = useState('Customer')

   //// CONSTRUCTOR

   useEffect(() => {

   }, [])

   //// FUNCTIONS

   //// RENDER

   return (
      <View style={styles.screen}>
         <TouchableOpacity 
            style={styles.submitButton}
            onPress={() => props.navigation.replace('CustomerInput')}
         >
            <Text style={styles.submitButtonText}>Submit</Text>
         </TouchableOpacity>
      </View>
   )
}

//// STYLES

const styles = StyleSheet.create({
   screen: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
   },
   submitButton: {
      width: "20%",
      height: "10%",
      backgroundColor: "#f8ce66",
      alignContent: "center",
      justifyContent: "center",
      borderRadius: 5
   },
   submitButtonText: {
      fontFamily: "bold",
      textAlign: "center"
   }
})

export default SetupScreen;