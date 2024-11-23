import axios from "axios";

//BASE URL
const API_BASE_URL = "https://naughty-catlee-baeuty-preneur-59c1e8a1.koyeb.app";

//get All Makeup
export const getAllMakeupPackage = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/makeup-package`);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

//get Detail Makeup
export const getDetailMakeupPackage = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/makeup-package/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

//get Detail Makeup
export const getDataProductFromDetailMakeupPackage = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/makeup-budget/${id}`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};
