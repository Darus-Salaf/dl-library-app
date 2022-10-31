import { createStackNavigator } from '@react-navigation/stack'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen'
import { SafeAreaView } from 'react-native-safe-area-context'
import { authNavigations, protectNavigations } from '../static/navigationData'
import { useAppContext } from './context'

const StackNavigation = () => {
  const Stack = createStackNavigator()
  const [isAuth] = useAppContext()

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
        {isAuth
          ? protectNavigations.map(item => (
              <Stack.Screen key={item.id} {...item} />
            ))
          : authNavigations.map(item => (
              <Stack.Screen key={item.id} {...item} />
            ))}
      </Stack.Navigator>
    </SafeAreaView>
  )
}

export default StackNavigation

const screenOption = {
  headerStyle: {
    backgroundColor: 'orangered',
    height: wp(12)
  },
  headerTitleStyle: {
    color: 'white',
    textAlign: 'left',
    fontSize: wp(7)
  },
  headerTitleContainerStyle: { width: wp(100) }
}
