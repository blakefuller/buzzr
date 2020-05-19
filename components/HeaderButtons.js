import React from 'react'
import { View, TouchableOpacity, StyleSheet, Platform } from 'react-native'
import { colors } from '../constants'
import { MaterialCommunityIcons } from '@expo/vector-icons'

function HeaderButtons (props) {
  //// RENDER

  return (
    <View style={styles.headerButtonsContainer}>
      <TouchableOpacity onPress={props.button1OnPress}>
        <MaterialCommunityIcons
          name={props.button1Name}
          size={32}
          color={colors.onPrimary}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{ marginHorizontal: 5 }}
        onPress={props.button2OnPress}
      >
        <MaterialCommunityIcons
          name={props.button2Name}
          size={32}
          color={colors.onPrimary}
        />
      </TouchableOpacity>
    </View>
  )
}

//// STYLES

const styles = StyleSheet.create({
  headerButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginHorizontal: 5
  }
})

export default HeaderButtons
