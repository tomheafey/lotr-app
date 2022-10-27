import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import searchReducer from "./searchSlice";
import authReducer from "./authSlice";
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
        auth: authReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(getImage.middleware, getChars.middleware),
});
