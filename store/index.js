import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './slices/category';
import settingReducer from './slices/setting';
import articleReducer from './slices/article';

export default store = configureStore({
    reducer: {
        Category: categoryReducer,
        Setting: settingReducer,
        Article: articleReducer,
    }
});