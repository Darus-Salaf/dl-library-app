import { Ionicons } from '@expo/vector-icons'
import Login from '../screens/auth/Login'
import Signup from '../screens/auth/Signup'
import Table from '../screens/Table'
import HomeTabs from '../screens/user/HomeTabs'
import BooksDetails from '../screens/common/BooksDetails'

export const authNavigations = [
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
  }
]
export const protectNavigations = [
  {
    id: 1,
    component: HomeTabs,
    name: 'UserHome',
    type: 'Stack',
    options: {
      headerShown: false,
      headerLeft: null
    }
  },
  {
    id: 2,
    component: BooksDetails,
    name: 'BooksDetails',
    type: 'Stack',
    options: {}
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
