import { createSlice } from "@reduxjs/toolkit";

export const detailSlice = createSlice({
    name: "detail",
    initialState: null,
    reducers: {
        setDetail: (state, action) => action.payload,
        clearDetail: () => null,
    },
});

export const { setDetail, clearDetail } = detailSlice.actions;

export default detailSlice.reducer;
