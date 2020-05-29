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
      <TouchableOpacity>
        <View>
          <Text style={styles.timestamp}>
            {props.timestamp}
          </Text>
        </View>
        <View>
          <Text style={styles.logText}>
            {props.message}
          </Text>
        </View>
      </TouchableOpacity>
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

  },
  timestamp: {

  }
})

export default LogItem
