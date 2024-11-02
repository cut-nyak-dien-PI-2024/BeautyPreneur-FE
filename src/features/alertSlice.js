import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataAlerts: {
    title:"",
    message:"",
    status:false,
    type:""
  }  
};

export const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    isShowingAlerts:(state, action) => {
      let {title, message, status, type} = action.payload;
      
      state.dataAlerts.title = title;      
      state.dataAlerts.message = message;
      state.dataAlerts.status = status;
      state.dataAlerts.type = type;

    }
  },
});

export const { isShowingAlerts } = alertSlice.actions;

export default alertSlice.reducer;
