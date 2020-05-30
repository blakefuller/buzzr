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
import GetCustomer from '../database/GetCustomer'
import LogItem from '../components/LogItem'

function LogScreen (props) {
  //// STATE
  const [logList, setLogList] = useState([])

  useEffect(() => {
    // get all logs in 'logs' item in db
    getLogs()
  }, [])

  // keeps track of the current state of the view picker

  function renderLogItem (logList) {
    return (
      <LogItem
        timestamp={logList.item.timestamp}
        message={logList.item.message}
      />
    )
  }

  function getLogs () {
    GetCustomer('logs').then(logs => {
      setLogList(logs.Items[0].logs)
    })
  }

  //// RENDER

  return (
    <View style={styles.screen}>
      <View style={{ flex: 1 }}>
        <FlatList
          data={logList}
          renderItem={renderLogItem}
          keyExtractor={item => item.timestamp}
          ItemSeparatorComponent={() => (
            <View
              style={{ width: '100%', height: 1, backgroundColor: '#00000020' }}
            />
          )}
        />
      </View>
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
