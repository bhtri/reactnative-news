import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './slices/category';
import settingReducer from './slices/setting';

export default store = configureStore({
    reducer: {
        Category: categoryReducer,
        Setting: settingReducer
    }
});