import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { StatusBar } from 'react-native'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen'
import { SafeAreaView } from 'react-native-safe-area-context'
import navigations from '../static/navigationData'

const StackNavigation = () => {
  const Stack = createStackNavigator()

  return (
    <SafeAreaView
      style={[
        {
          backgroundColor: 'white',
          height: hp(100)
        }
      ]}
    >
      <Stack.Navigator screenOptions={screenOption} initialRouteName={'Login'}>
        {navigations.map(item => (
          <Stack.Screen key={item.id} {...item} />
        ))}
      </Stack.Navigator>
    </SafeAreaView>
  )
}

export default StackNavigation

const screenOption = {
  headerStyle: {
    backgroundColor: 'red',
    height: wp(15.5)
  },
  headerTitleStyle: {
    color: 'indigo',
    textAlign: 'center',
    fontSize: wp(4.7)
  },
  headerTitleContainerStyle: { width: wp(50) }
}
