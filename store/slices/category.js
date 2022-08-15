import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import CategoryService from '../../services/category';

export const fetchCategory = createAsyncThunk(
    'category/fetchCategory',
    async (data, thunkAPI) => {
        const response = await CategoryService.getCategory()
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
        builder
            .addCase(fetchCategory.fulfilled, (state, action) => {
                console.log('fetchCategory.fulfilled');
            })
            .addCase(fetchCategory.pending, (state, action) => {
                console.log('fetchCategory.pending');
            })
            .addCase(fetchCategory.rejected, (state, action) => {
                console.log('fetchCategory.rejected');
            })
    },
});

export const { } = categorySlice.actions;
export default categorySlice.reducer;