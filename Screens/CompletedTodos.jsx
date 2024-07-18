
import { SafeAreaView, StyleSheet, Text, View,Button, Modal, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/Header'
import { colors } from '../Constants/Colors'
import CompleteTodo from '../components/completeTodo'
import { useSelector } from 'react-redux'

const CompletedTodos = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const todos = useSelector((state)=>state.todos)
   const { radius ,text,texts} = styles;
   const completeTodos = todos.Todolist.filter((item)=>item.completed===true)

 return (
   <SafeAreaView style={{
       backgroundColor:"white",
       flex:1,
   }}>
     <Header/>
     <FlatList
       data={completeTodos}
       renderItem={({item}) => <CompleteTodo title={item.todo} date={item.date} id={item.id} time={item.time} status={item.status}/>}
       keyExtractor={(item) => item.title}
       ListHeaderComponent={() => <Text 
        style = {texts}>Completed Todos ({completeTodos.length})</Text>}   
       contentContainerStyle={{paddingHorizontal:20}}
     
     />
     <Modal
       animationType="slide"
       transparent={true}
       visible={modalVisible}
       
     >
       <View style={{            
             marginTop: 300,
             backgroundColor:"red",
             marginHorizontal:10,
             height:600 ,
             borderTopLeftRadius:30,
             borderTopRightRadius:30
             }}>
         <View >
           <Text>Hello World!</Text>
           <Button title="Hide Modal" onPress={() => setModalVisible(!modalVisible)} />
         </View>
       </View>
     </Modal>
     <TouchableOpacity style={radius} onPress={() => setModalVisible(!modalVisible)}>
       <Text style={text}>+</Text>
     </TouchableOpacity>
   </SafeAreaView>
  )
}

export default CompletedTodos


const styles = StyleSheet.create({
  radius:{
          width:80,
          height:80,
          backgroundColor:colors.background,
          borderRadius:40,
          position:"relative",
          zIndex:1000,
          top:200,
          left:300,
          borderRadius:40,
          justifyContent:"center",
          alignItems:"center"
        },
        text:{
          fontSize:40,
          color:colors.primary
      },
      texts:{
        fontWeight:"bold",
        color:colors.primary,
        marginLeft:10,
        fontSize:20
      }
  
})