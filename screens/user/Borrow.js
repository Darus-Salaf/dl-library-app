import { StyleSheet, Text, View } from 'react-native'

export default function Borrow() {
  return (
    <View style={styles.container}>
      <Text>Borrow</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
