import { StyleSheet, Text, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'

export default function Signup() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sign up</Text>
      <Ionicons name='md-checkmark-circle' size={32} color='green' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 40,
    color: 'indigo',
    fontWeight: 'bold'
  }
})
