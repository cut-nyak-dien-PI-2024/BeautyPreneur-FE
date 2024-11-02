import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading:false,
  error:""
};

export const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload
    }
  },
});

export const { setLoading } = generalSlice.actions;

export default generalSlice.reducer;
