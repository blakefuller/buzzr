import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Modal from 'react-native-modal'
import {} from '../constants'

// component for a modal
function BuzzrModal (props) {
  //// RENDER
  return (
    <Modal
      isVisible={props.isVisible}
      hasBackdrop={true}
      onBackdropPress={props.hideModal}
      backdropOpacity={0.3}
      style={{ justifyContent: 'flex-end' }}
    >
      <View>
        <View style={styles.buttonsContainer}>{props.children}</View>
        <View style={styles.closeButtonContainer}>
          <TouchableOpacity
            onPress={props.hideModal}
            style={styles.closeButtonContainer}
          >
            <Text
              style={{
                textAlign: 'center',
                fontFamily: 'semi-bold',
                fontSize: 20,
                color: '#FF0800'
              }}
            >
              {props.closeText}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}

//// STYLES

const styles = StyleSheet.create({
  buttonsContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10
  },
  closeButtonContainer: {
    width: '100%',
    height: 70,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginVertical: 5
  }
})

export default BuzzrModal
