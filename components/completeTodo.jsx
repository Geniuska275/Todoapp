import { StyleSheet, Text, View,TouchableOpacity,Alert } from 'react-native'
import React ,{useState} from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { deletetodo } from '../Store/todosReducer';

const CompleteTodo = ({title,date,status,time ,id}) => {
  const [show,setShow] = useState(false)
  const dispatch = useDispatch()
  const Navigation = useNavigation()

  const deleteTodo = (title)=>{
    Alert.alert(
      "DELETE", // Required: Title of the alert
      `delete ${title}`, // Optional: Message to display
      [
        {
          text: "Cancel", // Button label
          onPress: () => console.log("Cancel Pressed"), // Callback when pressed
          style: "cancel" // Optional: Style of the button
        },
        {
          text: "OK", // Button label
          onPress: () =>{
            dispatch(deletetodo(id))
          } /// Callback when pressed
        }
      ],
      { cancelable: true } // Optional: Whether the alert can be dismissed by tapping outside the alert
    );
  }

  const EditTodo = (title)=>{
    Alert.alert(
      "EDIT TODO", // Required: Title of the alert
      `Do you want to Edit ${title} ?`, // Optional: Message to display
      [
        {
          text: "No", // Button label
          onPress: () => console.log("Cancel Pressed"), // Callback when pressed
          style: "cancel" // Optional: Style of the button
        },
        {
          text: "YES", // Button label
          onPress: () =>{
            Navigation.navigate('EditTodo', { name: title ,id:id})
          }  // Callback when pressed
        }
      ],
      { cancelable: true } // Optional: Whether the alert can be dismissed by tapping outside the alert
    );
  }

  const CompleteTodo = (title)=>{
    Alert.alert(
      "Complete Todo", // Required: Title of the alert
      `Are you sure you have completed this todo ${title} ?`, // Optional: Message to display
      [
        {
          text: "Not Sure", // Button label
          onPress: () => console.log("Cancel Pressed"), // Callback when pressed
          style: "cancel" // Optional: Style of the button
        },
        {
          text: "YES", // Button label
          onPress: () => console.log("OK Pressed") // Callback when pressed
        }
      ],
      { cancelable: true } // Optional: Whether the alert can be dismissed by tapping outside the alert
    );
  }

  return (
    <TouchableOpacity
    onPress={()=>{
      Navigation.navigate('TodoDetails', { name: title ,id:id})
     }}
    
    style={{
       marginHorizontal:20,
       backgroundColor:"#e3c778",
       borderRadius:10,
       padding:20,
       marginBottom:10,
       elevation:4,    
       flexDirection:"row",
       alignItems:"center",
       justifyContent:"space-between",
       borderColor:"green",
       borderWidth:status? 2:1,
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
            <Text style={{textTransform:"uppercase", fontWeight:"bold",
              width:200
            }}
            numberOfLines={1}
            >{title}</Text>
            <Text style={{marginTop:5}}>{date}</Text>
            <Text style={{marginTop:5}}>{time}</Text>       

        </View>

       {show ? 

       <View style={{
        flexDirection:"row",
        gap:5,
        backgroundColor:"white",
        borderRadius:5,
        paddingVertical:10,
        paddingHorizontal:10
       }}>
          <TouchableOpacity onPress={()=>deleteTodo(title)}>

          <AntDesign name="delete" size={24} color="red" />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>EditTodo(title)}>
          <AntDesign name="edit" size={24} color="#243c56" />
          </TouchableOpacity>
         
        </View>:null}
        <TouchableOpacity onPress={()=>setShow(a=>!a)}>
          <FontAwesome5 name="ellipsis-v" size={24} color="#243c56" />
        </TouchableOpacity>
    
    </TouchableOpacity>
  )
}

export default CompleteTodo

const styles = StyleSheet.create({})