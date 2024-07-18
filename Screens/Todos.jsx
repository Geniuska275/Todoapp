import { SafeAreaView, StyleSheet, Text, View,Button, Modal, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/Header'
import Todo from '../components/Todo'
import { colors } from '../Constants/Colors'
import { useSelector } from 'react-redux'

const Todos = () => {
  const todos=useSelector((state)=>state.todos)
  console.log(todos)


    const [modalVisible, setModalVisible] = useState(false);
   
    const { radius ,text} = styles;
  return (
    <SafeAreaView style={{
        backgroundColor:"white",
        flex:1,
    }}>
      <Header/>
      <FlatList
        data={todos.Todolist}
        renderItem={({item}) => <Todo title={item.todo} id={item.id} time={item.time}  date={item.date} status={item.completed}/>}
        keyExtractor={(item) => item.title}
        ListHeaderComponent={() => <Text style={{marginTop:20, fontWeight:"bold", marginLeft:20, marginBottom:10}}>{todos.Todolist.length=== 0 ? "Please,Add a Todo." : `My todos (${todos.Todolist.length})`}</Text>}
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

export default Todos

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
        }
    
})