import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text, FlatList, RefreshControl } from 'react-native'
import { colors } from '../constants'
import { TouchableOpacity } from 'react-native-gesture-handler'
import GetWaitlist from '../database/GetWaitlist'
import GetCustomer from '../database/GetCustomer'
import EditWaitTimes from '../database/EditWaittimes'
import DeleteCustomer from '../database/DeleteCustomer'
import CustomerItem from '../components/CustomerItem'
import WaitTimeItem from '../components/WaitTimeItem'
import HeaderButtons from '../components/HeaderButtons'
import BuzzrModal from '../components/BuzzrModal'
import ModalButton from '../components/ModalButton'
import NetInfo from '@react-native-community/netinfo'

function WaitlistScreen (props) {
  //// STATE

  const [waitlist, setWaitlist] = useState([])
  const [waitTimes, setWaitTimes] = useState({})
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [isConnected, setIsConnected] = useState(true)

  // modal states
  const [modalCustomer, setModalCustomer] = useState({})
  const [showWaitTimeModal, setShowWaitTimeModal] = useState(false)
  const [showOptionsModal, setShowOptionsModal] = useState(false)
  const [showSortModal, setShowSortModal] = useState(false)
  //// CONSTRUCTOR

  useEffect(() => {
    props.navigation.setOptions(setNavOptions())
    getWaitlist()
    getWaitTimes()
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected)
    })
  }, [])

  //// FUNCTIONS

  function getWaitlist () {
    setIsRefreshing(true)
    sortWaitTimes('')
    setIsRefreshing(false)
  }

  function getWaitTimes () {
    GetCustomer('wait_times').then(waitTimes => {
      setWaitTimes(waitTimes.Items[0])
    })
  }

  function sortWaitTimes (sort) {
    GetWaitlist().then(waitlist => {
      // console.log(waitlist.Items)
      switch (sort) {
        case 'size':
          setWaitlist(
            waitlist.Items.sort((a, b) => {
              return a.checkin_time - b.checkin_time
            }).sort((a, b) => {
              return a.party_size - b.party_size
            })
          )
          break
        case 'size-reverse':
          setWaitlist(
            waitlist.Items.sort((a, b) => {
              return a.checkin_time - b.checkin_time
            }).sort((a, b) => {
              return b.party_size - a.party_size
            })
          )
          break
        case 'reverse':
          setWaitlist(
            waitlist.Items.sort((a, b) => {
              return b.checkin_time - a.checkin_time
            })
          )
          break
        case 'alphabetical':
          setWaitlist(
            waitlist.Items.sort((a, b) => {
              return b.name.localeCompare(a.name)
            })
          )
          break
        case 'alphabetical-reverse':
          setWaitlist(
            waitlist.Items.sort((a, b) => {
              return a.name.localeCompare(b.name)
            })
          )
          break
        default:
          setWaitlist(
            waitlist.Items.sort((a, b) => {
              return a.checkin_time - b.checkin_time
            })
          )
          break
      }

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
          button2OnPress={() => setShowSortModal(true)}
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

  function editWaitTimes (partySize, change) {
    var localWaitTimes = waitTimes
    localWaitTimes[partySize] = waitTimes[partySize] + change
    EditWaitTimes(localWaitTimes).then(() => getWaitTimes())
  }

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

  var networkIndicator = isConnected ? null : (
    <View style={styles.networkIndicator}>
      <Text style={[styles.headerText, { textAlign: 'center' }]}>
        No internet connection
      </Text>
    </View>
  )

  return (
    <View style={styles.screen}>
      {networkIndicator}
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
            { flex: 3, justifyContent: 'flex-start' }
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
          ListEmptyComponent={
            <View style={{ margin: 10 }}>
              <Text
                style={{
                  fontFamily: 'regular',
                  fontSize: 12,
                  color: colors.onBackground + '70'
                }}
              >
                No customers on the waitlist! Take a breather :)
              </Text>
            </View>
          }
        />
      </View>
      <BuzzrModal
        isVisible={showWaitTimeModal}
        hideModal={() => setShowWaitTimeModal(false)}
        closeText='Close'
      >
        <Text style={styles.sortByText}>Set wait times:</Text>
        <View
          style={{ width: '100%', height: 2, backgroundColor: '#00000010' }}
        />
        <WaitTimeItem
          editWaitTimes={(partySize, change) =>
            editWaitTimes(partySize, change)
          }
          waitTimes={waitTimes}
          partySize='1'
        />
        <View
          style={{ width: '100%', height: 2, backgroundColor: '#00000010' }}
        />
        <WaitTimeItem
          editWaitTimes={(partySize, change) =>
            editWaitTimes(partySize, change)
          }
          waitTimes={waitTimes}
          partySize='2'
        />
        <View
          style={{ width: '100%', height: 2, backgroundColor: '#00000010' }}
        />

        <WaitTimeItem
          editWaitTimes={(partySize, change) =>
            editWaitTimes(partySize, change)
          }
          waitTimes={waitTimes}
          partySize='4'
        />
        <View
          style={{ width: '100%', height: 2, backgroundColor: '#00000010' }}
        />

        <WaitTimeItem
          editWaitTimes={(partySize, change) =>
            editWaitTimes(partySize, change)
          }
          waitTimes={waitTimes}
          partySize='6'
        />
        <View
          style={{ width: '100%', height: 2, backgroundColor: '#00000010' }}
        />

        <WaitTimeItem
          editWaitTimes={(partySize, change) =>
            editWaitTimes(partySize, change)
          }
          waitTimes={waitTimes}
          partySize='8+'
        />
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
        <View
          style={{ width: '100%', height: 2, backgroundColor: '#00000010' }}
        />
        <ModalButton title='Delete Customer' onPress={() => deleteCustomer()} />
      </BuzzrModal>
      <BuzzrModal
        isVisible={showSortModal}
        hideModal={() => setShowSortModal(false)}
        closeText='Close'
      >
        <Text style={styles.sortByText}>Sort by:</Text>
        <View
          style={{ width: '100%', height: 2, backgroundColor: '#00000010' }}
        />
        <ModalButton
          title='Time waited (high - low)'
          onPress={() => {
            sortWaitTimes('')
            setShowSortModal(false)
          }}
        />
        <View
          style={{ width: '100%', height: 2, backgroundColor: '#00000010' }}
        />
        <ModalButton
          title='Time waited (low - high)'
          onPress={() => {
            sortWaitTimes('reverse')
            setShowSortModal(false)
          }}
        />
        <View
          style={{ width: '100%', height: 2, backgroundColor: '#00000010' }}
        />
        <ModalButton
          title='Party size (smallest)'
          onPress={() => {
            sortWaitTimes('size')
            setShowSortModal(false)
          }}
        />
        <View
          style={{ width: '100%', height: 2, backgroundColor: '#00000010' }}
        />
        <ModalButton
          title='Party size (biggest)'
          onPress={() => {
            sortWaitTimes('size-reverse')
            setShowSortModal(false)
          }}
        />
        <View
          style={{ width: '100%', height: 2, backgroundColor: '#00000010' }}
        />
        <ModalButton
          title='Name (A-Z)'
          onPress={() => {
            sortWaitTimes('alphabetical')
            setShowSortModal(false)
          }}
        />
        <View
          style={{ width: '100%', height: 2, backgroundColor: '#00000010' }}
        />
        <ModalButton
          title='Name (Z-A)'
          onPress={() => {
            sortWaitTimes('alphabetical-reverse')
            setShowSortModal(false)
          }}
        />
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
    height: 30,
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
    fontFamily: 'semi-bold',
    fontSize: 14
  },
  sortByText: {
    fontFamily: 'italic',
    fontSize: 18,
    color: '#00000080',
    textAlign: 'center',
    margin: 10
  },
  networkIndicator: {
    height: 30,
    backgroundColor: colors.error,
    width: '100%',
    alignItems: 'center'
  }
})

export default WaitlistScreen
