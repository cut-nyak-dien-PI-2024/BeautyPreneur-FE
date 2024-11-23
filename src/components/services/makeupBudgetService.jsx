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
    const makeupPackage = await axios.get(`${API_BASE_URL}/makeup-package/${id}`);
    const makeupBudgetIDs = makeupPackage?.data?.data?.data;
  
    if (makeupBudgetIDs.length > 0) {
      const makeupBudgetRequests = makeupBudgetIDs.map(id => getDataProductFromDetailMakeupPackage(id));
      const makeupBudgetResp = await axios.all(makeupBudgetRequests);
      const makeupBudgetRespData = makeupBudgetResp.map(resp => resp?.data?.data);

      return {
        makeup_package: makeupPackage,
        makeup_budgets: makeupBudgetRespData,
      }
    }
  } catch (err) {
    console.error("Error fetching detail makeup package:", err);
    throw err
  }
};

//get Detail Makeup
export const getDataProductFromDetailMakeupPackage = async (id) => {
  return axios.get(`${API_BASE_URL}/makeup-budget/${id}`);
};
