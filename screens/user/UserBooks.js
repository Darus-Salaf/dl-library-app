import React, { useState } from 'react'
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native'
import useGet from '../../hooks/useGet'
import bookServices from '../../services/bookServices'
import { Skeleton, Stack } from 'native-base'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'

import book from '../../assets/images/book.png'
import colors from '../../static/colors'

export default function UserBooks({ navigation }) {
  const [refresh, setRefresh] = useState(false)
  const {
    data: books,
    isLoading,
    isError
  } = useGet(bookServices.getBooks, '/get-books', null, refresh)

  const Item = ({ name, author }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('BooksDetails', { name })}
      activeOpacity={0.7}
      style={styles.item}
    >
      <Stack direction='row' space={4}>
        <Image source={book} style={styles.image} />
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.author}> - {author}</Text>
        </View>
      </Stack>
    </TouchableOpacity>
  )
  const renderItem = ({ item }) => (
    <Item name={item.name} author={item.author} />
  )

  return (
    <SafeAreaView style={styles.container}>
      {isLoading && (
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.skeletonView}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => (
            <Skeleton
              h={20}
              startColor='indigo.600'
              endColor='gray.300'
              style={styles.skeleton}
              key={item}
            />
          ))}
        </ScrollView>
      )}

      <FlatList
        data={books}
        style={styles.container}
        renderItem={renderItem}
        refreshing={false}
        onRefresh={() => setRefresh(!refresh)}
        keyExtractor={(item, i) => i}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp(2)
  },
  nodata: {
    marginTop: 200
  },

  item: {
    backgroundColor: colors.indigo,
    paddingHorizontal: wp(2),
    paddingVertical: wp(1),
    borderRadius: 5,
    marginVertical: hp(0.7)
  },
  skeletonView: {
    paddingHorizontal: wp(2)
  },
  skeleton: {
    borderRadius: 5,
    marginVertical: hp(0.7)
  },
  name: {
    paddingVertical: hp(1),
    color: 'white',
    fontSize: 20
  },
  author: {
    color: 'white'
  },
  image: {
    height: hp(10),
    width: wp(10)
  }
})
