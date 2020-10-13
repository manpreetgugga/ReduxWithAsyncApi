import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./components/HomeScreen"
import UserList from "./components/UserList"


const Stack = createStackNavigator();

import React from 'react';

import store from './reducers/Index';
import { Provider } from 'react-redux';


const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
          <Stack.Navigator initialRouteName="home">
            <Stack.Screen name="home" component={HomeScreen} />
            <Stack.Screen name="usersList" component={UserList} />
          </Stack.Navigator>
      </NavigationContainer>
  </Provider>
  );
};


export default App;
