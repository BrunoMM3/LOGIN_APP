import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function RegisterForm({changeForm}) {

  const [formData, setFormData] = useState({
    email:'',
    password:'',
    repeatPassword:''
  })

const register = () => {

  if (!formData.email || !formData.password || !formData.repeatPassword) {
    console.log('Algun campo esta vacio')
    
  }else{
    console.log(formData)
  }
  
  
}

  return (
    <>
      <Text>RegisterForm</Text>
       <TextInput
       style={styles.input}
       placeholder='Correo electrónico'
       placeholderTextColor='#969696'
       onChange={e=>setFormData({...formData, email:e.nativeEvent.text})}
       />
       <TextInput
       style={styles.input}
       textContentType='password'
       placeholderTextColor='#969696'
       secureTextEntry
       onChange={e=>setFormData({...formData, password:e.nativeEvent.text})}
       />
       <TextInput
       style={styles.input}
       textContentType='repetir password'
       placeholderTextColor='#969696'
       secureTextEntry
       onChange={e=>setFormData({...formData, repeatPassword:e.nativeEvent.text})}
       />

        <View style={styles.register} >
          <TouchableOpacity onPress={changeForm}>
              <Text style={styles.btnText}>
              Registrate
              </Text>
          </TouchableOpacity>
        </View>
      

      <Button title='Iniciar sesión' onPress={register}/>
    </>
  )
}

const styles = StyleSheet.create({
    btnText:{
        color:'black',
        fontSize:20,
        marginBottom:10,
        backgroundColor:'aqua',
        borderRadius:25,
        textAlign:'center'
    },
    input:{
        height:50,
        color:'white',
        width:150,
        backgroundColor:'#1e3040',
        fontSize:18,
        borderWidth:1,
        borderRadius:15,
        paddingHorizontal:20
    },
    register:{
      flex:1,

    }
})