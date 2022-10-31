import { Alert } from 'react-native'

export default function Alerts(title, message, onDone, onCancel, done) {
  return Alert.alert(title, message, [
    {
      text: 'Cancel',
      onPress: onCancel || null,
      style: 'cancel'
    },
    {
      text: done || 'Ok',
      onPress: onDone || null,
      style: 'default'
    }
  ])
}
