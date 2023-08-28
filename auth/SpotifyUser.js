import { authenticateSpotify } from './Spotify';
import axios from 'axios';

const getUserProfile = async () => {
  try {
    const { accessToken } = await authenticateSpotify();

    const response = await axios.get('https://api.spotify.com/v1/me', {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });

    console.log('User Profile:', response.data);
  } catch (error) {
    console.log('API Request Error:', error);
  }
};
