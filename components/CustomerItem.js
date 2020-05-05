import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { colors, scaleMultiplier } from '../constants';
import { TouchableOpacity } from 'react-native-gesture-handler';

function CustomerItem(props) {

   //// STATE

   //// CONSTRUCTOR

   useEffect(() => {
      console.log(props.name)
   }, [])

   //// FUNCTIONS

   //// RENDER

   return (
      <View style={styles.customerItemContainer}>
         <View style={[styles.customerFieldContainer, { flex: 1 }]}>
            <Text style={styles.headerText}>{props.partySize}</Text>
         </View>
         <View style={[styles.customerFieldContainer, { flex: 5 }]}>
            <Text style={styles.headerText}>{props.name}</Text>
         </View>
         <View style={[styles.customerFieldContainer, { flex: 2 }]}>
            <Text style={styles.headerText}>{props.checkinTime}</Text>
         </View>
         <View style={[styles.customerFieldContainer, { flex: 2 }]}>
            <TouchableOpacity onPress={() => { }}>
               <Text style={styles.headerText}></Text>
            </TouchableOpacity>
         </View>
      </View>
   )
}

//// STYLES

const styles = StyleSheet.create({
   customerItemContainer: {
      height: 30 * scaleMultiplier,
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
      paddingHorizontal: 20,
      alignItems: 'center',
   },
   customerFieldContainer: {
      height: "100%",
      flexDirection: 'row',
      alignItems: 'center',
   }
})

export default CustomerItem;