import React, { useEffect } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { colors, scaleMultiplier } from '../constants'
import { TouchableOpacity } from 'react-native-gesture-handler'

function CustomerItem (props) {
  //// STATE

  //// CONSTRUCTOR

  useEffect(() => {}, [])

  //// FUNCTIONS

  //// RENDER

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
      <View style={[styles.customerFieldContainer, { flex: 5 }]}>
        <Text style={styles.customerFieldText}>{props.name}</Text>
      </View>
      <View style={[styles.customerFieldContainer, { flex: 2 }]}>
        <Text style={styles.customerFieldText}>{props.checkinTime}</Text>
      </View>
      <View style={[styles.customerFieldContainer, { flex: 2 }]}>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.customerFieldText}></Text>
        </TouchableOpacity>
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
    alignItems: 'center'
  },
  customerFieldText: {
    fontFamily: 'light',
    fontSize: 14 * scaleMultiplier
  }
})

export default CustomerItem
