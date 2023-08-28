import React from "react";
import { StatusBar } from 'expo-status-bar';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';
import Login from "../auth/Login";
  const Home = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Login/>
        <Button
            title="Library"
            onPress={() => navigation.navigate('Library')} />
        <Button
            title="Trending"
            onPress={() => navigation.navigate('Trending')} />
        <Button
            title="Feed"
            onPress={() => navigation.navigate('Feed')} />
        <Button
            title="Favorites"
            onPress={() => navigation.navigate('Favorites')} />
        <Button
            title="Player"
            onPress={() => navigation.navigate('Player')} /></View>
    );
  };
  const styles=StyleSheet.create({
    container:{flex: 1,
      backgroundColor: 'rgba(128, 128, 128, 0.8)',
    },
    TaskWrapper:{
      paddingTop: 80,
      paddingHorizontal:8,
    },
    sectionTitle:{
      fontSize: 45,
      fontWeight: 'bold',
      fontStyle: 'italic',
    },
  });
  export default Home;
  