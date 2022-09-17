import { TouchableOpacity, Text } from 'react-native'
import Login from '../screens/Login'
import { AntDesign } from '@expo/vector-icons'
import Signup from '../screens/Signup'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen'

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01
  }
}

const navigations = [
  {
    id: Math.ceil(Math.random() * 100),
    component: Login,
    name: 'Login',
    type: 'Stack',
    options: {
      headerMode: 'float',
      headerShown: false
    }
  },
  {
    id: Math.ceil(Math.random() * 100),
    component: Signup,
    name: 'Signup',
    type: 'Stack',
    options: {
      headerMode: 'float',
      title: 'Sign up',
      headerLeft: props => (
        <TouchableOpacity {...props}>
          <AntDesign name='arrowleft' size={24} color='black' />
          <Text style={{ fontSize: wp(5) }} color={'white'}>
            Back s
          </Text>
        </TouchableOpacity>
      ),
      headerRight: props => (
        <TouchableOpacity {...props}>
          <AntDesign name='pluscircle' size={24} color='black' />
        </TouchableOpacity>
      )
    }
  }
]

export default navigations
