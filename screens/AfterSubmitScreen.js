import React, { useEffect, useState } from 'react'
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Picker
} from 'react-native'
import { colors } from '../constants'
import { Ionicons } from '@expo/vector-icons'
import GetCustomer from '../database/GetCustomer'
function SetupScreen (props) {
  //// STATE

  const [waitTime, setWaitTime] = useState(15)

  //// CONSTRUCTOR

  useEffect(() => {
    if (props.route.params.wasSuccessful)
      GetCustomer('wait_times').then(waitTimes => {
        var roundedPartySize = props.route.params.partySize
        if (roundedPartySize === 3) roundedPartySize = '4'
        else if (roundedPartySize === 5) roundedPartySize = '6'
        else if (roundedPartySize === 7) roundedPartySize = '8+'
        else if (roundedPartySize > 8) roundedPartySize = '8+'
        setWaitTime(waitTimes.Items[0][roundedPartySize])
      })
  }, [])

  //// FUNCTIONS

  //// RENDER

  var waitTimeComponent = props.route.params.wasSuccessful ? (
    <View style={styles.waitTimeContianer}>
      <Text style={styles.waitTimeText}>
        Your estimated wait time is {waitTime} minutes.
      </Text>
    </View>
  ) : null

  return (
    <View style={styles.screen}>
      <Ionicons
        name={
          props.route.params.wasSuccessful
            ? 'ios-checkmark-circle-outline'
            : 'ios-close-circle-outline'
        }
        size={100}
        color={colors.onPrimary}
      />
      <Text style={styles.statusHeaderText}>
        {props.route.params.wasSuccessful ? 'Success!' : 'Error'}
      </Text>
      <Text style={styles.statusBodyText}>
        {props.route.params.wasSuccessful
          ? 'You should receive a confirmation text message shortly.'
          : 'Please contact a host.'}
      </Text>
      {waitTimeComponent}
    </View>
  )
}

//// STYLES

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary
  },
  statusHeaderText: {
    fontFamily: 'bold',
    fontSize: 36,
    color: colors.onPrimary,
    marginTop: -10,
    marginBottom: 15
  },
  statusBodyText: {
    fontFamily: 'regular',
    fontSize: 24,
    color: colors.onPrimary,
    textAlign: 'center',
    padding: 10
  },
  waitTimeContianer: {
    width: '80%',
    backgroundColor: colors.background,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
    marginTop: 30
  },
  waitTimeText: {
    fontFamily: 'bold',
    fontSize: 28,
    textAlign: 'center',
    color: colors.onBackground
  }
})

export default SetupScreen
