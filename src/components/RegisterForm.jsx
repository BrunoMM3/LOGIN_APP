import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { validateEmail } from '../utils/validations'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from '../../src/utils/firebase';


export default function RegisterForm({changeForm}) {

  const [formData, setFormData] = useState({
    email:'',
    password:'',
    repeatPassword:''
  })

  const [formErrors, setFormErrors] = useState({})

const register = () => {
  let errors ={}
  if (!formData.email || !formData.password || !formData.repeatPassword) {

    if(!formData.email) errors.email = true
    if(!formData.password) errors.password = true
    if(!formData.repeatPassword) errors.repeatPassword = true

    setFormErrors(errors)
    
    
  }else if(!validateEmail(formData.email)){
    errors.email = true
  }else if(formData.password !== formData.repeatPassword){
    errors.password = true
    errors.repeatPassword = true
  }else if(formData.password.length <6 || formData.repeatPassword.length<6){
    errors.password = true
    errors.repeatPassword = true

  }else{

    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, formData.email, formData.password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(error.message)
    // ..
  });
  
  
  }
  
  
}

  return (
    <>
      
       <TextInput
       style={[styles.input,formErrors.email && styles.error]}
       placeholder='Correo electrónico'
       placeholderTextColor='#969696'
       onChange={e=>setFormData({...formData, email:e.nativeEvent.text})}
       />
       <TextInput
       style={[styles.input,formErrors.password && styles.error]}
       textContentType='password'
       placeholder='Contraseña'
       placeholderTextColor='#969696'
       secureTextEntry
       onChange={e=>setFormData({...formData, password:e.nativeEvent.text})}
       />
       <TextInput
       style={[styles.input,formErrors.repeatPassword && styles.error]}
       textContentType='repetir password'
       placeholder='Repetir Contraseña'
       placeholderTextColor='#969696'
       secureTextEntry
       onChange={e=>setFormData({...formData, repeatPassword:e.nativeEvent.text})}
       />

        <View style={styles.register} >
          <TouchableOpacity onPress={register}>
            
              <Text style={styles.btnText}>
              Registrate
              </Text>
          </TouchableOpacity>
        </View>
      

      <Button 
      title='Iniciar sesión' 
      onPress={changeForm}
      
      />
    </>
  )
}

const styles = StyleSheet.create({
    btnText:{
        color:'black',
        fontSize:20,
        marginBottom:10,
        
    },
    input:{
        height:50,
        color:'white',
        width:'85%',
        backgroundColor:'#1e3040',
        fontSize:18,
        marginBottom:20,
        borderWidth:1,
        borderRadius:30,
        paddingHorizontal:20
    },
    register:{
      flex:1,
      justifyContent:'flex-end',
      marginBottom:10,
      
    },
    error:{
      borderColor:'#f00',
      borderWidth:4,
      

    },
})