import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import PriceService from '../../services/price';

export const fetchPriceGold = createAsyncThunk(
    'price/fetchPriceGold',
    async (data, thunkAPI) => {
        const response = await PriceService.getGold()
        return response.data
    }
)

export const fetchPriceCoin = createAsyncThunk(
    'price/fetchPriceCoin',
    async (data, thunkAPI) => {
        const response = await PriceService.getCoin()
        return response.data
    }
)

const priceSlice = createSlice({
    name: 'Price',
    initialState: {
        gold: [],
        coin: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPriceGold.fulfilled, (state, action) => {
                console.log('fetchPriceGold.fulfilled');
                state.gold = action.payload;
            })
            .addCase(fetchPriceGold.pending, (state, action) => {
                console.log('fetchPriceGold.pending');
            })
            .addCase(fetchPriceGold.rejected, (state, action) => {
                console.log('fetchPriceGold.rejected');
                console.log(action);
                console.log(action.error.message);
            })
            .addCase(fetchPriceCoin.fulfilled, (state, action) => {
                console.log('fetchPriceCoin.fulfilled');
                state.coin = action.payload;
            })
            .addCase(fetchPriceCoin.pending, (state, action) => {
                console.log('fetchPriceCoin.pending');
            })
            .addCase(fetchPriceCoin.rejected, (state, action) => {
                console.log('fetchPriceCoin.rejected');
                console.log(action);
                console.log(action.error.message);
            })
    },
});

export const { } = priceSlice.actions;
export default priceSlice.reducer;