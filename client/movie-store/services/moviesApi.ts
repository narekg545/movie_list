import { createApi } from '@reduxjs/toolkit/query/react'
import { customBaseQuery } from './baseQuery'
import { apiHeaders } from '@/shared/helpers/applicationHelpers'

export const movieApi = createApi({
  reducerPath: 'movieApi',
  tagTypes: ['movies'],
  baseQuery: customBaseQuery,
  endpoints: builder => ({
    getmovies: builder.query({
      query: () => ({
        url: `/movie`,
        headers: apiHeaders()
      }),
      providesTags: ['movies']
    }),
    getmovie: builder.query({
      query: params => ({
        url: `/movie/${params?.id}`,
        headers: apiHeaders()
      })
    }),
    deletemovie: builder.mutation({
      query: params => ({
        url: `/movie/${params?.id}`,
        method: 'DELETE',
        headers: apiHeaders()
      })
    }),
    updatemovie: builder.mutation({
      query: params => ({
        url: `/movie/${params?.id}`,
        method: 'PUT',
        headers: apiHeaders()
      })
    }),
    createmovie: builder.mutation({
      query: params => ({
        url: `/movie`,
        method: 'POST',
        headers: apiHeaders(),
        body: { ...params }
      }),
      invalidatesTags: ['movies']
    })
  })
})

export const {
  useGetmoviesQuery,
  useLazyGetmoviesQuery,
  useDeletemovieMutation,
  useUpdatemovieMutation,
  useGetmovieQuery,
  useCreatemovieMutation
} = movieApi