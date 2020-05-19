import React from 'react'
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import { colors } from '../constants'
import { MaterialCommunityIcons } from '@expo/vector-icons'

function WaitTimeItem (props) {
  //// RETURN

  return (
    <View style={styles.waitTimeContainer}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Text style={styles.waitTimeText}>{props.partySize}</Text>
        <Text style={styles.personsText}>{'  persons'}</Text>
      </View>
      <View style={styles.waitTimeButtons}>
        <TouchableOpacity
          onPress={() => props.editWaitTimes(props.partySize, -5)}
          style={styles.button}
        >
          <MaterialCommunityIcons
            name='minus-circle'
            size={45}
            color={colors.onBackground}
          />
        </TouchableOpacity>
        <Text style={styles.minutesText}>
          {props.waitTimes[props.partySize]}min
        </Text>
        <TouchableOpacity
          onPress={() => props.editWaitTimes(props.partySize, 5)}
          style={styles.button}
        >
          <MaterialCommunityIcons
            name='plus-circle'
            size={45}
            color={colors.onBackground}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

//// STYLES

const styles = StyleSheet.create({
  waitTimeContainer: {
    width: '100%',
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  waitTimeText: {
    fontFamily: 'semi-bold',
    fontSize: 24,
    textAlign: 'center'
  },
  waitTimeButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-around'
  },
  personsText: {
    fontFamily: 'italic',
    color: '#00000080'
  },
  minutesText: {
    fontFamily: 'light',
    fontSize: 18,
    flex: 1,
    textAlign: 'center'
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default WaitTimeItem
