import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SplashScreen from './Screens/SplashScreen';
import Todos from './Screens/Todos';
import AddTodo from './Screens/AddTodo';

// Only import react-native-gesture-handler on native platforms
import 'react-native-gesture-handler';
import MyTabs from './Navigation/BottomNav';
import { useState , useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from './Store/store';


export default function App() {
  const [show, setIsShow] = useState(true)

  useEffect(()=>{
    setTimeout(()=>{
     setIsShow(false)
    },5000)
  },[])
  return (
  

    <Provider store={store}>
       {show ? <SplashScreen/>:
       <MyTabs/>
      }
      <StatusBar style="auto" />
    </Provider>
     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
