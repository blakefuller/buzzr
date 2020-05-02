import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import { colors, scaleMultiplier } from '../constants'
import { TouchableOpacity } from 'react-native-gesture-handler';
// import AWS from '../AWS.config'

function CustomerInputScreen(props) {

   //// STATE

   const [name, setName] = useState('');
   const [partySize, setPartySize] = useState();
   const [phoneNumber, setPhoneNumber] = useState('');

   //// CONSTRUCTOR

   useEffect(() => {
      
   }, [])

   //// FUNCTIONS

   function submit() {
      if(name && partySize && typeof partySize == 'number' && phoneNumber) {
         console.log('input is valid')
         // fetch().then(() => navigate to after submit screen with status)
      } else {
         console.log('input is not valid')
      }
   }

   // function testFetch() {
   //    let docClient = new AWS.DynamoDB.DocumentClient();
   //    var params = {
   //       TableName: "buzzr",
   //       Key: {
   //          "resturantID": 42,
   //          "customerID": 42
   //       }
   //    }
   //    docClient.get(params, function(error, data) {
   //       if (err) 
   //          console.log(err)
   //       else 
   //          console.log(data)
   //    })
   // }

   //// RENDER

   return (
      <View style={styles.screen}>
         <Text style={styles.addToWaitlistText}>Add to Waitlist</Text>
         <View style={styles.formsContainer}>
            <View style={styles.formContainer}>
               <Text style={styles.labelText}>Name</Text>
               <TextInput
                  style={[styles.nameInputContainer, { width: 350 * scaleMultiplier }]}
                  autoFocus={true}
                  onChangeText={text => setName(text)}
                  autoCapitalize='words'
                  autoCorrect={false}
               />
            </View>
            <View style={styles.formContainer}>
               <Text style={styles.labelText}>Party Size</Text>
               <TextInput
                  style={[styles.nameInputContainer, { width: 60 * scaleMultiplier }]}
                  onChangeText={text => setPartySize(parseInt(text))}
                  keyboardType='number-pad'
               />
            </View>
            <View style={styles.formContainer}>
               <Text style={styles.labelText}>Phone Number</Text>
               <TextInput
                  style={[styles.nameInputContainer, { width: 200 * scaleMultiplier }]}
                  onChangeText={text => setPhoneNumber(text)}
                  keyboardType='number-pad'
               />
            </View >
         </View>
         <TouchableOpacity
               style={styles.submitButton}
               onPress={submit}
            >
               <Text style={styles.submitButtonText}>Add to Waitlist</Text>
            </TouchableOpacity>
      </View >
   )
}

//// STYLES

const styles = StyleSheet.create({
   screen: {
      justifyContent: "flex-start",
      alignItems: "center",
      flex: 1,
   },
   addToWaitlistText: {
      fontFamily: 'bold',
      fontSize: 28 * scaleMultiplier,
      textAlign: "center",
      marginTop: 30
   },
   formsContainer: {
      alignItems: "flex-start",
      width: "100%",
      padding: 20
   },
   formContainer: {
      marginBottom: 40
   },
   labelText: {
      fontFamily: 'semi-bold',
      fontSize: 18 * scaleMultiplier,
      textAlign: 'left',
      marginBottom: 5
   },
   nameInputContainer: {
      width: '100%',
      borderRadius: 10,
      borderColor: "#062A28",
      borderWidth: 2,
      padding: 15,
      fontSize: 20 * scaleMultiplier
   },
   submitButton: {
      width: 300 * scaleMultiplier,
      height: 65 * scaleMultiplier,
      backgroundColor: colors.primary,
      alignContent: "center",
      justifyContent: "center",
      borderRadius: 10,
   },
   submitButtonText: {
      fontFamily: "bold",
      textAlign: "center",
      color: colors.onPrimary,
      fontSize: 25 * scaleMultiplier
   }
})

export default CustomerInputScreen;