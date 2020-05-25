import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text, TextInput } from 'react-native'
import { colors } from '../constants'
import { TouchableOpacity } from 'react-native-gesture-handler'
import EditCustomer from '../database/EditCustomer'

function CustomerInputScreen (props) {
  //// STATE

  // text input forms state
  const [name, setName] = useState(props.route.params.customer.name)
  const [partySize, setPartySize] = useState(
    props.route.params.customer.party_size.toString()
  )

  // refs for text input forms - used for clearing text
  const [nameInputRef, setNameInputRef] = useState()
  const [partySizeInputRef, setPartySizeInputRef] = useState()

  // keeps track of whether our db operation was successful
  const [saveSuccessful, setSaveSuccessful] = useState()

  //// FUNCTIONS

  // updates the customer of a given id with the form inputs
  async function updateCustomer () {
    var customer = {
      customerID: props.route.params.customer.customerID,
      name: name,
      party_size: partySize
    }

    // call function to create new customer and store status, then update was successful
    // variable to display feedback on screen
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
            style={[styles.nameInputContainer, { width: 350 }]}
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
            style={[styles.nameInputContainer, { width: 60 }]}
            onChangeText={text => setPartySize(parseInt(text))}
            keyboardType='number-pad'
            value={partySize ? partySize.toString() : ''}
            ref={input => setPartySizeInputRef(input)}
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
    marginBottom: 10
  },
  labelText: {
    fontFamily: 'regular',
    fontSize: 18,
    textAlign: 'left',
    marginBottom: 5,
    color: colors.onBackground
  },
  nameInputContainer: {
    width: '100%',
    borderRadius: 10,
    borderColor: colors.onBackground + '80',
    borderWidth: 2,
    padding: 15,
    fontSize: 20,
    color: colors.onBackground
  },
  submitButton: {
    width: 300,
    height: 65,
    backgroundColor: colors.primary,
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },
  submitButtonText: {
    fontFamily: 'bold',
    textAlign: 'center',
    color: colors.onPrimary,
    fontSize: 25
  }
})

export default CustomerInputScreen
