import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: true, //!set back to false
    reducers: {
        setAuth: () => true,
        revokeAuth: () => false,
    },
});

export const { setAuth, revokeAuth } = authSlice.actions;

export default authSlice.reducer;
