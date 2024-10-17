import { View, Text, TouchableOpacity,Alert } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import Header from '../components/Header'
import { useSelector } from 'react-redux'
import { colors } from '../Constants/Colors'
import { completed ,deletetodo,Uncompleted} from '../Store/todosReducer';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import * as Notifications from 'expo-notifications';

import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
const TodosDetails = ({route}) => {
    const {name, id} = route.params
    const todos=useSelector((state)=>state.todos)
    const todo=todos.Todolist.find(x=>x.id === id)
   const completeTodos = todos.Todolist.filter((item)=>item.completed===true)

    const dispatch = useDispatch()
    const Navigation = useNavigation()

    const deleteTodo = (id)=>{
        Alert.alert(
          "DELETE", // Required: Title of the alert
          `delete ${name}`, // Optional: Message to display
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
                Navigation.navigate('AllTodos')

              } // Callback when pressed
            }
          ],
          { cancelable: true } // Optional: Whether the alert can be dismissed by tapping outside the alert
        );
      }
    
      const EditTodo = (name)=>{
        Alert.alert(
          "EDIT TODO", // Required: Title of the alert
          `Do you want to Edit ${name} ?`, // Optional: Message to display
          [
            {
              text: "No", // Button label
              onPress: () => console.log("Cancel Pressed"), // Callback when pressed
              style: "cancel" // Optional: Style of the button
            },
            {
              text: "YES", // Button label
              onPress: () =>{
                Navigation.navigate('EditTodo', { name: name ,id:id})
              } // Callback when pressed
            }
          ],
          { cancelable: true } // Optional: Whether the alert can be dismissed by tapping outside the alert
        );
      }
    
      const CompleteTodo = (id)=>{

        if(todo?.completed){
            Alert.alert(
              "Todo is already completed", // Required: Title of the alert
              `${name} is already completed`, // Optional: Message to display
              [
                {
                  text: "UnComplete", // Button label
                  onPress: () =>dispatch(Uncompleted(id)), // Callback when pressed
                  style: "cancel" // Optional: Style of the button
                }
              ],
              { cancelable: true } // Optional: Whether the alert can be dismissed by tapping outside the alert
            );
            return
        }
        Alert.alert(
          "Complete Todo", // Required: Title of the alert
          `Are you sure you have completed this todo ${name} ?`, // Optional: Message to display
          [
            {
              text: "Not Sure", // Button label
              onPress: () => console.log("Cancel Pressed"), // Callback when pressed
              style: "cancel" // Optional: Style of the button
            },
            {
              text: "YES", // Button label
              onPress: () => {
                Navigation.navigate('completedTodos')
                dispatch(completed(id))
                Notifications.scheduleNotificationAsync({
                    content: {
                       title: "Completed Todo",
                       body: `You have completed a todo, WELL DONE`
                     },
                     trigger:null,
                   })     
              } // Callback when pressed
            }
          ],
          { cancelable: true } // Optional: Whether the alert can be dismissed by tapping outside the alert
        );
      }
    

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
        height:210,
     }}>
        <Text style={{
            fontWeight:"bold",
            fontSize:20,
            color:colors.background,
            marginBottom:10,
        }}> Task : {todo?.todo}</Text>
        <Text
        style={{
            fontWeight:"bold",
            fontSize:20,
            color:colors.background,
            marginBottom:10,
        }}
        > Time : {todo?.time}</Text>
        <Text
        style={{
            fontWeight:"bold",
            fontSize:20,
            color:colors.background,
            marginBottom:10,
        }}
        > Date : {todo?.date}</Text>
        <Text
        style={{
            fontWeight:"bold",
            fontSize:20,
            color:colors.background,
            marginBottom:10,
        }}
        
        > Status : {todo?.completed ? "Completed" : " Not Completed"}</Text>
        <View>
    

    <View style={{
 flexDirection:"row",
 justifyContent:"space-around",
 alignItems:"center",
 gap:5,
 backgroundColor:"white",
 borderRadius:5,
 paddingVertical:20,
 paddingHorizontal:10,
 shadowOffset:{width:0,height:2},
 shadowOpacity:0.3,
 shadowRadius:4,
 elevation:5,
}}>
   <TouchableOpacity onPress={()=>deleteTodo(id)}>

   <AntDesign name="delete" size={24} color="red" />
   </TouchableOpacity>
   <TouchableOpacity onPress={()=>EditTodo(name)}>
   <AntDesign name="edit" size={24} color="#243c56" />
   </TouchableOpacity>
   <TouchableOpacity onPress={()=>CompleteTodo(id)}>
   <MaterialIcons name="done-outline" size={24} color="#243c56" />
   </TouchableOpacity>
 </View>
 

        </View>

     </View>



      
    </SafeAreaView>
  )
}

export default TodosDetails