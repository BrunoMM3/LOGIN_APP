import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

export default function AddBirthday() {
  return (
    <>
        <View>
            <TextInput placeholder = 'Nombre' placeholderTextColor='#969696' />
        </View>
        <View>
            <TextInput placeholder = 'Apellidos' placeholderTextColor='#969696' />
        </View>
    </>
  )
}

const styles = StyleSheet.create({})