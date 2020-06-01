import React, { useEffect, useState } from 'react'
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Dimensions,
  Alert
} from 'react-native'
import { colors } from '../constants'
import { TouchableOpacity } from 'react-native-gesture-handler'
import CreateCustomer from '../database/CreateCustomer'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import HostNotify from '../database/HostNotify'

function CustomerInputScreen (props) {
  //// STATE

  // text input forms state
  const [name, setName] = useState('')
  const [partySize, setPartySize] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')

  // refs for text input forms - used for clearing text
  const [nameInputRef, setNameInputRef] = useState()
  const [partySizeInputRef, setPartySizeInputRef] = useState()
  const [phoneNumberInputRef, setPhoneNumberInputRef] = useState()

  //// CONSTRUCTOR

  useEffect(() => {
    props.navigation.setOptions(setNavOptions())
  }, [])

  //// FUNCTIONS

  // sets the nav options for this screen
  function setNavOptions () {
    return {
      headerRight: () => (
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            marginHorizontal: 15
          }}
          onPress={notifyHost}
        >
          <MaterialCommunityIcons
            name='bell-ring'
            size={32}
            color={colors.onPrimary}
          />
        </TouchableOpacity>
      )
    }
  }

  // validates the user's inputs and return either 'good' or an error message
  function validateInputs () {
    // check that phone number is valid
    var phoneNumberRE = /^[0-9]{3}[-]{0,1}[0-9]{3}[-]{0,1}[0-9]{4}$/
    var phoneNumberValid = phoneNumberRE.exec(phoneNumber)

    // check that the party size is valid
    var partySizeRE = /^[1-9]+/
    var partySizeValid = partySizeRE.exec(partySize)

    // check that no fields are blank
    if (!name) return 'Name cannot be blank'
    else if (!partySize) return 'Party size cannot be empty'
    else if (!phoneNumber) return 'Phone number cannot be empty'
    // check that types are correct
    else if (typeof partySize !== 'number' || !partySizeValid)
      return 'Please enter a valid number for party size'
    else if (!phoneNumberValid)
      return 'Please enter a valid 10 digit phone number in the format ##########'
    else return 'good'
  }

  // adds a customer to the db when the user presses the submit button
  async function submit () {
    // make sure our inputs are valid
    var inputsValid = validateInputs()

    if (inputsValid === 'good') {
      // set up object to put into database
      var customer = {
        customerID: Math.floor(Math.random() * 1000000000).toString(),
        name: name,
        phone_number: '+1' + phoneNumber,
        party_size: partySize,
        checkin_time: Date.now()
      }

      // clear out text inputs
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
      // if inputs are not valid, display the appropriate error message
      Alert.alert('Error', inputsValid, [{ text: 'OK', onPress: () => {} }])
    }
  }

  // notifies all connected devices that someone needs help
  function notifyHost () {
    // trigger notify variable in database
    HostNotify(1);

    Alert.alert(
      'A restaurant worker has been notified',
      'Please wait: help will arrive shortly',
      [{ text: 'OK', onPress: () => {} }]
    )
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
