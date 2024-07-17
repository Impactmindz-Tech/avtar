import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  productsList: [],
};

const ExperinceSlice = createSlice({
  name: "ExperinceProduct",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setProductList: (state, action) => {
      state.productsList = action.payload;
    },
  },
});

export const { setProducts, setProductList } = ExperinceSlice.actions;

export default ExperinceSlice;
