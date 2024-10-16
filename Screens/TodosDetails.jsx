import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import Header from '../components/Header'
import { useSelector } from 'react-redux'
import { colors } from '../Constants/Colors'

const TodosDetails = ({route}) => {
    const {name, id} = route.params
    const todos=useSelector((state)=>state.todos)
    const todo=todos.Todolist.find(x=>x.id === id)
    

  return (
    <SafeAreaView style={{
        backgroundColor:"white",
        flex:1,
    }}>
     <View style={{
        padding:20,
        backgroundColor:"#e3c778",
        borderRadius:10,
        
        marginTop:140, 
        marginHorizontal:20,
        marginVertical:10,
        shadowColor:"#000",
        shadowOffset:{width:0,height:2},
        shadowOpacity:0.3,
        shadowRadius:4,
        elevation:5,
        height:200,
     }}>
        <Text style={{
            fontWeight:"bold",
            fontSize:20,
            color:colors.background,
            marginBottom:10,
        }}> Task : {todo.todo}</Text>
        <Text
        style={{
            fontWeight:"bold",
            fontSize:20,
            color:colors.background,
            marginBottom:10,
        }}
        > Time : {todo.time}</Text>
        <Text
        style={{
            fontWeight:"bold",
            fontSize:20,
            color:colors.background,
            marginBottom:10,
        }}
        > Date : {todo.date}</Text>
        <Text
        style={{
            fontWeight:"bold",
            fontSize:20,
            color:colors.background,
            marginBottom:10,
        }}
        
        > Status : {todo.completed ? "Completed" : " Not Completed"}</Text>

     </View>


      
    </SafeAreaView>
  )
}

export default TodosDetails