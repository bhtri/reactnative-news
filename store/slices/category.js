import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import CategoryService from '../../services/category';

export const fetchCategory = createAsyncThunk(
    'category/fetchCategory',
    async (data, thunkAPI) => {
        const response = await CategoryService.getCategory()
        console.log(response.data);
        return response.data
    }
)

const categorySlice = createSlice({
    name: 'Post',
    initialState: {
        category: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCategory.fulfilled, (state, action) => {
            console.log('aa');
        })
    },
});

export const { } = categorySlice.actions;
export default categorySlice.reducer;