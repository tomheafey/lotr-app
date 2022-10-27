import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./searchSlice";
import userReducer from "./userSlice";
import quoteReducer from "./quoteSlice";
import detailReducer from "./detailSlice";

export default configureStore({
    reducer: {
        detail: detailReducer,
        quote: quoteReducer,
        search: searchReducer,
        user: userReducer,
    },
});
