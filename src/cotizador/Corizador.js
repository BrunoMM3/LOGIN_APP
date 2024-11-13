
import { Button, StyleSheet, Text, View } from 'react-native';
import colors from '../utils/colors'
import {useState}from 'react'
import Form from './Form'
import Footer from './Footer';
import ResultCalculation from './ResultCalculation';
import { useEffect } from 'react';


export default function Corizador({logOut}) {

  const [capital, setCapital] = useState(null)
  const [interes, setInteres] = useState(null)
  const [months, setMonths] = useState(null)
  const [total, setTotal] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')

  const calcular = () => {
    setTotal(null)
    setErrorMessage('')
    if (!capital) {
      setErrorMessage('falta el capital')
    } else if(!interes){
      setErrorMessage('falta el interes')
    } else if(!months){
      setErrorMessage('falta elegir los meses')
    }else{
      //console.log(capital,interes,months)
      const i = interes/100
      const fee = capital / ((1 - Math.pow(1+i,-months)) / i)
      
      setTotal({
        monthlyFee:fee.toFixed(2),
        totalPayable: (fee*months).toFixed(2)
      })
      
      
    } 
  }
  useEffect(() => {
      calcular();
    
  }, [interes,capital,months])

  return (
    <>
      
      <View style={styles.container}>
        <Text
          style={[{bottom:90}, styles.title]}
          >Prestamos
        </Text>
        <Form 
        setCapital={setCapital} 
        setInteres={setInteres} 
        setMonths={setMonths} 
        
        />
      </View>
        <ResultCalculation
        capital={capital}
        interes={interes}
        months={months}
        total={total}
        errorMessage ={errorMessage}

        />
      
        <Footer 
          calcular={calcular}
          logOut = {logOut}
        />
      

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:0.7,
    backgroundColor: '#1d1d42',
    alignItems: 'center',
    height:200,
    borderRadius:30,
    justifyContent: 'center',
  },
  text:{
    fontSize:25,
    color:"#fff",
    fontWeight:'black'
  },
  title:{
    fontSize:40,
    fontFamily:'serif',
    marginVertical:20,
    textAlign:'center',
    color: "#739AFF",
    textShadowColor: "#0044AA",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 1,
    
  },
});
