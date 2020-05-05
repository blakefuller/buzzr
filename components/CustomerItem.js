import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { colors, scaleMultiplier } from '../constants';
import { TouchableOpacity } from 'react-native-gesture-handler';

function CustomerItem(props) {

   //// STATE

   //// CONSTRUCTOR

   useEffect(() => {

   }, [])

   //// FUNCTIONS

   //// RENDER

   function renderCustomer({ customer }) {
      return (
         <CustomerItem />
      )
   }

   return (
      <View style={styles.customerItemContainer}>
         <View style={[styles.customerFieldContainer, { flex: 1 }]}>
            <Text style={styles.headerText}>Size</Text>
         </View>
         <View style={[styles.customerFieldContainer, { flex: 5 }]}>
            <Text style={styles.headerText}>Name</Text>
         </View>
         <View style={[styles.customerFieldContainer, { flex: 2 }]}>
            <Text style={styles.headerText}>Waiting</Text>
         </View>
         <View style={[styles.customerFieldContainer, { flex: 2 }]}>
            <TouchableOpacity onPress={() => { }}>
               <Text style={styles.headerText}>Notified</Text>
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