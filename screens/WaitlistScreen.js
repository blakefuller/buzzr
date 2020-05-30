import React, { useEffect, useState } from 'react'
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  RefreshControl,
  TextInput,
  KeyboardAvoidingView,
  Alert
} from 'react-native'
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
import CreateCustomer from '../database/CreateCustomer'
import EditCustomer from '../database/EditCustomer'
import HostNotify from '../database/HostNotify'

function WaitlistScreen (props) {
  //// STATE

  // holds the waitlist (an array of objects)
  const [waitlist, setWaitlist] = useState([])

  // holds the wait times (an object)
  const [waitTimes, setWaitTimes] = useState({})

  // keeps track of it we're refreshing for the flatlist refresh
  const [isRefreshing, setIsRefreshing] = useState(false)

  // keeps track of if we have network connection
  const [isConnected, setIsConnected] = useState(true)

  // keeps track of the currently selected sort option
  const [currentSort, setCurrentSort] = useState('')

  // modal states
  const [modalCustomer, setModalCustomer] = useState({})
  const [showWaitTimeModal, setShowWaitTimeModal] = useState(false)
  const [showOptionsModal, setShowOptionsModal] = useState(false)
  const [showSortModal, setShowSortModal] = useState(false)

  //// CONSTRUCTOR

  useEffect(() => {
    props.navigation.setOptions(setNavOptions())

    // get the current waitlist
    getWaitlist()

    // get the current wait times
    getWaitTimes()

    // listener for displaying feedback if the device loses internet connection
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected)
    })

    // run checkHostNotify every 10
    setInterval(() => {checkHostNotify()}, 10000)

  }, [])

  //// FUNCTIONS

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
          button1OnPress={() => props.navigation.navigate('Log')}
          button2Name='sort'
          button2OnPress={() => setShowSortModal(true)}
        />
      )
    }
  }

  // checks the DB for a change in the host notify field
  function checkHostNotify() {
    GetCustomer('wait_times').then(data => {
      var notify = data.Items[0].host_notify_alert
      if(notify) {
        Alert.alert(
          'A customer needs help at the Buzzr kiosk!',
          [{ text: 'OK', onPress: () => {HostNotify(0)} }]
        )
      }
    })
  }

  // gets the waitlist by calling sortWaitlist with the default parameter
  function getWaitlist () {
    setIsRefreshing(true)
    sortWaitlist('')
    setIsRefreshing(false)
  }

  // gets the waitlist using the external GetWaitlist function and then
  // sort it based on the param
  function sortWaitlist (sort) {
    GetWaitlist().then(waitlist => {
      switch (sort) {
        case 'size':
          setWaitlist(
            waitlist.Items.sort((a, b) => {
              return a.checkin_time - b.checkin_time
            }).sort((a, b) => {
              return a.party_size - b.party_size
            })
          )
          setCurrentSort('size')
          break
        case 'size-reverse':
          setWaitlist(
            waitlist.Items.sort((a, b) => {
              return a.checkin_time - b.checkin_time
            }).sort((a, b) => {
              return b.party_size - a.party_size
            })
          )
          setCurrentSort('size-reverse')
          break
        case 'reverse':
          setWaitlist(
            waitlist.Items.sort((a, b) => {
              return b.checkin_time - a.checkin_time
            })
          )
          setCurrentSort('reverse')
          break
        case 'alphabetical-reverse':
          setWaitlist(
            waitlist.Items.sort((a, b) => {
              return b.name.localeCompare(a.name)
            })
          )
          setCurrentSort('alphabetical-reverse')

          break
        case 'alphabetical':
          setWaitlist(
            waitlist.Items.sort((a, b) => {
              return a.name.localeCompare(b.name)
            })
          )
          setCurrentSort('alphabetical')
          break
        default:
          setWaitlist(
            waitlist.Items.sort((a, b) => {
              return a.checkin_time - b.checkin_time
            })
          )
          setCurrentSort('')
          break
      }
      setIsRefreshing(false)
    })
  }

  // get the wait times from the db using the external GetCustomer function
  function getWaitTimes () {
    GetCustomer('wait_times').then(waitTimes => {
      setWaitTimes(waitTimes.Items[0])
    })
  }

  // call the external DeleteCustomer function and then refresh
  function deleteCustomer () {
    //  delete customer using modalCustomer object
    DeleteCustomer(modalCustomer.customerID)
    setShowOptionsModal(false)
    getWaitlist()
  }

  // update the wait times in the db by calling the external EditWaitTimes function
  // and passing in the party size to change, and what the change in minutes is
  function editWaitTimes (partySize, change) {
    var localWaitTimes = waitTimes
    localWaitTimes[partySize] = waitTimes[partySize] + change
    EditWaitTimes(localWaitTimes).then(() => getWaitTimes())
  }

  //// RENDER

  // renders a customer item
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

  // renders an error message if we don't have internet
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
          <View>
            <Text style={styles.headerText}>Size</Text>
          </View>
        </View>
        <View
          style={[
            styles.headerButton,
            { flex: 3, justifyContent: 'flex-start' }
          ]}
        >
          <View>
            <Text style={styles.headerText}>Name</Text>
          </View>
        </View>
        <View style={[styles.headerButton, { flex: 2 }]}>
          <View>
            <Text style={styles.headerText}>Waiting</Text>
          </View>
        </View>
        <View style={[styles.headerButton, { flex: 2 }]}>
          <View>
            <Text style={styles.headerText}>Notified</Text>
          </View>
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
              onRefresh={() => sortWaitlist(currentSort)}
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

      {/* MODALS */}
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
            sortWaitlist('')
            setShowSortModal(false)
          }}
          isActive={currentSort === ''}
        />
        <View
          style={{ width: '100%', height: 2, backgroundColor: '#00000010' }}
        />
        <ModalButton
          title='Time waited (low - high)'
          onPress={() => {
            sortWaitlist('reverse')
            setShowSortModal(false)
          }}
          isActive={currentSort === 'reverse'}
        />
        <View
          style={{ width: '100%', height: 2, backgroundColor: '#00000010' }}
        />
        <ModalButton
          title='Party size (smallest first)'
          onPress={() => {
            sortWaitlist('size')
            setShowSortModal(false)
          }}
          isActive={currentSort === 'size'}
        />
        <View
          style={{ width: '100%', height: 2, backgroundColor: '#00000010' }}
        />
        <ModalButton
          title='Party size (biggest first)'
          onPress={() => {
            sortWaitlist('size-reverse')
            setShowSortModal(false)
          }}
          isActive={currentSort === 'size-reverse'}
        />
        <View
          style={{ width: '100%', height: 2, backgroundColor: '#00000010' }}
        />
        <ModalButton
          title='Name (A-Z)'
          onPress={() => {
            sortWaitlist('alphabetical')
            setShowSortModal(false)
          }}
          isActive={currentSort === 'alphabetical'}
        />
        <View
          style={{ width: '100%', height: 2, backgroundColor: '#00000010' }}
        />
        <ModalButton
          title='Name (Z-A)'
          onPress={() => {
            sortWaitlist('alphabetical-reverse')
            setShowSortModal(false)
          }}
          isActive={currentSort === 'alphabetical-reverse'}
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
  },
  nameInputContainer: {
    width: '100%',
    borderRadius: 10,
    borderColor: colors.onBackground + '80',
    borderWidth: 1.5,
    padding: 13,
    fontSize: 18
  },
  labelText: {
    fontFamily: 'regular',
    fontSize: 18,
    textAlign: 'left',
    marginBottom: 5,
    color: colors.onBackground
  }
})

export default WaitlistScreen
