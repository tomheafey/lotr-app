import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./searchSlice";
import userReducer from "./userSlice";
import quoteReducer from "./quoteSlice";
import detailReducer from "./detailSlice";
import { getImage } from "../services/getImage";
import { getChars } from "../services/getChars";

export default configureStore({
    reducer: {
        [getImage.reducerPath]: getImage.reducer,
        [getChars.reducerPath]: getChars.reducer,
        detail: detailReducer,
        quote: quoteReducer,
        search: searchReducer,
        user: userReducer,
    },
});
