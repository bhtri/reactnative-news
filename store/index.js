import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './slices/category';

export default store = configureStore({
    reducer: {
        Category: categoryReducer,
    }
});