import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text, TextInput } from 'react-native'
import { colors, scaleMultiplier } from '../constants'
import { TouchableOpacity } from 'react-native-gesture-handler'
import EditCustomer from '../database/EditCustomer'

function CustomerInputScreen (props) {
  //// STATE

  const [name, setName] = useState(props.route.params.customer.name)
  const [partySize, setPartySize] = useState(
    props.route.params.customer.party_size.toString()
  )
  const [phoneNumber, setPhoneNumber] = useState(
    props.route.params.customer.phone_number.slice(-10)
  )
  const [nameInputRef, setNameInputRef] = useState()
  const [partySizeInputRef, setPartySizeInputRef] = useState()
  const [phoneNumberInputRef, setPhoneNumberInputRef] = useState()
  const [saveSuccessful, setSaveSuccessful] = useState()

  //// CONSTRUCTOR

  useEffect(() => {}, [])

  //// FUNCTIONS

  async function updateCustomer () {
      var customer = {
        customerID: props.route.params.customer.customerID,
        name: name,
        phone_number: '+1' + phoneNumber,
        party_size: partySize,
        checkin_time: props.route.params.customer.checkin_time
      }

      // call function to create new customer and store status, then navigate to feedback screen
      await EditCustomer(customer).then(status => {
        setSaveSuccessful(status ? 'yes' : 'no')
      })
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
              { width: 350 * scaleMultiplier }
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
            style={[styles.nameInputContainer, { width: 60 * scaleMultiplier }]}
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
              { width: 200 * scaleMultiplier }
            ]}
            onChangeText={text => setPhoneNumber(text)}
            keyboardType='number-pad'
            value={phoneNumber}
            ref={input => setPhoneNumberInputRef(input)}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.submitButton} onPress={updateCustomer}>
        <Text style={styles.submitButtonText}>Save</Text>
      </TouchableOpacity>
      <Text style={styles.labelText}>
        {saveSuccessful
          ? saveSuccessful === 'yes'
            ? 'Edit successful'
            : 'Edit not successful'
          : ''}
      </Text>
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
    fontSize: 28 * scaleMultiplier,
    textAlign: 'center',
    marginTop: 30
  },
  formsContainer: {
    alignItems: 'flex-start',
    width: '100%',
    padding: 20
  },
  formContainer: {
    marginBottom: 40
  },
  labelText: {
    fontFamily: 'regular',
    fontSize: 18 * scaleMultiplier,
    textAlign: 'left',
    marginBottom: 5
  },
  nameInputContainer: {
    width: '100%',
    borderRadius: 10,
    borderColor: '#062A28',
    borderWidth: 2,
    padding: 15,
    fontSize: 20 * scaleMultiplier
  },
  submitButton: {
    width: 300 * scaleMultiplier,
    height: 65 * scaleMultiplier,
    backgroundColor: colors.primary,
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },
  submitButtonText: {
    fontFamily: 'bold',
    textAlign: 'center',
    color: colors.onPrimary,
    fontSize: 25 * scaleMultiplier
  }
})

export default CustomerInputScreen
