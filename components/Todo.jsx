import { StyleSheet, Text, View,TouchableOpacity,Alert } from 'react-native'
import React ,{useState} from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Todo = ({title,date,time,status,id}) => {
  const [show, setShow] = useState(false)
 
  const Navigation = useNavigation()
  

 

  return (
    <TouchableOpacity
     onPress={()=>{
      Navigation.navigate('TodoDetails', { name: title ,id:id})
     }}
    style={{
       marginHorizontal:20,
       backgroundColor:"#e3c778",
       borderRadius:10,
       padding:10,
       marginBottom:10,
       
       flexDirection:"row",
       alignItems:"center",
       shadowColor:"#000",
       shadowOffset:{width:0,height:2},
       shadowOpacity:0.3,
       shadowRadius:4,
       elevation:5,
       gap:20,
       borderColor:status ? "green":"red",
       borderWidth:status? 3:1,
     
 
    }}>
        <View style={{
          width:40,
          height:40,
          borderRadius:20,
          backgroundColor:"#243c56",
          justifyContent:"center",
          alignItems:"center"
        }}>
           <FontAwesome5 name="tasks" size={24} color="#e3c778" />

        </View>

        <View>
            <Text style={{textTransform:"uppercase", fontWeight:"bold",width:200,
            }}
            numberOfLines={1}
            
            >{title}</Text>
            <Text style={{marginTop:5}}>{date}</Text>
            <Text style={{marginTop:5}}>{time}</Text>
            <Text style={{color:"red",marginTop:5}}>{status}</Text>
        </View>

      
    </TouchableOpacity>
  )
}

export default Todo

const styles = StyleSheet.create({})