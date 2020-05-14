import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text, FlatList, RefreshControl } from 'react-native'
import { colors, scaleMultiplier } from '../constants'
import { TouchableOpacity } from 'react-native-gesture-handler'
import GetWaitlist from '../database/GetWaitlist'
import GetCustomer from '../database/GetCustomer'
import DeleteCustomer from '../database/DeleteCustomer'
import CustomerItem from '../components/CustomerItem'
import HeaderButtons from '../components/HeaderButtons'
import BuzzrModal from '../components/BuzzrModal'
import ModalButton from '../components/ModalButton'

function WaitlistScreen (props) {
  //// STATE

  const [waitlist, setWaitlist] = useState([])
  const [waitTimes, setWaitTimes] = useState({})
  const [isRefreshing, setIsRefreshing] = useState(false)

  // modal states
  const [modalCustomer, setModalCustomer] = useState({})
  const [showWaitTimeModal, setShowWaitTimeModal] = useState(false)
  const [showOptionsModal, setShowOptionsModal] = useState(false)

  //// CONSTRUCTOR

  useEffect(() => {
    props.navigation.setOptions(setNavOptions())
    getWaitlist()
    GetCustomer('wait_times').then(waitTimes => {
      setWaitTimes(waitTimes.Items[0])
    })
  }, [])

  //// FUNCTIONS

  function getWaitlist () {
    setIsRefreshing(true)
    GetWaitlist().then(waitlist => {
      // console.log(waitlist.Items)
      setWaitlist(waitlist.Items)
      setIsRefreshing(false)
    })
  }

  function setNavOptions () {
    return {
      headerRight: () => (
        <HeaderButtons
          button1Name='timer'
          button1OnPress={() => setShowWaitTimeModal(true)}
          button2Name='plus'
          button2OnPress={() => props.navigation.navigate('CustomerInput')}
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

  function deleteCustomer () {
    // BLAKE: delete customer using modalCustomer object
    DeleteCustomer(modalCustomer.customerID)
    setShowOptionsModal(false)
    getWaitlist()
  }

  function editWaitTimes () {}

  //// RENDER

  function renderCustomer (customerList) {
    return (
      <CustomerItem
        id={customerList.item.customerID}
        name={customerList.item.name}
        checkinTime={Math.round(
          (Date.now() - customerList.item.checkin_time) / 60000
        )}
        partySize={customerList.item.party_size}
        notifiedTime={customerList.item.notified_time}
        showOptionsModal={() => setShowOptionsModal(true)}
        setModalCustomer={() => setModalCustomer(customerList.item)}
        refresh={() => getWaitlist()}
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
              refreshing={isRefreshing}
              onRefresh={() => getWaitlist()}
            />
          }
        />
      </View>
      <BuzzrModal
        isVisible={showWaitTimeModal}
        hideModal={() => setShowWaitTimeModal(false)}
        closeText='Close'
      >
        <Text>Waittime stuff goes here</Text>
      </BuzzrModal>
      <BuzzrModal
        isVisible={showOptionsModal}
        hideModal={() => setShowOptionsModal(false)}
        closeText='Close'
      >
        <ModalButton
          title='Edit Customer'
          onPress={() => {
            setShowOptionsModal(false)
            props.navigation.navigate('EditCustomer', {
              customer: modalCustomer
            })
          }}
        />
        <ModalButton title='Delete Customer' onPress={() => deleteCustomer()} />
      </BuzzrModal>
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
