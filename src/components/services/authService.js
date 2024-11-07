import axios from "axios";

//BASE URL
const API_BASE_URL = "https://raspy-estella-windiazmi-05533591.koyeb.app";

export const register = async (payload) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/register`, payload);

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const login = async (payload) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/login`, payload);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getCurrentUser = async (token) => {

  try {
    const response = await axios.get(
      `${API_BASE_URL}/auth/currentUser`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
