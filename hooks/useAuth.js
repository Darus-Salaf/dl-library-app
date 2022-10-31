import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect } from 'react'
import { useState } from 'react'
import Alerts from '../lib/Alerts'

export default function useAuth() {
  const [token, setToken] = useState(null)
  useEffect(() => {
    getToken()
  }, [])

  const getToken = async () => {
    try {
      const value = await AsyncStorage.getItem('token')
      setToken(value)
    } catch (e) {
      return Alerts(
        'Error on Authentication',
        'There is an error while Authenticating, please try again'
      )
    }
  }

  const auth = token ? true : false

  return auth
}
