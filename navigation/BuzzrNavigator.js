import React from 'react';
import SetupScreen from '../screens/SetupScreen'
import CustomerInputScreen from '../screens/CustomerInputScreen'
import WaitlistScreen from '../screens/WaitlistScreen'
import AfterSubmitScreen from '../screens/AfterSubmitScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function BuzzrNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Setup"
          component={SetupScreen}
        />
        <Stack.Screen
          name="CustomerInput"
          component={CustomerInputScreen}
        />
        <Stack.Screen
          name="Waitlist"
          component={WaitlistScreen}
        />
        <Stack.Screen
          name="AfterSubmit"
          component={AfterSubmitScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default BuzzrNavigator