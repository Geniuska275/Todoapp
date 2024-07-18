import { SafeAreaView, StyleSheet, Text, View,Button, Modal, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/Header'
import Todo from '../components/Todo'
import { colors } from '../Constants/Colors'

const Todos = () => {
    const [modalVisible, setModalVisible] = useState(false);
     const [todos,setTodos] = useState([
       {title:"Meeting", date:"12:00pm", status:"active"},
       {title:"Grocery Shopping", date:"1:00pm", status:"inactive"},
       {title:"Dinner", date:"2:00pm", status:"inactive"},
       {title:"Meeting", date:"12:00pm", status:"active"},
       {title:"Grocery Shopping", date:"1:00pm", status:"inactive"},
       {title:"Dinner", date:"2:00pm", status:"inactive"},
       {title:"Meeting", date:"12:00pm", status:"active"},
       {title:"Grocery Shopping", date:"1:00pm", status:"inactive"},
       {title:"Dinner", date:"2:00pm", status:"inactive"},
     ])
    const { radius ,text} = styles;
  return (
    <SafeAreaView style={{
        backgroundColor:"white",
        flex:1,
    }}>
      <Header/>
      <FlatList
        data={todos}
        renderItem={({item}) => <Todo title={item.title} date={item.date} status={item.status}/>}
        keyExtractor={(item) => item.title}
        ListHeaderComponent={() => <Text style={{marginTop:20, fontWeight:"bold", marginLeft:20, marginBottom:10}}>My Todos({todos.length})</Text>}
       
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