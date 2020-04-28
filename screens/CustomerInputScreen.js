import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
//import AWS from '../AWS.config'

function CustomerInputScreen(props) {

   //// STATE

   //// CONSTRUCTOR

   useEffect(() => {
      testFetch();
   }, [])

   //// FUNCTIONS

   function testFetch() {
      // let docClient = new AWS.DynamoDB.DocumentClient();
      // var params = {
      //    TableName: "buzzr",
      //    Key: {
      //       "resturantID": 42,
      //       "customerID": 42
      //    }
      // }
      // docClient.get(params, function(error, data) {
      //    if (err) 
      //       console.log(err)
      //    else 
      //       console.log(data)
      // })
   }

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