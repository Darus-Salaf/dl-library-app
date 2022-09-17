import { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import flex from '../../styles/flex'
import colors from '../../static/colors'

export default function CInput({
  label,
  onChange,
  icon,
  placeholder,
  placeholderTextColor = 'lightgray',
  cursorColor,
  keyboardType,
  multiline,
  numberOfLines,
  onChangeText,
  password,
  selectionColor,
  color = 'white',
  border = 'lightgray',
  onFocus,
  onBlur,
  editable
}) {
  const [borderStyle, setBorderStyle] = useState({
    color: border,
    width: 1
  })
  const focusHandler = () => {
    onFocus && onFocus()
    setBorderStyle({ color: colors.primary.light, width: 3 })
  }
  const blurHandler = () => {
    onBlur && onBlur()
    setBorderStyle({ color: border, width: 1 })
  }
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View
        style={[
          flex.rowFlexStart,
          styles.holder,
          {
            borderBottomColor: borderStyle.color,
            borderBottomWidth: borderStyle.width
          }
        ]}
      >
        {icon}
        <TextInput
          editable={editable}
          onFocus={focusHandler}
          onBlur={blurHandler}
          selectionColor={selectionColor || colors.primary.light}
          multiline={multiline}
          secureTextEntry={password}
          onChange={onChange}
          onChangeText={onChangeText}
          numberOfLines={numberOfLines}
          keyboardType={keyboardType || 'default'}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          style={[styles.input, { color }]}
          clearButtonMode='while-editing'
          cursorColor={cursorColor || 'white'}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10
  },
  label: {
    fontWeight: '500',
    color: 'white',
    fontSize: wp(5)
  },
  holder: {
    borderRadius: 5
  },
  input: {
    fontSize: wp(4),
    padding: 10,
    width: '100%'
  }
})
