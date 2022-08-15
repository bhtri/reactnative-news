import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ArticleService from '../../services/article';

export const fetchArticleWithCategoryID = createAsyncThunk(
    'article/fetchArticleWithCategoryID',
    async (data, thunkAPI) => {
        const response = await ArticleService.getArticleWithCategoryID(data)
        return response.data
    }
)

export const fetchAllArticleWithCategoryID = createAsyncThunk(
    'article/fetchAllArticleWithCategoryID',
    async (data, thunkAPI) => {
        const response = await ArticleService.getAllArticleWithCategoryID(data)
        return response.data
    }
)

const articleSlice = createSlice({
    name: 'Article',
    initialState: {
        article: [],
        allArticle: [],
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
            .addCase(fetchAllArticleWithCategoryID.fulfilled, (state, action) => {
                console.log('fetchAllArticleWithCategoryID.fulfilled');
                state.allArticle = action.payload;
            })
            .addCase(fetchAllArticleWithCategoryID.pending, (state, action) => {
                console.log('fetchAllArticleWithCategoryID.pending');
            })
            .addCase(fetchAllArticleWithCategoryID.rejected, (state, action) => {
                console.log('fetchAllArticleWithCategoryID.rejected');
                console.log(action.error.message);
            })
    },
});

export const { } = articleSlice.actions;
export default articleSlice.reducer;