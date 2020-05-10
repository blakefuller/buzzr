import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text, FlatList, RefreshControl } from 'react-native'
import { colors, scaleMultiplier } from '../constants'
import { TouchableOpacity } from 'react-native-gesture-handler'
import GetWaitlist from '../database/GetWaitlist'
import CustomerItem from '../components/CustomerItem'
import HeaderButtons from '../components/HeaderButtons'

function WaitlistScreen (props) {
  //// STATE

  const [waitlist, setWaitlist] = useState([])
  const [isRefreshing, setIsRefreshing] = useState(false)

  //// CONSTRUCTOR

  useEffect(() => {
    props.navigation.setOptions(setNavOptions())
    getWaitlist()
  }, [])

  //// FUNCTIONS

  function getWaitlist () {
    setIsRefreshing(true)
    GetWaitlist().then(waitlist => {
      setWaitlist(waitlist.Items)
      setIsRefreshing(false)
    })
  }

  function setNavOptions () {
    return {
      headerRight: () => (
        <HeaderButtons
          button1Name='timer'
          button1OnPress={() => {}}
          button2Name='plus'
          button2OnPress={() => {}}
        />
      ),
      headerLeft: () => (
        <HeaderButtons
          button1Name='file-document-outline'
          button1OnPress={() => {}}
          button2Name='sort'
          button2OnPress={() => {}}
        />
      )
    }
  }

  //// RENDER

  function renderCustomer (customerList) {
    return (
      <CustomerItem
        name={customerList.item.name}
        checkinTime={Math.round(
          (Date.now() - customerList.item.checkin_time) / 60000
        )}
        partySize={customerList.item.party_size}
        notifiedTime={customerList.item.notified_time}
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
        <View
          style={[
            styles.headerButton,
            { flex: 5, justifyContent: 'flex-start' }
          ]}
        >
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
          refreshControl={
            <RefreshControl
              colors={['#9Bd35A', '#689F38']}
              refreshing={isRefreshing}
              onRefresh={() => getWaitlist()}
            />
          }
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
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerText: {
    fontFamily: 'regular',
    fontSize: 14 * scaleMultiplier
  }
})

export default WaitlistScreen
