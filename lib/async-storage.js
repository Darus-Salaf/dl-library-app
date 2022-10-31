import AsyncStorage from '@react-native-async-storage/async-storage'
import Alerts from './Alerts'

export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value)
  } catch (e) {
    return Alerts(
      'Error on storing data',
      'There is an error while storing data on storange. Please try again'
    )
  }
}
export const storeObjectData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value)
  } catch (e) {
    return Alerts(
      'Error on storing data',
      'There is an error while storing data on storange. Please try again'
    )
  }
}

export const getData = async key => {
  let data
  try {
    const value = await AsyncStorage.getItem(key)
    data = value
  } catch (e) {
    return Alerts(
      'Error on storing data',
      'There is an error while storing data on storange. Please try again'
    )
  }
  return data
}
export const removeData = async key => {
  try {
    await AsyncStorage.removeItem(key)
  } catch (e) {
    return Alerts(
      'Error on removing data',
      'There is an error while removing data from storange. Please try again'
    )
  }
}

export const getObjectData = async key => {
  try {
    const jsonValue = await AsyncStorage.getItem(key)
    return jsonValue != null ? JSON.parse(jsonValue) : null
  } catch (e) {
    return Alerts(
      'Error on storing data',
      'There is an error while storing data on storange. Please try again'
    )
  }
}
