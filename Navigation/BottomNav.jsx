import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Todos from '../Screens/Todos';
import CompletedTodos from '../Screens/CompletedTodos';
import AddTodo from '../Screens/AddTodo';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <NavigationContainer>

    <Tab.Navigator screenOptions={{
        headerShown:false
    }}>
      <Tab.Screen name="AllTodos" component={Todos} />
      <Tab.Screen name="AddTodos" component={AddTodo} />
      <Tab.Screen name="completedTodos" component={CompletedTodos} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}

export  default MyTabs;