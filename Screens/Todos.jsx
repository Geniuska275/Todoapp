import { SafeAreaView, StyleSheet, Text, View,Button, Modal, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import React, { useState,useEffect } from 'react'
import Header from '../components/Header'
import Todo from '../components/Todo'
import { colors } from '../Constants/Colors'
import { useDispatch, useSelector } from 'react-redux'
import { settodos } from '../Store/todosReducer'
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';


import * as Notifications from 'expo-notifications';





const Todos = () => {
  
  const todos=useSelector((state)=>state.todos)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data,setData]=useState([])
  const dispatch = useDispatch()
  console.log(todos)
  
   
  const fetchData = async (url) => {
    setError(null);
    try {
      const response = await fetch(url)    
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      if(response.ok){
        setTimeout(loader,2000)
      }
       const data = await response.json();
       dispatch(settodos(data))
     
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData('https://api.mockfly.dev/mocks/08a96dba-93de-4af9-b443-6415a99d2542/todo');
  }, []);


  const loader=()=>{
    setLoading(false)
   }

   useEffect(()=>{ 
  const saveData = async () => {
    try {
      await AsyncStorage.setItem('todos', JSON.stringify(todos.Todolist));
      
    } catch (e) {
      console.error('Failed to save data', e);
    }
  };
  saveData()
   },[todos])

   
   useEffect(()=>{ 
    const getData = async () => {
      try {
       const result= await AsyncStorage.getItem('todos');
        setData(JSON.parse(result))
      } catch (e) {
        console.error('Failed to save data', e);
      }
    };
    getData()
     },[todos])
  
     
    

  return (
    <SafeAreaView style={{
        backgroundColor:"white",
        flex:1,
    }}>
      <Header/>
      {loading &&(
        <View style={[StyleSheet.absoluteFill,{
          backgroundColor:"rgba(0,0,0,0.6)",
          alignItems:"center",
          justifyContent:"center",
          zIndex:30000
       }   
       ]}>
       <ActivityIndicator  
       color={colors.background} 
       animating size={180}/>
     </View>
   )}

      {!loading && <FlatList
        data={data}
        renderItem={({item}) => <Todo title={item.todo} id={item.id} time={item.time}  date={item.date} status={item.completed}/>}
        keyExtractor={(item) => item.title}
        ListHeaderComponent={() => <Text style={{marginTop:20, fontWeight:"bold", marginLeft:20,
           marginBottom:10}}>{data.length=== 0 ? "Please,Add a Todo." : `My todos (${todos.Todolist.length})`}</Text>}
        contentContainerStyle={{paddingHorizontal:20}}
      
      />}
     
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