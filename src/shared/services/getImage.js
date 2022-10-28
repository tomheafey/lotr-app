//! does not work: https://api.cognitive.microsoft.com/bing/v7.0/images/search
//? works: https://api.bing.microsoft.com/v7.0/images/search

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const getImage = createApi({
    //need to add auth header
    reducerPath: "getImage",
    baseQuery: fetchBaseQuery({
        prepareHeaders: (headers) => {
            headers.set("Ocp-Apim-Subscription-Key", process.env.REACT_APP_BING_API_KEY);
            return headers;
        },
        baseUrl: "https://api.bing.microsoft.com/v7.0/images/search",
    }),
    endpoints: (builder) => ({
        getImageByName: builder.query({
            query: (name) => `?q=${name}&count=10`, //limiting to 10 results for now
            transformResponse: (response) => {
                return response.value.map((val) => ({
                    url: val.contentUrl,
                }));
            },
        }),
    }),
});

export const { useLazyGetImageByNameQuery, useGetImageByNameQuery } = getImage;
