import { configureStore } from '@reduxjs/toolkit';
import CartSlice from './slice/userSlice';
import ExperinceProduct from './slice/ExperinceProduct';

const store = configureStore({
    reducer: {
        [ExperinceProduct.reducerPath]: ExperinceProduct.reducer,
        [CartSlice.reducerPath]: CartSlice.reducer,
        // Add other reducers here
    },

});

export default store;