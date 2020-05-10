import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { colors, scaleMultiplier } from '../constants'
import { TouchableOpacity } from 'react-native-gesture-handler'

function CustomerItem (props) {
  //// STATE

  const [notifyPressed, setNotifyPressed] = useState(false)

  //// CONSTRUCTOR

  useEffect(() => {}, [])

  //// FUNCTIONS

  function notifyCustomer () {
    // add notifiedtime variable to db

    setNotifyPressed(false)
  }

  //// RENDER

  var notifiedComponent = props.notifiedTime ? (
    <View>
      <Text>{Date.now() - props.notifiedTime}</Text>
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
            fontSize: notifyPressed
              ? 10 * scaleMultiplier
              : 14 * scaleMultiplier
          }
        ]}
      >
        {notifyPressed ? 'Tap to confirm' : 'NOTIFY'}
      </Text>
    </TouchableOpacity>
  )

  return (
    <View style={styles.customerItemContainer}>
      <View
        style={[
          styles.customerFieldContainer,
          { flex: 1, justifyContent: 'center' }
        ]}
      >
        <Text style={styles.customerFieldText}>{props.partySize}</Text>
      </View>
      <View
        style={[
          styles.customerFieldContainer,
          { flex: 5, justifyContent: 'flex-start' }
        ]}
      >
        <Text style={styles.customerFieldText}>{props.name}</Text>
      </View>
      <View style={[styles.customerFieldContainer, { flex: 2 }]}>
        <Text style={styles.customerFieldText}>{props.checkinTime}min</Text>
      </View>
      <View style={[styles.customerFieldContainer, { flex: 2 }]}>
        {notifiedComponent}
      </View>
    </View>
  )
}

//// STYLES

const styles = StyleSheet.create({
  customerItemContainer: {
    height: 30 * scaleMultiplier,
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
    fontSize: 14 * scaleMultiplier
  },
  notifyButton: {
    flex: 1
  }
})

export default CustomerItem
