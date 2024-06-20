import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  books: [],
  newBooks: [],
  userProfile: null,
};

const propertiesReducer = createSlice({
  name: "properties",
  initialState,
  reducers: {



  },
});

export default propertiesReducer;
