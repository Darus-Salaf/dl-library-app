import { TouchableOpacity, Text } from 'react-native'
import Login from '../screens/Login'
import { AntDesign } from '@expo/vector-icons'
import Signup from '../screens/Signup'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen'
import Table from '../screens/Table'

const navigations = [
  {
    id: 1,
    component: Login,
    name: 'Login',
    type: 'Stack',
    options: {
      headerShown: false
    }
  },
  {
    id: 2,
    component: Signup,
    name: 'Signup',
    type: 'Stack',
    options: {
      headerShown: false
    }
  },
  {
    id: 3,
    component: Table,
    name: 'Table',
    type: 'Stack',
    options: {
      headerShown: false
    }
  }
]

export default navigations
