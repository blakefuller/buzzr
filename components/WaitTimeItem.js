import React from 'react'
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import { scaleMultiplier } from '../constants'
import { MaterialCommunityIcons } from '@expo/vector-icons'

function WaitTimeItem (props) {
  //// RETURN

  return (
    <View style={styles.waitTimeContainer}>
      <View style={{ flex: 1 }}>
        <Text style={styles.waitTimeText}>{props.partySize}</Text>
      </View>
      <View style={styles.waitTimeButtons}>
        <TouchableOpacity
          onPress={() => props.editWaitTimes(props.partySize, -5)}
        >
          <MaterialCommunityIcons name='minus' size={30 * scaleMultiplier} />
        </TouchableOpacity>
        <Text style={styles.waitTimeText}>
          {props.waitTimes[props.partySize]}
        </Text>
        <TouchableOpacity
          onPress={() => props.editWaitTimes(props.partySize, 5)}
        >
          <MaterialCommunityIcons name='plus' size={30 * scaleMultiplier} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

//// STYLES

const styles = StyleSheet.create({
  waitTimeContainer: {
    width: '100%',
    height: 50 * scaleMultiplier,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  waitTimeText: {
    fontFamily: 'regular',
    fontSize: 24 * scaleMultiplier,
    textAlign: 'center'
  },
  waitTimeButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-around'
  }
})

export default WaitTimeItem
