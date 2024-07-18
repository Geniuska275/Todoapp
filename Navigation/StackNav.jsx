import { createStackNavigator } from '@react-navigation/stack';
import EditTodo from '../Screens/EditTodo';
import Todos from '../Screens/Todos';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator 
   
    >
      <Stack.Screen name="AllTodos" component={Todos} screenOptions={{
        headerShow:false
      }}/>

      <Stack.Screen name="EditTodo"
    
       options={({ route }) => ({
        title: route.params.name, // Dynamic title based on route parameter
      })}
      component={EditTodo} />
     
    </Stack.Navigator>
  );
}

export default MyStack