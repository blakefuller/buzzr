import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';


function CustomerInputScreen(props) {

   //// STATE

   //// CONSTRUCTOR

   useEffect(() => {

   }, [])

   //// FUNCTIONS

   //// RENDER

   return (
      <View style={styles.screen}>
         <Text>Customer Input Screen</Text>
      </View>
   )
}

//// STYLES

const styles = StyleSheet.create({
   screen: {
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
   },
})

export default CustomerInputScreen;