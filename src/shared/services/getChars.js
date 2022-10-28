import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const header = {"Authorization": `Bearer ${process.env.REACT_APP_LOTR_API_KEY}`}

export const getChars = createApi({
    reducerPath: "getChars",
    baseQuery: fetchBaseQuery({
        prepareHeaders: (headers) => {
            headers.set("Authorization", `Bearer ${process.env.REACT_APP_LOTR_API_KEY}`);
            return headers;
        },
        baseUrl: "https://the-one-api.dev/v2/",
    }),
    endpoints: (builder) => ({
        getCharsByName: builder.query({
            query: (name) => `character?name=/${name}/i`,
            // transformResponse: (response) => {
            //     return {

            //     }
            // }
        }),
        getCharByID: builder.query({
            query: (id) => `character/${id}`,
        }),
        getQuotesByChar: builder.query({
            query: (id) => `character/${id}/quote`,
            transformResponse: (response) => {
                return response.docs;
            },
        }),
    }),
});

//"Authorization", `Bearer ${process.env.REACT_APP_LOTR_API_KEY}`

export const { useLazyGetCharsByNameQuery, useLazyGetQuotesByCharQuery, useGetCharByIDQuery, useGetQuotesByCharQuery, useGetCharsByNameQuery } = getChars;

// /character
// partial char search use regex pattern: character?name=/bagg/i
// specific char: /character/{id}
// quotes of specific char: /character/{id}/quote

// gandalf
// id: 5cd99d4bde30eff6ebccfea0
