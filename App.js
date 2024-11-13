import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet,Button, Text, View } from 'react-native';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import app from './src/utils/firebase'
import Auth from './src/components/Auth';
import Corizador from './src/cotizador/Corizador';

export default function App() {

  const [user, setUser] = useState(undefined)

  useEffect(() => {
    const auth = getAuth(app);
    onAuthStateChanged(auth, (user) => {
    if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;

    setUser(true)
    } else {
    // User is signed out
    // ...
    
    setUser(false)
    console.log('No esta autenticado' , user)
  }
});
  
    
  }, [])
  

  if (user == undefined)  return null
  
  function logOut(){
    const auth = getAuth(app);
    signOut(auth).then(() => {
      console.log('Cerró sesión')
    }).catch((error) => {
      // An error happened.
    }); 
  }
  

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {user ? <Corizador logOut={logOut} /> : <Auth/>}

    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    
    height:'100%',
    backgroundColor: '#1d1d42',
    
  },
});
