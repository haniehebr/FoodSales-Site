import axios from "axios";

const API_BASE_URL = "http://localhost:8000/api"; // Update this with your actual backend URL

export const getFoods = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/foods/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching foods:", error);
    throw error;
  }
};
