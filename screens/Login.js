import Ionicons from '@expo/vector-icons/Ionicons'
import {
  ImageBackground,
  TouchableWithoutFeedback,
  StatusBar,
  Keyboard
} from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../static/colors'
import bg from '../assets/images/bg.jpg'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import * as NavigationBar from 'expo-navigation-bar'

import { useEffect, useState } from 'react'
import { Button } from 'react-native-paper'
import CInput from '../components/customs/CInput'

export default function Login({ navigation }) {
  const [height, setHeight] = useState({ height: 35, top: 15 })
  useEffect(() => {
    NavigationBar.setBackgroundColorAsync('orangered')
    NavigationBar.setButtonStyleAsync('light')
  }, [])
  const onFocus = () => setHeight({ height: 20, top: 8 })
  const onBlur = () => setHeight({ height: 35, top: 15 })

  return (
    <ImageBackground source={bg} style={styles.container}>
      <StatusBar
        backgroundColor={colors.primary.light}
        barStyle='light-content'
      />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <View>
            <Text
              style={[
                styles.text,
                { height: hp(height.height), top: hp(height.top) }
              ]}
            >
              DI Library
            </Text>
          </View>
          <ImageBackground
            blurRadius={2}
            source={bg}
            style={styles.imageContainer}
          >
            <CInput
              onFocus={onFocus}
              onBlur={onBlur}
              placeholder='enter user name'
              icon={
                <Ionicons
                  name='person'
                  size={25}
                  color={colors.primary.light}
                />
              }
            />
            <CInput
              onFocus={onFocus}
              onBlur={onBlur}
              placeholder='enter password'
              password
              icon={
                <Ionicons
                  name='lock-closed'
                  size={25}
                  color={colors.primary.light}
                />
              }
            />
            <Button
              onPress={() => alert('on press')}
              style={{ marginTop: hp(2) }}
              loading={false}
              icon='account-arrow-right'
              mode='contained'
              buttonColor={colors.primary.light}
            >
              ENTER
            </Button>
            <View style={styles.or}>
              <View style={styles.line}></View>
              <Text style={styles.textOr}>OR</Text>
              <View style={styles.line}></View>
            </View>
            <Button
              onPress={() => navigation.navigate('Signup')}
              loading={false}
              icon='account-arrow-right'
              mode='contained'
              textColor={colors.primary.light}
              buttonColor={'white'}
            >
              SIGN UP
            </Button>
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imageContainer: {
    height: hp(65),
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    overflow: 'hidden',
    padding: wp(10)
  },
  text: {
    fontSize: wp(15),
    marginLeft: wp(5),
    color: 'indigo',
    fontWeight: 'bold',
    position: 'relative',
    color: 'white',
    textAlign: 'center'
  },
  or: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: hp(2)
  },
  line: {
    borderBottomWidth: 2,
    width: wp(30),
    borderColor: 'white'
  },
  textOr: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: wp(6),
    paddingHorizontal: wp(4)
  }
})
