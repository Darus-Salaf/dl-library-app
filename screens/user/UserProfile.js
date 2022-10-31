import { StyleSheet, Text, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../../static/colors'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import { Button, Center, FormControl, Heading, Input, Modal } from 'native-base'
import { useState } from 'react'
import { removeData } from '../../lib/async-storage'
import { useAppContext } from '../../utils/context'

export default function UserProfile() {
  const [showModal, setShowModal] = useState(false)
  const [isAuth, setIsAuth] = useAppContext()
  return (
    <View>
      <View style={styles.avatar}>
        <MaterialCommunityIcons
          name='account-circle'
          size={120}
          color={colors.primary.light}
        />
      </View>
      <View style={styles.main}>
        <View style={styles.name}>
          <Heading color='gray.700' size='2xl'>
            Rabius Sunny
          </Heading>
        </View>
        <View>
          <Text style={styles.address}>Habib Nagar, College Road, Rangpur</Text>
        </View>
        <View>
          <Button
            onPress={() => {
              removeData('token')
              console.log('removed token')
            }}
          >
            Sign out
          </Button>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  avatar: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: hp(4)
  },
  main: {
    paddingHorizontal: wp(10)
  },
  name: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: hp(1)
  },
  address: {
    textAlign: 'center'
  }
})
