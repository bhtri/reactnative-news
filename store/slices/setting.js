import { createSlice } from '@reduxjs/toolkit';

const SettingSlice = createSlice({
    name: 'Setting',
    initialState: {
        home: [
            { id: 1, type: 'grid', status: true },
            { id: 8, type: 'column', status: true },
            { id: 3, type: 'grid', status: true },
        ]
    },
    reducers: {}
});

export const { } = SettingSlice.actions;
export default SettingSlice.reducer;