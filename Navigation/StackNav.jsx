import { createStackNavigator } from '@react-navigation/stack';
import EditTodo from '../Screens/EditTodo';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator 
    screenOptions={{
        headerShown:false
    }}>
      <Stack.Screen name="Edit" component={EditTodo} />
     
    </Stack.Navigator>
  );
}

export default MyStack