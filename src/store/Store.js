import { configureStore } from '@reduxjs/toolkit';
import CartSlice from './slice/userSlice';

const store = configureStore({
    reducer: {
        [CartSlice.reducerPath]: CartSlice.reducer,
        // Add other reducers here
    },

});

export default store;