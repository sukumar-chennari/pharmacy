import CartDetails from '@/components/cartDetails'
import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

function Cart() {
  return (
          <CartDetails/>

  )
}

export default Cart

const styles=StyleSheet.create({
  container:{
    flex:1,

  }
})