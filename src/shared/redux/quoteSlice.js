import { createSlice } from "@reduxjs/toolkit";

export const quoteSlice = createSlice({
    name: "quote",
    initialState: null,
    reducers: {
        setQuote: (state, action) => action.payload,
        clearQuote: () => null,
    },
});

export const { setQuote, clearQuote } = quoteSlice.actions;

export default quoteSlice.reducer;
