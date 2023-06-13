import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import Home from './screens/Home';
import Signup from './screens/Signup';
import Login from './screens/Login';
import First from './screens/First';
import Second from './screens/Second';
import Flatlist from './screens/Flatlist';
//import { FlatList } from 'react-native';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown:false}}
        />

        <Stack.Screen name="Login" component={Login}  options={{headerShown: false}} />
        <Stack.Screen name="Signup" component={Signup}  options={{headerShown: true}} />
        <Stack.Screen name="Flatlist" component={Flatlist}  options={{headerShown: false}} />
        <Stack.Screen name="First" component={First}  options={{headerShown: false}} />
        <Stack.Screen name="Second" component={Second}  options={{headerShown: false}} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;
