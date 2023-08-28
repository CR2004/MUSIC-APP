import { StatusBar } from 'expo-status-bar';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Library = ({navigation, route}) => {
    const [playlists, setPlaylists] = useState([]);
    useEffect(() => {
        fetchPlaylists();
    }, []);
    const fetchPlaylists = async () => {
        try {
          const response = await fetch('https://api.spotify.com/v1/me/playlists', {
            method: 'GET',
            headers: {
              Authorization: `Bearer BQBAMK...VQBEog`,
            },
          });
          const data = await response.json();
          console.log(data);
          setPlaylists(data.items);
        } catch (error) {
          console.error(error);
        }  
    }
    return (
    <View>
      <Text>My Playlists:</Text>
      {playlists.map((playlist) => (
        <Text key={playlist.id}>{playlist.name}</Text>
      ))}
    </View>
    );
};

export default Library;
