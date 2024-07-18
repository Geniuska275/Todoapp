import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../Constants/Colors'
import { FontAwesome5 } from '@expo/vector-icons';

const Header = () => {
  const { container,text } = styles
  return (
    <View style={container}>
      <Text style={text}>TodosApp.</Text>
      <FontAwesome5 name="tasks" size={24} color={colors.primary} style={{marginRight:10}}/>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingVertical:30,
        backgroundColor:colors.background
    },
    text:{
        color:colors.primary,
        fontWeight:"bold",
        fontSize:20,
        marginLeft:10
    }
})