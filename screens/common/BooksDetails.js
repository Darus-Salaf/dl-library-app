import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { Heading, Button } from 'native-base'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import colors from '../../static/colors'

import book from '../../assets/images/book.png'

export default function BooksDetails({ route }) {
  const { name } = route.params
  return (
    <ScrollView style={styles.container}>
      <View style={styles.bookImage}>
        <Image source={book} style={styles.image} />
      </View>
      <View style={styles.info}>
        <Heading size='md' style={styles.name}>
          {name}
        </Heading>
        <View style={{ marginTop: hp(1) }}>
          <Text style={styles.details}>লেখক/অনুবাদক</Text>
          <Text style={styles.detail}>Book Writer</Text>
          <Text style={styles.details}>সম্পাদক</Text>
          <Text style={styles.detail}>Book Editor</Text>
          <Text style={styles.details}>প্রকাশনী</Text>
          <Text style={styles.detail}>Book Publisher</Text>
        </View>
      </View>
      <View style={styles.borrow}>
        <Button colorScheme='indigo'>Request this book</Button>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: wp(8)
  },
  bookImage: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: hp(2)
  },
  image: {
    height: hp(28),
    width: wp(28)
  },
  info: {
    padding: wp(4),
    borderWidth: 2,
    borderRadius: 8,
    borderColor: colors.primary.light
  },
  name: {
    textAlign: 'center',
    color: colors.indigo,
    paddingVertical: hp(1)
  },
  details: {
    fontSize: wp(4.5),
    paddingVertical: hp(0.6),
    marginVertical: hp(0.5),
    borderBottomColor: colors.primary.gray,
    borderBottomWidth: 1
  },
  detail: {
    fontSize: wp(4),
    color: colors.indigo
  },
  borrow: {
    marginTop: hp(3)
  }
})
