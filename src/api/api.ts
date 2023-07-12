import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL, MEROKU_API_KEY } from "./constants";

// React Toolkit Setup
export const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
        headers: {
            Accept: `application/json`,
            apikey: MEROKU_API_KEY ?? "",
        }
    }),
    endpoints: () => ({}),
});