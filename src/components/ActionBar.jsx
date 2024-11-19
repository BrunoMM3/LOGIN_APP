import { StyleSheet, Text, View } from 'react-native'
import { getAuth, signOut } from "firebase/auth";
import React from 'react'
import auth from '../utils/firebase';

export default function ActionBar({showList,setShowList}) {
    function logOut(){
        const auth = getAuth(auth);
        signOut(auth).then(() => {
          console.log('Cerró sesión')
        }).catch((error) => {
          // An error happened.
        }); 
      }
  return (
    <View style={styles.viewFooter}>
      <View style={styles.viewClose}>
        <Text style={styles.text} onPress={logOut}> Cerrar Sesión</Text>
      </View>
      <View style={styles.viewDate} >
        <Text style={styles.text} onPress={()=> setShowList(!showList)}>
            {
                showList ? 'Nueva Fecha' : 'Cancelar Fecha'
            }
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    viewFooter:{
        position:'absolute',
        bottom:0,
        flexDirection:'',
        width:'100%',
        height:50,
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:30,
        marginBottom:30
    },
    viewClose:{
        backgroundColor:'#820000',
        borderRadius:50,
        paddingVertical:10,
        paddingHorizontal:30
    },
    text:{
        fontSize:16,
        color:'#fff',
        textAlign:'center'
    },
    viewDate:{
        backgroundColor:'#1ea1f1',
        borderRadius:50,
        paddingVertical:10,
        paddingHorizontal:30
    }

})