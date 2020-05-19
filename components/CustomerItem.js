import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { colors } from '../constants'
import { TouchableOpacity } from 'react-native-gesture-handler'
import EditCustomer from '../database/EditCustomer'

function CustomerItem (props) {
  //// STATE

  const [notifyPressed, setNotifyPressed] = useState(false)

  //// CONSTRUCTOR

  useEffect(() => {}, [])

  //// FUNCTIONS

  async function notifyCustomer () {
    // BLAKE: add notifiedtime variable to db
    var customer = {
      customerID: props.id,
      notified_time: Date.now()
    }

    // call function to create new customer and store status, then navigate to feedback screen
    await EditCustomer(customer).then(status => {
      props.refresh()
    })
  }

  function showCustomerModal () {
    props.setModalCustomer()
    props.showOptionsModal()
  }

  //// RENDER

  var notifiedComponent = props.notifiedTime ? (
    <View>
      <Text style={[styles.customerFieldText, { fontSize: 16 }]}>
        {Math.round((Date.now() - props.notifiedTime) / 60000)}min
      </Text>
    </View>
  ) : (
    <TouchableOpacity
      onPress={
        notifyPressed ? () => notifyCustomer() : () => setNotifyPressed(true)
      }
    >
      <Text
        style={[
          styles.customerFieldText,
          {
            color: colors.primaryDark,
            fontSize: notifyPressed ? 14 : 16,
            textAlign: 'center'
          }
        ]}
      >
        {notifyPressed ? 'Tap to confirm' : 'NOTIFY'}
      </Text>
    </TouchableOpacity>
  )

  return (
    <TouchableOpacity
      style={styles.customerItemContainer}
      onPress={() => showCustomerModal()}
    >
      <View
        style={[
          styles.customerFieldContainer,
          { flex: 1, justifyContent: 'center' }
        ]}
      >
        <Text style={[styles.customerFieldText, { fontFamily: 'italic' }]}>
          {props.partySize}
        </Text>
      </View>
      <View
        style={[
          styles.customerFieldContainer,
          { flex: 3, justifyContent: 'flex-start' }
        ]}
      >
        <Text style={styles.customerFieldText}>{props.name}</Text>
      </View>
      <View style={[styles.customerFieldContainer, { flex: 2 }]}>
        <Text style={[styles.customerFieldText, { fontSize: 16 }]}>
          {props.checkinTime}min
        </Text>
      </View>
      <View style={[styles.customerFieldContainer, { flex: 2 }]}>
        {notifiedComponent}
      </View>
    </TouchableOpacity>
  )
}

//// STYLES

const styles = StyleSheet.create({
  customerItemContainer: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  customerFieldContainer: {
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  customerFieldText: {
    fontFamily: 'light',
    fontSize: 16
  },
  notifyButton: {
    flex: 1
  }
})

export default CustomerItem
