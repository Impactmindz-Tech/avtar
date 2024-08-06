import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  experinceStatus: [],
};

const ExperinceStatusSlice = createSlice({
  name: "avatar",
  initialState,
  reducers: {
    setExperinceStatus: (state, action) => {
      state.experinceStatus = action.payload;
    },
  },
});

export const { setExperinceStatus } = ExperinceStatusSlice.actions;

export default ExperinceStatusSlice;
