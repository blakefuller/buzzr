import React from 'react'
import { TouchableOpacity, StyleSheet, Text } from 'react-native'
import {} from '../constants'

function ModalButton (props) {
  //// RETURN

  return (
    <TouchableOpacity style={styles.modalButtonStyle} onPress={props.onPress}>
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
    height: 70,
    justifyContent: 'center'
  },
  text: {
    textAlign: 'center',
    fontSize: 20
  }
})

export default ModalButton
