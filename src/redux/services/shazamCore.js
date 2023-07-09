import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

    export const shazamApi = createApi({
        reducerPath: 'shazamApi',
        baseQuery: fetchBaseQuery({
            baseUrl:'https://shazam.p.rapidapi.com',
            prepareHeaders: (headers) => {
                headers.set('X-RapidAPI-Key', '7dac90ae48msh6d170bae79f7fbep145974jsn0914c7c320a7')

                return headers;
            },
        }),
        endpoints: (builder) => ({
            getTopCharts: builder.query({query: () => '/charts/list'}),
        })
    });

    export const {
        useGetTopChartsQuery,
    } = shazamApi;