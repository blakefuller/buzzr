import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text, FlatList } from 'react-native'
import { colors, scaleMultiplier } from '../constants'
import { TouchableOpacity } from 'react-native-gesture-handler'
import GetWaitlist from '../database/GetWaitlist'
import CustomerItem from '../components/CustomerItem'
function WaitlistScreen (props) {
  //// STATE

  const [waitlist, setWaitlist] = useState([])

  //// CONSTRUCTOR

  useEffect(() => {
    GetWaitlist().then(waitlist => {
      setWaitlist(waitlist.Items)
    })
  }, [])

  //// FUNCTIONS

  //// RENDER

  function renderCustomer (customerList) {
    return (
      <CustomerItem
        name={customerList.item.name}
        checkinTime={customerList.item.checkin_time}
        partySize={customerList.item.party_size}
      />
    )
  }

  return (
    <View style={styles.screen}>
      <View style={styles.headerBar}>
        <View
          style={[styles.headerButton, { flex: 1, justifyContent: 'center' }]}
        >
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.headerText}>Size</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.headerButton, { flex: 5 }]}>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.headerText}>Name</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.headerButton, { flex: 2 }]}>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.headerText}>Waiting</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.headerButton, { flex: 2 }]}>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.headerText}>Notified</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <FlatList
          data={waitlist}
          renderItem={renderCustomer}
          keyExtractor={item => item.customerID}
        />
      </View>
    </View>
  )
}

//// STYLES

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  headerBar: {
    backgroundColor: colors.primaryLight,
    height: 30 * scaleMultiplier,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  headerButton: {
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center'
  },
  headerText: {
    fontFamily: 'regular',
    fontSize: 14 * scaleMultiplier
  }
})

export default WaitlistScreen
