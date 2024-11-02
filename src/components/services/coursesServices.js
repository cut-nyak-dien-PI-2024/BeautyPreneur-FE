import axios from "axios";


//BASE URL 
const API_BASE_URL = 'https://api.mockfly.dev/mocks/8b71d6f2-9d3a-43ed-85d5-483f9c7e2c1d/pelatihan';
// const api_url = `https://api.mockfly.dev/mocks/74037101-b7cd-43f3-846a-7a1e87ad952f/pelatihan`;


//get All Course 
export const getAllCourses = async() => {
    try{
     const response = await axios.get(API_BASE_URL);
     return response.data;
    }catch(error){
      console.error("Error fetching users:", error);
     throw error;
    }
}