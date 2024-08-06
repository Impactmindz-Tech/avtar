import { configureStore } from '@reduxjs/toolkit';
import ExperinceSlice from './slice/experinceS/ExperinceSlice';
import ExperinceStatusSlice from './slice/avtar/ExperienceFiltter';

const store = configureStore({
    reducer: {
        [ExperinceSlice.reducerPath]: ExperinceSlice.reducer,
        [ExperinceStatusSlice.reducerPath]: ExperinceStatusSlice.reducer,
    },

});

export default store;