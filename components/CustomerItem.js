import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text, Dimensions } from 'react-native'
import { colors } from '../constants'
import { TouchableOpacity } from 'react-native-gesture-handler'
import EditCustomer from '../database/EditCustomer'

// component for a customer 'entry' on the waitlist screen
function CustomerItem (props) {
  //// STATE

  // keeps track of if the user has tapped the notify button once to switch it
  // to 'tap to confirm'
  const [notifyPressed, setNotifyPressed] = useState(false)

  //// FUNCTIONS

  // sends the customer info over to the EditCustomer function that updates the
  // 'notify' variable in AWS which sends the customer a text message whenever
  // the user taps twice on 'notify'
  async function notifyCustomer () {
    var customer = {
      customerID: props.id,
      notified_time: Date.now()
    }

    // send over our customer info and refresh once we've finished
    await EditCustomer(customer).then(status => {
      props.refresh()
    })
  }

  // function to show the customer edit modal
  function showCustomerModal () {
    // allows us to use this customer's info in waitlist screen
    props.setModalCustomer()

    props.showOptionsModal()
  }

  //// RENDER

  // render the notify component conditionally because it can be in 3 states:
  // 1. the customer hasn't been notified, so 'NOTIFY' should be shown
  // 2. the customer hasn't been notified but 'NOTIFY' has been tapped,
  //    so 'tap to confirm' should be shown
  // 3. the customer has been notified, so show the minutes since that happened
  var notifiedComponent = props.notifiedTime ? (
    <View>
      <Text style={[styles.customerFieldText, { fontSize: 16 }]}>
        {Math.round((Date.now() - props.notifiedTime) / 60000)}min
      </Text>
    </View>
  ) : (
    <TouchableOpacity
      onPress={
        notifyPressed
          ? () => notifyCustomer()
          : () => {
              setNotifyPressed(true)
              setTimeout(() => setNotifyPressed(false), 3000)
            }
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
    <View style={styles.customerItemContainer}>
      <View style={{ flex: 3 }}>
        <TouchableOpacity
          style={{
            height: '100%',
            flexDirection: 'row'
          }}
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
        </TouchableOpacity>
      </View>
      <View style={[styles.customerFieldContainer, { flex: 1 }]}>
        {notifiedComponent}
      </View>
    </View>
  )
}

//// STYLES

const styles = StyleSheet.create({
  customerItemContainer: {
    height: 50,
    width: Dimensions.get('window').width,
    flexDirection: 'row'
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
