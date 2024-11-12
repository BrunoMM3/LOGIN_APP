import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function LoginForm({changeForm}) {
  return (
    <View>
      <Text>LoginForm</Text>
      <Button title='Iniciar Sesión'/>
      <Button title='Registrate' onPress={changeForm} />
    </View>
  )
}

const styles = StyleSheet.create({})