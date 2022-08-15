import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ArticleService from '../../services/article';

export const fetchArticleWithCategoryID = createAsyncThunk(
    'article/fetchArticleWithCategoryID',
    async (data, thunkAPI) => {
        const response = await ArticleService.getArticleWithCategoryID(data)
        return response.data
    }
)

const articleSlice = createSlice({
    name: 'Article',
    initialState: {
        article: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleWithCategoryID.fulfilled, (state, action) => {
                console.log('fetchArticleWithCategoryID.fulfilled');
                state.article = [...action.payload, ...state.article];
            })
            .addCase(fetchArticleWithCategoryID.pending, (state, action) => {
                console.log('fetchArticleWithCategoryID.pending');
            })
            .addCase(fetchArticleWithCategoryID.rejected, (state, action) => {
                console.log('fetchArticleWithCategoryID.rejected');
                console.log(action.error.message);
            })
    },
});

export const { } = articleSlice.actions;
export default articleSlice.reducer;