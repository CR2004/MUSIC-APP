import React from 'react';
import { Button, View } from 'react-native';
import * as AuthSession from 'expo-auth-session';
import axios from 'axios';
const spotifyClientId = '35627d1a87084eb79e15bb45cf653b1b';
const spotifyRedirectUri = AuthSession.makeRedirectUri({ useProxy: true });
const spotifyScopes = ['user-read-email', 'user-read-private','playlist-read-private','playlist-read-collaborative']; // Add any required scopes

const authEndpoint = 'https://accounts.spotify.com/authorize';
const authUrl = `${authEndpoint}?client_id=${spotifyClientId}&redirect_uri=${encodeURIComponent(spotifyRedirectUri)}&scope=${encodeURIComponent(spotifyScopes.join(' '))}&response_type=code`;

const getAuthorizationCode = async () => {
  const result = await AuthSession.startAsync({ authUrl });
  if (result.type === 'success') {
    // Handle successful authorization
    const { code } = result.params;
    // Exchange the authorization code for an access token
    // Call your backend server or directly make a request to Spotify API with the code
  } else {
    // Handle unsuccessful authorization
    console.log('Authorization failed');
  }
};

const handleLogin = () => {
  getAuthorizationCode();
};
const apiClient=axios.create({
  baseURL:"https://api.spotify.com/v1/",
});

