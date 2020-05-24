import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text, TextInput, Dimensions } from 'react-native'
import { colors } from '../constants'
import { TouchableOpacity } from 'react-native-gesture-handler'
import CreateCustomer from '../database/CreateCustomer'

function CustomerInputScreen (props) {
  //// STATE

  const [name, setName] = useState('')
  const [partySize, setPartySize] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [nameInputRef, setNameInputRef] = useState()
  const [partySizeInputRef, setPartySizeInputRef] = useState()
  const [phoneNumberInputRef, setPhoneNumberInputRef] = useState()

  //// CONSTRUCTOR

  useEffect(() => {}, [])

  //// FUNCTIONS

  async function submit () {
    // some brief input validation
    if (name && partySize && typeof partySize == 'number' && phoneNumber) {
      // set up object to put into database
      var customer = {
        customerID: Math.floor(Math.random() * 1000000000).toString(),
        name: name,
        phone_number: '+1' + phoneNumber,
        party_size: partySize,
        checkin_time: Date.now()
      }

      nameInputRef.clear()
      partySizeInputRef.clear()
      phoneNumberInputRef.clear()

      // call function to create new customer and store status, then navigate to feedback screen
      await CreateCustomer(customer).then(status => {
        props.navigation.navigate('AfterSubmit', {
          wasSuccessful: status,
          partySize: partySize
        })
      })
    } else {
      console.log('input is not valid')
    }
  }

  //// RENDER

  return (
    <View style={styles.screen}>
      <View style={styles.formsContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.labelText}>Name</Text>
          <TextInput
            style={[
              styles.nameInputContainer,
              { width: Dimensions.get('window').width - 40 }
            ]}
            autoFocus={true}
            onChangeText={text => setName(text)}
            autoCapitalize='words'
            autoCorrect={false}
            value={name}
            ref={input => setNameInputRef(input)}
          />
        </View>
        <View style={styles.formContainer}>
          <Text style={styles.labelText}>Party Size</Text>
          <TextInput
            style={[
              styles.nameInputContainer,
              { width: Dimensions.get('window').width >= 500 ? 80 : 60 }
            ]}
            onChangeText={text => setPartySize(parseInt(text))}
            keyboardType='number-pad'
            value={partySize ? partySize.toString() : ''}
            ref={input => setPartySizeInputRef(input)}
          />
        </View>
        <View style={styles.formContainer}>
          <Text style={styles.labelText}>Phone Number</Text>
          <TextInput
            style={[
              styles.nameInputContainer,
              { width: Dimensions.get('window').width >= 500 ? 300 : 200 }
            ]}
            onChangeText={text => setPhoneNumber(text)}
            keyboardType='number-pad'
            value={phoneNumber}
            ref={input => setPhoneNumberInputRef(input)}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.submitButton} onPress={submit}>
        <Text style={styles.submitButtonText}>Add to Waitlist</Text>
      </TouchableOpacity>
    </View>
  )
}

//// STYLES

const styles = StyleSheet.create({
  screen: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1
  },
  addToWaitlistText: {
    fontFamily: 'bold',
    fontSize: 28,
    textAlign: 'center',
    marginTop: 30
  },
  formsContainer: {
    alignItems: 'flex-start',
    width: '100%',
    padding: 20
  },
  formContainer: {
    marginBottom: Dimensions.get('window').width >= 500 ? 30 : 10
  },
  labelText: {
    fontFamily: 'regular',
    fontSize: Dimensions.get('window').width >= 500 ? 32 : 18,
    textAlign: 'left',
    marginBottom: 5,
    color: colors.onBackground
  },
  nameInputContainer: {
    width: '100%',
    borderRadius: 10,
    borderColor: colors.onBackground + '80',
    borderWidth: 1.5,
    padding: 13,
    fontSize: Dimensions.get('window').width >= 500 ? 32 : 20
  },
  submitButton: {
    width: Dimensions.get('window').width >= 500 ? 450 : 300,
    height: Dimensions.get('window').width >= 500 ? 100 : 65,
    backgroundColor: colors.primary,
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },
  submitButtonText: {
    fontFamily: 'bold',
    textAlign: 'center',
    color: colors.onPrimary,
    fontSize: Dimensions.get('window').width >= 500 ? 32 : 24
  }
})

export default CustomerInputScreen
