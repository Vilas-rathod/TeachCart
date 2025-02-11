// api/apiClient.js
import axios from 'axios';

// Create an instance of axios with default settings
const apiClient = axios.create({
    baseURL: 'http://localhost:5000', // Replace with your API base URL
    headers: {
        'Content-Type': 'application/json',
    },
});

// Function to get data from a specific endpoint
export const getData = async (endpoint) => {
    try {
        const response = await apiClient.get(endpoint);
        return response.data;
    } catch (error) {
        console.error('API error:', error);
        throw error; // Rethrow the error for handling in the calling component
    }
};

// Add other methods as needed (postData, updateData, deleteData, etc.)

export default apiClient;
