import React from 'react'
import { TouchableOpacity, StyleSheet, Text } from 'react-native'
import { scaleMultiplier } from '../constants'

function ModalButton (props) {
  //// RETURN

  return (
    <TouchableOpacity
      style={[
        styles.modalButtonStyle,
        { borderBottomWidth: props.isLast ? 0 : 1 }
      ]}
      onPress={props.onPress}
    >
      <Text style={[styles.text, props.style, { fontFamily: 'regular' }]}>
        {props.title}
      </Text>
    </TouchableOpacity>
  )
}

//// STYLES

const styles = StyleSheet.create({
  modalButtonStyle: {
    width: '100%',
    height: 50 * scaleMultiplier,
    justifyContent: 'center',
    borderBottomColor: '#dedede'
  },
  text: {
    textAlign: 'center',
    fontSize: 16 * scaleMultiplier
  }
})

export default ModalButton
