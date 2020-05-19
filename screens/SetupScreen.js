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

function SetupScreen (props) {
  //// STATE

  const [view, setView] = useState('CustomerInput')

  //// CONSTRUCTOR

  useEffect(() => {}, [])

  //// FUNCTIONS

  //// RENDER

  return (
    <View style={styles.screen}>
      <View style={styles.headerContainer}>
        <Text style={styles.welcomeText}>Welcome to</Text>
        <Image
          source={require('../assets/buzzr_logo.png')}
          style={styles.logo}
        />
      </View>
      <View style={styles.viewSelectContainer}>
        <Text style={styles.viewSelectText}>Please select your view:</Text>
        <Picker
          selectedValue={view}
          style={styles.picker}
          itemStyle={styles.viewSelectText}
          onValueChange={itemValue => setView(itemValue)}
        >
          <Picker.Item label='Customer' value='CustomerInput' />
          <Picker.Item label='Worker' value='Waitlist' />
        </Picker>
      </View>
      <TouchableOpacity
        style={styles.startButton}
        onPress={() => props.navigation.replace(view)}
      >
        <Text style={styles.startButtonText}>Start</Text>
      </TouchableOpacity>
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
  headerContainer: {
    justifyContent: 'center',
    marginVertical: 50
  },
  welcomeText: {
    fontFamily: 'bold',
    textAlign: 'center',
    color: colors.onPrimary,
    fontSize: 40
  },
  logo: {
    height: 120,
    resizeMode: 'contain'
  },
  viewSelectContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 50
  },
  viewSelectText: {
    fontFamily: 'bold',
    textAlign: 'center',
    color: colors.onPrimary,
    fontSize: 25
  },
  picker: {
    height: 50,
    width: 300,
    backgroundColor: colors.background,
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 35
  },
  startButton: {
    width: 300,
    height: 65,
    backgroundColor: colors.secondary,
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },
  startButtonText: {
    fontFamily: 'bold',
    textAlign: 'center',
    color: colors.onSecondary,
    fontSize: 25
  }
})

export default SetupScreen
