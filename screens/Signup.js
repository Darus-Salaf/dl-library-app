import {
  ImageBackground,
  Keyboard,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from 'react-native'
import bg from '../assets/images/bg.jpg'
import Ionicons from '@expo/vector-icons/Ionicons'
import { MaterialIcons } from '@expo/vector-icons'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import colors from '../static/colors'
import CInput from '../components/customs/CInput'
import { Button, Divider, Modal, Portal } from 'react-native-paper'
import { useState } from 'react'
import flex from '../styles/flex'

export default function Signup({ navigation }) {
  const [visible, setVisible] = useState(false)
  const [marginBottom, setMarginBottom] = useState(0)
  const [library, setLibrary] = useState(null)

  const openMenu = () => setVisible(true)
  const closeMenu = () => setVisible(false)

  const onFocus = () => setMarginBottom(30)
  const onBlur = () => setMarginBottom(0)

  const handleLibrary = item => {
    setLibrary(item)
    closeMenu()
  }

  return (
    <ImageBackground blurRadius={3} source={bg} style={styles.container}>
      <StatusBar
        backgroundColor={colors.primary.light}
        barStyle='light-content'
      />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ marginBottom: hp(marginBottom) }}>
            <CInput
              onFocus={onFocus}
              onBlur={onBlur}
              placeholder='your name'
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
              placeholder='your email'
              icon={
                <Ionicons name='mail' size={25} color={colors.primary.light} />
              }
            />
            <CInput
              onFocus={onFocus}
              onBlur={onBlur}
              placeholder='phone no.'
              icon={
                <Ionicons
                  name='phone-portrait'
                  size={25}
                  color={colors.primary.light}
                />
              }
            />
            <CInput
              onFocus={onFocus}
              onBlur={onBlur}
              placeholder='alternative phone no.'
              icon={
                <Ionicons
                  name='phone-portrait'
                  size={25}
                  color={colors.primary.light}
                />
              }
            />
            <CInput
              onFocus={onFocus}
              onBlur={onBlur}
              placeholder='address'
              icon={
                <Ionicons
                  name='location'
                  size={25}
                  color={colors.primary.light}
                />
              }
            />

            <TouchableOpacity style={styles.dropdown} onPress={openMenu}>
              <Ionicons name='library' size={18} color={colors.primary.light} />
              <View style={{ ...flex.rowSpaceBetween, width: wp(75) }}>
                <Text style={styles.dropdownBtn}>
                  {library ?? 'select library'}
                </Text>
                <MaterialIcons
                  name='arrow-drop-down-circle'
                  size={20}
                  color='white'
                />
              </View>
            </TouchableOpacity>
            <Portal>
              <Modal
                contentContainerStyle={styles.modal}
                visible={visible}
                onDismiss={closeMenu}
              >
                <View>
                  <Text style={styles.modalHeader}>
                    Select your nearest Library
                  </Text>
                </View>
                <View style={styles.line} />
                <ScrollView style={{ height: hp(30) }}>
                  {[
                    'item 1 library',
                    'item 2 library',
                    'item 3 library',
                    'item 4 library',
                    'item 5 library',
                    'item 6 library',
                    'item 7 library',
                    'item 8 library',
                    'item 9 library',
                    'item 10 library'
                  ].map(item => (
                    <View key={item}>
                      <TouchableOpacity
                        onPress={() => handleLibrary(item)}
                        activeOpacity={0.5}
                        style={flex.rowFlexStart}
                      >
                        <Ionicons
                          name='library'
                          size={18}
                          color={colors.primary.light}
                        />
                        <Text style={styles.library}>{item}</Text>
                      </TouchableOpacity>
                      <Divider />
                    </View>
                  ))}
                </ScrollView>
              </Modal>
            </Portal>
            <CInput
              onFocus={onFocus}
              onBlur={onBlur}
              placeholder='username'
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
              placeholder='password'
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
              style={{ marginVertical: hp(2) }}
              loading={false}
              icon='account-arrow-right'
              mode='contained'
              uppercase
              buttonColor={colors.primary.light}
            >
              sign up
            </Button>
            <Button
              uppercase
              style={{ marginBottom: hp(2) }}
              onPress={() => navigation.navigate('Login')}
              loading={false}
              icon='account-arrow-right'
              mode='contained'
              textColor={colors.primary.light}
              buttonColor={'white'}
            >
              have account? sign in
            </Button>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: wp(10)
  },
  text: {
    fontSize: 40,
    color: 'indigo',
    fontWeight: 'bold'
  },
  modal: {
    marginHorizontal: wp(10),
    backgroundColor: 'white',
    padding: wp(5),
    borderRadius: 15
  },
  modalHeader: {
    fontWeight: 'bold',
    fontSize: wp(5),
    color: colors.primary.light
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    marginTop: 4,
    marginBottom: 10
  },
  dropdown: {
    ...flex.rowFlexStart,
    marginTop: hp(4),
    marginBottom: hp(-2.5),
    paddingBottom: hp(2),
    borderRadius: 5,
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1
  },
  dropdownBtn: {
    fontWeight: '500',
    marginLeft: 10,
    color: 'white'
  },
  library: {
    marginVertical: 10
  }
})
