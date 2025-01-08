import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

function Cart() {
  return (
            <View style={styles.container}>
        <Text>This is Cart  1 Screen</Text>
    </View>

  )
}

export default Cart
const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    textAlign:'center'
  }
})