import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../Constants/Colors'
import { FontAwesome5 } from '@expo/vector-icons';

const SplashScreen = () => {
    const { container, text } = styles
  return (
    <View style={container}>
        <View>
         <Text style={text} >TodosApp.</Text>
         <FontAwesome5 name="tasks" size={64} color={colors.primary} style={{
            marginLeft:60
         }}/>
        </View>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
   container:{
     flex: 1,
     backgroundColor: colors.background,
     alignItems: 'center',
     justifyContent: 'center',
   },
   text:{
    color:colors.primary,
    fontWeight:"bold",
    fontSize:40,
    marginBottom:20,
   }

})