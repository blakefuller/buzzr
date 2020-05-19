import React from 'react'
import SetupScreen from '../screens/SetupScreen'
import CustomerInputScreen from '../screens/CustomerInputScreen'
import WaitlistScreen from '../screens/WaitlistScreen'
import AfterSubmitScreen from '../screens/AfterSubmitScreen'
import EditCustomerScreen from '../screens/EditCustomerScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { colors } from '../constants'

const Stack = createStackNavigator()

function BuzzrNavigator () {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Setup' component={SetupScreen} />
        <Stack.Screen
          name='CustomerInput'
          component={CustomerInputScreen}
          options={{
            headerShown: true,
            headerTitle: 'Add to Waitlist',
            headerStyle: {
              backgroundColor: colors.primary
            },
            headerTitleStyle: {
              fontFamily: 'bold'
            }
          }}
        />
        <Stack.Screen
          name='Waitlist'
          component={WaitlistScreen}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: colors.primary
            },
            headerTitleStyle: {
              fontFamily: 'bold'
            }
          }}
        />
        <Stack.Screen
          name='AfterSubmit'
          component={AfterSubmitScreen}
          options={{
            headerShown: true,
            headerTitle: '',
            headerStyle: {
              backgroundColor: colors.primary
            }
          }}
        />
        <Stack.Screen
          name='EditCustomer'
          component={EditCustomerScreen}
          options={{
            headerShown: true,
            headerTitle: 'Edit Customer',
            headerStyle: {
              backgroundColor: colors.primary
            },
            headerTitleStyle: {
              fontFamily: 'bold'
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default BuzzrNavigator
