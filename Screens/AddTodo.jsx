import { ActivityIndicator, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React,{useEffect,useState} from 'react'
import { AntDesign } from '@expo/vector-icons';
import Header from '../components/Header'
import { colors } from '../Constants/Colors';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { addtodo } from '../Store/todosReducer';


const AddTodo = () => {
   const dispatch=useDispatch()
    const { container } = styles
    const [loading, setLoading]= useState(false);
    const [todo, setTodo]= useState("");
    


    const Navigation=useNavigation();
   
    const addTodo=()=>{  
        dispatch(addtodo(todo))         
        setLoading(true)
        setTimeout(loader,4000)
            
        }
        const loader=()=>{
          setLoading(false)
          Navigation.navigate("AllTodos")
         }
    
  return (
    <SafeAreaView style={container}>
        <Header/>
        {loading &&(
        <View style={[StyleSheet.absoluteFill,{
          backgroundColor:"rgba(0,0,0,0.6)",
          alignItems:"center",
          justifyContent:"center",
          zIndex:30000
       }   
       ]}>
       <ActivityIndicator  color={colors.background} animating size={180}/>
     </View>)}

     <View style={{alignSelf:"center",marginTop:200}}>
         <Text style={{
            fontWeight:"bold",
            fontSize:24,
            marginBottom:10,
            color:'#243c56',
            alignSelf:"center"
         }}>ADD TODO</Text>
         <TextInput placeholder='Add a todo'  style={{
            width:350,
            borderColor:'#243c56',
            borderWidth:1,
            paddingHorizontal:10,
            paddingVertical:20,
            marginBottom:10,
            borderRadius:5,
            alignSelf:"center"
         }}
         onChangeText={(text)=>setTodo(text)}/>
        
         <TouchableOpacity style={{       
            backgroundColor:colors.background,
            width:350,
            borderRadius:10,
            marginTop:10,
            paddingVertical:15,
            flexDirection:"row",
            alignItems:'center',
            marginHorizontal:20,
            justifyContent:"center"
         }}
         onPress={()=>{
            addTodo()

         }}>
         <AntDesign name="plussquare" size={24} color={colors.primary} />
         <Text style={{fontWeight:"bold",color:colors.primary,marginLeft:10,fontSize:20}}>Add</Text>
         </TouchableOpacity>
     </View>
    </SafeAreaView>
  )
}

export default AddTodo

const styles = StyleSheet.create({
    container:{
        flex:1,
        
 
    }
})