import { configureStore } from '@reduxjs/toolkit';
import ExperinceSlice from './slice/experinceS/ExperinceSlice';

const store = configureStore({
    reducer: {
        [ExperinceSlice.reducerPath]: ExperinceSlice.reducer,
    },

});

export default store;