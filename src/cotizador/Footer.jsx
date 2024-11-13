import { StyleSheet,Button, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../utils/colors'

export default function Footer({calcular,logOut}) {
  return (
    <View style={styles.viewFooter}>
      <TouchableOpacity 
      style={styles.button}
      onPress={calcular} >
        <Text style={styles.text} >Calcular</Text>
      </TouchableOpacity>
      <TouchableOpacity 
      style={styles.button}
      onPress={logOut} >
        <Text style={styles.text} >Cerrar Sesión</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    viewFooter:{
        backgroundColor:'#4e2ecf',
        borderRadius:30,
        position:'absolute',
        alignItems:'center',
        justifyContent:'center',
        bottom:0,
        width:'100%',
        height:80,
        flexDirection:'row'
    },
    text:{
        fontWeight:'bold',
        fontSize:20,
        color:'#6fcf97',
        textAlign:'center'        
    },
    button:{
        backgroundColor:'#1d1d42',
        width:'40%',
        padding:15,
        margin:5,
        borderRadius:20,
    }
})