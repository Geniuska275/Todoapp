import { ActivityIndicator, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React,{useEffect,useState} from 'react'
import { AntDesign } from '@expo/vector-icons';
import Header from '../components/Header'
import { colors } from '../Constants/Colors';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { edittodo } from '../Store/todosReducer';
import { useDispatch } from 'react-redux';
const EditTodo = ({route}) => {
  const {name,id} =route.params
  const dispatch = useDispatch()
    const { container ,text} = styles
    const [loading, setLoading] = useState(false);
    const [todo, setTodo]= useState(name);
    const Navigation = useNavigation();
    const editTodo= () =>{           
        setLoading(true)
        setTimeout(loader,4000)
        dispatch(edittodo({id:id,itemData:todo}))        
        }
        const loader=()=>{
          setLoading(false)
          Navigation.navigate("AllTodos")
         }

    
  return (
    <SafeAreaView style={container}>  
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
         }}>EDIT TODO</Text>
         <TextInput placeholder='Edit todo'  
         style={{
            width:350,
            borderColor:'#243c56',
            borderWidth:1,
            paddingHorizontal:10,
            paddingVertical:20,
            marginBottom:10,
            borderRadius:5,
            alignSelf:"center"
         }}
         
         onChangeText={(text)=>setTodo(text)}
         value={todo}/>

         <TouchableOpacity style={text}
         onPress={()=>{
               editTodo()
         }}>
          <Feather name="edit" size={24} color={colors.primary} />
         <Text 
         style={{
          fontWeight:"bold",
          color:colors.primary,
          marginLeft:10,
          fontSize:20
          }}>EDIT</Text>
         </TouchableOpacity>
     </View>
    </SafeAreaView>
  )
}

export default EditTodo

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    text:{fontWeight:"bold",
      color:colors.primary,
      marginLeft:10,
      fontSize:20}
})