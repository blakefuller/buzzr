import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { colors, scaleMultiplier } from '../constants';
import { TouchableOpacity } from 'react-native-gesture-handler';

function WaitlistScreen(props) {

   //// STATE

   //// CONSTRUCTOR

   useEffect(() => {

   }, [])

   //// FUNCTIONS

   function fetchCustomer() {

   }

   //// RENDER

   function renderCustomer({customer}) {
      return (
         <CustomerItem />
      )
   }

   return (
      <View style={styles.screen}>
         <View style={styles.headerBar}>
            <View style={[styles.headerButton, { flex: 1 }]}>
               <TouchableOpacity onPress={() => { }}>
                  <Text style={styles.headerText}>Size</Text>
               </TouchableOpacity>
            </View>
            <View style={[styles.headerButton, { flex: 5 }]}>
               <TouchableOpacity onPress={() => { }}>
                  <Text style={styles.headerText}>Name</Text>
               </TouchableOpacity>
            </View>
            <View style={[styles.headerButton, { flex: 2 }]}>
               <TouchableOpacity onPress={() => { }}>
                  <Text style={styles.headerText}>Waiting</Text>
               </TouchableOpacity>
            </View>
            <View style={[styles.headerButton, { flex: 2 }]}>
               <TouchableOpacity onPress={() => { }}>
                  <Text style={styles.headerText}>Notified</Text>
               </TouchableOpacity>
            </View>
         </View>
      {/* <FlatList 
         data={}
         renderItem={renderCustomer}
      /> */}
      </View>
   )
}

//// STYLES

const styles = StyleSheet.create({
   screen: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center'
   },
   headerBar: {
      backgroundColor: colors.primaryLight,
      height: 30 * scaleMultiplier,
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
      paddingHorizontal: 20,
      alignItems: 'center',
   },
   headerButton: {
      height: "100%",
      flexDirection: 'row',
      alignItems: 'center',
   },
   headerText: {
      fontFamily: "regular",
      fontSize: 14 * scaleMultiplier,
   }
})

export default WaitlistScreen;