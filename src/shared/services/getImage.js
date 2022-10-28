//! does not work: https://api.cognitive.microsoft.com/bing/v7.0/images/search
//? works: https://api.bing.microsoft.com/v7.0/images/search

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const getImage = createApi({
    //need to add auth header
    reducerPath: "getImage",
    baseQuery: fetchBaseQuery({ baseUrl: "https://api.bing.microsoft.com/v7.0/images/search" }),
    endpoints: (builder) => ({
        getImageByName: builder.query({
            query: (name) => `?q=${name}`,
        }),
    }),
});

export const { useGetImageByNameQuery } = getImage;
