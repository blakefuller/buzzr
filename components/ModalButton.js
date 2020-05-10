import React from 'react'
import { TouchableOpacity, StyleSheet, Text } from 'react-native'
import { scaleMultiplier } from '../constants'
import { connect } from 'react-redux'

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
      <Text
        style={[
          styles.text,
          props.style,
          { fontFamily: props.font + '-regular' }
        ]}
      >
        {props.title}
      </Text>
    </TouchableOpacity>
  )
}

//// STYLES

const styles = StyleSheet.create({
  modalButtonStyle: {
    width: '100%',
    height: 70 * scaleMultiplier,
    justifyContent: 'center',
    borderBottomColor: '#dedede'
  },
  text: {
    textAlign: 'center',
    fontSize: 19.5 * scaleMultiplier
  }
})

function mapStateToProps (state) {
  var activeGroup = state.groups.filter(
    item => item.name === state.activeGroup
  )[0]
  return {
    font: state.database[activeGroup.language].font
  }
}

export default connect(mapStateToProps)(ModalButton)
