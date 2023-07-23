import React, { Component } from 'react';
import { StyleSheet, Text, View, styles} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Login from './Component/Login';
import Register from './Component/Register';
import Landing from './Component/Landing';
import RegisterBerhasil from './Component/RegisterBerhasil';
import HomeScreen from './Component/HomeScreen';
import Profile from './Component/Profile';
import RegisterGagal from './Component/RegisterGagal';

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Landing' component={Landing}></Stack.Screen>
        <Stack.Screen name='Login' component={Login}></Stack.Screen>
        <Stack.Screen name='Register' component={Register}></Stack.Screen>
        <Stack.Screen name='RegisterBerhasil' component={RegisterBerhasil}></Stack.Screen>
        <Stack.Screen name='RegisterGagal' component={RegisterGagal}></Stack.Screen>
        <Stack.Screen name='HomeScreen' component={TabScreen}></Stack.Screen>
        <Stack.Screen name='Profile' component={Profile}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function TabScreen(){
  return(
    <Tab.Navigator
      initialRouteName="HomeScreen"
      barStyle={{ backgroundColor: '#80DE68' }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <AntDesign name="user" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
    
  );
}
