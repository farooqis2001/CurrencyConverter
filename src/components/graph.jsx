import axios from 'axios';

const API_KEY = '8ba624ef8fc1f887e3d561648d0f5743';
const BASE_URL = 'http://api.exchangeratesapi.io/v1/latest?access_key=8ba624ef8fc1f887e3d561648d0f5743'; // Replace with the API URL

const fetchCurrencyData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/latest?access_key=${API_KEY}`);
    return response.data; // Parse the response JSON as needed
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
