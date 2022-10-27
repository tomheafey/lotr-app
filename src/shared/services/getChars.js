import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const getChars = createApi({
    reducerPath: "getChars",
    baseQuery: fetchBaseQuery({ baseUrl: "https://the-one-api.dev/v2/" }),
    endpoints: (builder) => ({
        getCharsByName: builder.query({
            query: (name) => `character?name=/${name}/i`,
        }),
        getCharByID: builder.query({
            query: (id) => `character/${id}`,
        }),
        getQuotesByChar: builder.query({
            query: (id) => `character/${id}/quote`,
        }),
    }),
});

export const { getCharsByName, getCharByID, getQuotesByChar } = getChars;

// /character
// partial char search use regex pattern: character?name=/bagg/i
// specific char: /character/{id}
// quotes of specific char: /character/{id}/quote

// gandalf
// id: 5cd99d4bde30eff6ebccfea0
