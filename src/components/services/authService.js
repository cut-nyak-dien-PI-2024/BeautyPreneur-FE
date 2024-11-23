import axios from "axios";

//BASE URL
const API_BASE_URL = "https://naughty-catlee-baeuty-preneur-59c1e8a1.koyeb.app";

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

export const forgotPassword = async (email) => {
  const data = {
    email: email,
  };

  try {
    const response = await axios.post(`${API_BASE_URL}/auth/forgot-password`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const resetPassword = async (password) => {
  const otp = localStorage.getItem("otp");
  const data = {
    otp,
    newpassword:password
  };

  try {
    const response = await axios.post(
      `${API_BASE_URL}/auth/reset-password`,
      data
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};