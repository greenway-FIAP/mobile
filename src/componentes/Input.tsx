import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const Input = ({...props}) => {
  return (
    <TextInput style={styles.input}
        {...props}
    ></TextInput>
  )
}

export default Input

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderColor: '#666',
    marginBottom: 16,
  },
})