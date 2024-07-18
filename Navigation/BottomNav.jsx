import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Todos from '../Screens/Todos';
import CompletedTodos from '../Screens/CompletedTodos';
import AddTodo from '../Screens/AddTodo';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '../Constants/Colors';
import MyStack from './StackNav';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <NavigationContainer>

    <Tab.Navigator
     screenOptions={({route})=>({
        headerShown:false,
        tabBarActiveTintColor:"#243c56",
        tabBarIcon:({color,size,focused})=>{
            let iconName;
            if(route.name=="AllTodos"){
               iconName= focused? "task":"task"
            }else if(route.name=="AddTodos"){
              iconName= focused? "add":"add"           
            }else if(route.name=="completedTodos"){
                iconName= focused? "done-all":"done-all"           
              }
          return <MaterialIcons name={iconName} color={color} size={22}/>
        },
    }
        
  )
  } 
    
    >
      <Tab.Screen name="AllTodos" component={MyStack} />
      <Tab.Screen name="AddTodos" component={AddTodo} />
      <Tab.Screen name="completedTodos" component={CompletedTodos} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}

export  default MyTabs;