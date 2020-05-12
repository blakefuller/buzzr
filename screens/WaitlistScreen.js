import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';

function WaitlistScreen(props) {

  //// STATE

  //// CONSTRUCTOR

  useEffect(() => {

  }, [])

  //// FUNCTIONS

  //// RENDER

  return (
    <View style={styles.screen}>
      <Text>Waitlist Screen</Text>
    </View>
  )
}

//// STYLES

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
})

export default WaitlistScreen;