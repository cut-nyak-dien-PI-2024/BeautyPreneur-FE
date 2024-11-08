import axios from "axios";

//BASE URL
const API_BASE_URL = "https://raspy-estella-windiazmi-05533591.koyeb.app";

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
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};
