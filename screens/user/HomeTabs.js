import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import { Ionicons } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Borrow from './Borrow'
import UserBooks from './UserBooks'
import colors from '../../static/colors'
import UserProfile from './UserProfile'
const Tab = createBottomTabNavigator()

export default function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerStyle: {
          backgroundColor: 'orangered',
          height: wp(10)
        },
        headerTitleStyle: {
          color: 'white',
          textAlign: 'center',
          fontSize: wp(7)
        },
        headerTitleContainerStyle: { width: wp(100) },
        tabBarStyle: {
          backgroundColor: colors.primary.light,
          height: hp(6)
        },
        tabBarLabelStyle: {
          fontSize: wp(4),
          fontWeight: '500',
          marginTop: hp(-1)
        },
        tabBarIcon: ({ focused, color, size }) => {
          let icon

          if (route.name === 'Books') {
            icon = focused ? (
              <Ionicons name='library' size={size} color={color} />
            ) : (
              <Ionicons name='library-outline' size={size} color={color} />
            )
          } else if (route.name === 'Profile') {
            icon = focused ? (
              <MaterialCommunityIcons
                name='account-cog'
                size={size + 2}
                color={color}
              />
            ) : (
              <MaterialCommunityIcons
                name='account-cog-outline'
                size={size + 2}
                color={color}
              />
            )
          } else if (route.name === 'Borrow') {
            icon = focused ? (
              <MaterialCommunityIcons
                name='book-clock'
                size={size}
                color={color}
              />
            ) : (
              <MaterialCommunityIcons
                name='book-clock-outline'
                size={size}
                color={color}
              />
            )
          }
          return icon
        },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: colors.primary.gray
      })}
    >
      <Tab.Screen name='Books' component={UserBooks} />
      <Tab.Screen name='Borrow' component={Borrow} />
      <Tab.Screen name='Profile' component={UserProfile} />
    </Tab.Navigator>
  )
}
