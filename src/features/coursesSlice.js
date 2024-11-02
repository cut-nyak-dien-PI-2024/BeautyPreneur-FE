import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataCourses: [],
  isLoading:false,
  isError:false,
  dataDetailCourses:{},
  keepDataForFilter:[] //data for everything related to filter
};

export const coursesSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    updateLoadingCourse: (state, action) => {
      state.isLoading = action.payload;
    },
    updateErrorCourse: (state, action) => {
      state.isError = action.payload;
    },
    addCourses: (state, action) => {
      // console.log(action.payload, "ini action payload courses");

      // state.dataCourses = action.payload.data;
      state.dataCourses = action.payload;
      state.keepDataForFilter = action.payload; //for filter
      state.isLoading = false;
      state.isError = "";
    },
    addDetailCourse: (state, action) => {
      // console.log(action.payload, 'ini action payload')
      state.dataDetailCourses = action.payload;
      state.isLoading = false;
      state.isError = "";
    },
    updateListCourse : (state, action) => {
      state.dataCourses = action.payload;
      state.isLoading = false;
      state.isError = "";
    }
  },
});

export const {
  updateLoadingCourse,
  updateErrorCourse,
  addCourses,
  addDetailCourse,
  updateListCourse,
} = coursesSlice.actions;

export default coursesSlice.reducer;
