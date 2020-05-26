import React, { useEffect, useState } from 'react'
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Picker,
  Dimensions,
  FlatList
} from 'react-native'
import { colors } from '../constants'

function LogScreen (props) {
  //// STATE
  const [logList, setLogList] = useState([])

  useEffect(() => {
    // call function to get the log list

    // set the log list using setLogList() with whatever you get back from db call
  }, [])

  // keeps track of the current state of the view picker

  function renderLogItem(logList) {
    return 
    <LogItem title={logList.item.title}/>
  }

  //// RENDER

  return (
    <View style={styles.screen}>
      <FlatList 
        data={logList}
        renderItem={renderLogItem}
        keyExtractor={item => item.title}
      />
    </View>
  )
}

//// STYLES

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
})

export default LogScreen
