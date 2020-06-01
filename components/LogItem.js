import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text, Dimensions } from 'react-native'
import { colors } from '../constants'
import { TouchableOpacity } from 'react-native-gesture-handler'
import EditCustomer from '../database/EditCustomer'

// component for a customer 'entry' on the waitlist screen
function LogItem (props) {
  //// STATE

  //// RENDER
  return (
    <View style={styles.logItemContainer}>
      <View>
        <Text style={styles.timestamp}>{props.timestamp}</Text>
      </View>
      <View>
        <Text style={styles.logText}>{props.message}</Text>
      </View>
    </View>
  )
}

//// STYLES

const styles = StyleSheet.create({
  logItemContainer: {
    height: 65,
    width: Dimensions.get('window').width,
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 5
  },
  logText: {
    fontFamily: 'regular',
    fontSize: 14
  },
  timestamp: {
    fontFamily: 'italic',
    fontSize: 12,
    color: '#00000080'
  }
})

export default LogItem
