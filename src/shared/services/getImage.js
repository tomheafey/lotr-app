//! does not work: https://api.cognitive.microsoft.com/bing/v7.0/images/search
//? works: https://api.bing.microsoft.com/v7.0/images/search

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";

export const getImage = createApi({
    reducerPath: "getImage",
    baseQuery: fetchBaseQuery({ baseUrl: "https://api.bing.microsoft.com/v7.0/images/search" }),
    endpoints: (builder) => ({
        getPic: builder.query({
            query: (term) => `?q=${term}`,
        }),
    }),
});

export const { getPic } = getImage;
