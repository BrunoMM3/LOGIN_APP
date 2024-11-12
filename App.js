import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from './src/utils/firebase'
import Auth from './src/components/Auth';

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
  

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {user ? <Text>Estas logueado</Text> : <Auth/>}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
