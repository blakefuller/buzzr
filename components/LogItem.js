import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text, Dimensions } from 'react-native'
import { colors } from '../constants'
import { TouchableOpacity } from 'react-native-gesture-handler'
import EditCustomer from '../database/EditCustomer'

// component for a customer 'entry' on the waitlist screen
function LogItem (props) {
  //// STATE

  //// RENDER
  console.log(props.title)

  return (
    <View style={styles.logItemContainer}>
      <Text style={styles.logText}>{props.title}</Text>
    </View>
  )
}

//// STYLES

const styles = StyleSheet.create({
  logItemContainer: {
    height: 50,
    width: Dimensions.get('window').width,
    flexDirection: 'row'
  },
  logText: {

  }
})

export default LogItem
