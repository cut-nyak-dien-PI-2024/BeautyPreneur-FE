import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataNotifications: {
    title:"",
    message:"",
    status:false
  }  
};

export const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    isShowingNotification:(state, action) => {
      let {title, message, status} = action.payload;
      state.dataNotifications.title = title;      
      state.dataNotifications.message = message;
      state.dataNotifications.status = status;
    }
  },
});

export const { isShowingNotification } = notificationSlice.actions;

export default notificationSlice.reducer;
