import { StatusBar } from 'expo-status-bar';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import React,{useState, useEffect} from 'react';
import Home from './screens/Home';
import Library from './screens/Library';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Trending from './screens/Trending';
import Player from './screens/Player';
import Feed from './screens/Feed';
import Favorites from './screens/Favorites';
import { Dimensions } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import apiClient from './auth/Spotify';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function HomeStack() {
  return(
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Tunify',
          headerStyle: {
            backgroundColor: 'grey'
          },
          headerTitleStyle: {
            fontSize: 30,
            fontWeight: 'bold'
          },
        }}
        />
        <Stack.Screen name="Library" component={Library} />
        <Stack.Screen name="Trending" component={Trending} />
        <Stack.Screen name="Player" component={Player} />
        <Stack.Screen name="Feed" component={Feed} />
        <Stack.Screen name="Favorites" component={Favorites} />
      </Stack.Navigator>
  );
}
function LibraryStack(){
  return(
    <Stack.Navigator>
        <Stack.Screen
          name="Library"
          component={Library}
        />
    </Stack.Navigator>
  );
}
function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Feeder"
        screenOptions={({ screenOptions }) => ({
          headerShown: true,
          tabBarStyle: {
            backgroundColor: 'rgba(34,36,40,1)',
        },
      })}
      >
        <Tab.Screen
          name="Tunify"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            headerStyle: {
            backgroundColor: 'grey'
          },
          headerTitleStyle: {
            fontSize: 30,
            fontWeight: 'bold'
          },
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="My Library"
          component={Library}
          options={{
            tabBarLabel: 'Library',
            headerStyle: {
            backgroundColor: 'grey'
          },
          headerTitleStyle: {
            fontSize: 30,
            fontWeight: 'bold'
          },
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="library" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="My Feed"
          component={Feed}
          options={{
            tabBarLabel: 'Feed',
            headerStyle: {
            backgroundColor: 'grey'
          },
          headerTitleStyle: {
            fontSize: 30,
            fontWeight: 'bold'
          },
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="apps" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="My Player"
          component={Player}
          options={{
            tabBarLabel: 'Player',
            headerStyle: {
            backgroundColor: 'grey'
          },
          headerTitleStyle: {
            fontSize: 30,
            fontWeight: 'bold'
          },
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="music" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Favorites"
          component={Favorites}
          options={{
            tabBarLabel: 'Favorites',
            headerStyle: {
            backgroundColor: 'grey'
          },
          headerTitleStyle: {
            fontSize: 30,
            fontWeight: 'bold'
          },
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="heart" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Trending"
          component={Trending}
          options={{
            tabBarLabel: 'Trending',
            headerStyle: {
            backgroundColor: 'grey'
          },
          headerTitleStyle: {
            fontSize: 30,
            fontWeight: 'bold'
          },
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="fire" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const dimScreen= Dimensions.get("screen");
const screenOptions = {
  tabBarActiveTintColor: "#42f44b",
  tabBarStyle: [
    {
      display: "flex"
    },
    null
  ]
};
const styles=StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'rgba(79, 81, 100, 1.0)',
    width: dimScreen.width,
  },
  TaskWrapper:{
    paddingTop: 80,
    paddingHorizontal:140,
  },
  sectionTitle:{
    fontSize: 45,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
});
export default App;
