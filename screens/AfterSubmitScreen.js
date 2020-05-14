import React, { useEffect, useState } from 'react'
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Picker
} from 'react-native'
import { colors, scaleMultiplier } from '../constants'
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
        switch (roundedPartySize) {
          case 3:
            roundedPartySize = 4
            break
          case 5:
            roundedPartySize = 4
            break
          default:
            roundedPartySize = 8
            break
        }
        setWaitTime(waitTimes.Items[0][props.route.params.partySize])
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
      <View style={styles.headerArea}>
        <TouchableOpacity
          style={styles.backButtonContainer}
          onPress={() => props.navigation.goBack()}
        >
          <Ionicons
            name='ios-arrow-back'
            size={20 * scaleMultiplier}
            color={colors.onSecondary}
          />
          <Text style={styles.backButtonText}>Return to waitlist form</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.mainSection}>
        <Ionicons
          name={
            props.route.params.wasSuccessful
              ? 'ios-checkmark-circle-outline'
              : 'ios-close-circle-outline'
          }
          size={100 * scaleMultiplier}
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
  headerArea: {
    height: 100 * scaleMultiplier,
    alignItems: 'flex-start',
    width: '100%'
  },
  backButtonContainer: {
    backgroundColor: colors.secondary,
    borderRadius: 10,
    marginTop: 40,
    marginLeft: 20,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center'
  },
  backButtonText: {
    fontFamily: 'bold',
    color: colors.onSecondary,
    fontSize: 24,
    marginLeft: 10
  },
  mainSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  statusHeaderText: {
    fontFamily: 'bold',
    fontSize: 32 * scaleMultiplier,
    color: colors.onPrimary,
    marginTop: -30,
    marginBottom: 15
  },
  statusBodyText: {
    fontFamily: 'regular',
    fontSize: 20 * scaleMultiplier,
    color: colors.onPrimary,
    textAlign: 'center'
  },
  waitTimeContianer: {
    width: '80%',
    backgroundColor: colors.background,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
    marginTop: 30 * scaleMultiplier
  },
  waitTimeText: {
    fontFamily: 'bold',
    fontSize: 30,
    textAlign: 'center',
    color: colors.onBackground
  }
})

export default SetupScreen
