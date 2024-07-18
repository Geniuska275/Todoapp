import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React,{useEffect,useState} from 'react'
import { AntDesign } from '@expo/vector-icons';
import Header from '../components/Header'
import { colors } from '../Constants/Colors';


const AddTodo = () => {
    const { container } = styles
    const [loading, setLoading] = useState(true);

    
  return (
    <SafeAreaView style={container}>
        <Header/>
        

     <View style={{alignSelf:"center",marginTop:250}}>
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
         }}/>
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