import axios from "axios";


//BASE URL 
const API_BASE_URL = 'https://raspy-estella-windiazmi-05533591.koyeb.app';
// const api_url = `https://api.mockfly.dev/mocks/74037101-b7cd-43f3-846a-7a1e87ad952f/pelatihan`;

//get All Course 
export const getAllCourses = async() => {
    try{
     const response = await axios.get(`${API_BASE_URL}/courses`);
     return response.data;
    }catch(error){
      console.error("Error fetching users:", error);
     throw error;
    }
}

export const getCourseBySlug = async (slug) => {
  const token = localStorage.getItem('token') || '';
  return await axios.get(`${API_BASE_URL}/courses/${slug}`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
}

export const createOrder = async (slug) => {
  const token = localStorage.getItem('token') || '';

  return await axios.post(`${API_BASE_URL}/courses/${slug}/order`, {}, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
}

export const paymentConfirmation = async (slug, orderId, payload = {}) => {
  const token = localStorage.getItem('token') || '';
  return await axios.post(`${API_BASE_URL}/courses/${slug}/order/${orderId}/confirm`, payload, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
}