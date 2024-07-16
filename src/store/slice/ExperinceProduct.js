import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const ExperinceProduct = createSlice({
  name: "ExperinceProduct",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { setProducts } = ExperinceProduct.actions;

export default ExperinceProduct;
