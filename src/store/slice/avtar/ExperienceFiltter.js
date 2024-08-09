import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  experinceStatus: [],
  experinceList: [],
};

const ExperinceStatusSlice = createSlice({
  name: "avatar",
  initialState,
  reducers: {
    setExperinceStatus: (state, action) => {
      state.experinceStatus = action.payload;
    },
    setExperinceList: (state, action) => {
      state.experinceList = action.payload;
    },
  },
});

export const { setExperinceStatus, setExperinceList } = ExperinceStatusSlice.actions;

export default ExperinceStatusSlice;
