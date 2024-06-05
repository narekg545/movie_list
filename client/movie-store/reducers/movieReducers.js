'use client'

import { createSlice } from "@reduxjs/toolkit"
import { initialState } from "../initalState"
import { movieApi } from "../services/moviesApi"

export const movieSlice = createSlice({
name: 'movie',
initialState: initialState.movies,
extraReducers: builder => {
    builder.addMatcher(movieApi.endpoints.getmovies.matchFulfilled, (state, action) => {
      state.allMovies = action.payload
    }),
     
      builder.addMatcher(movieApi.endpoints.createmovie.matchFulfilled, (state, action) => {
        state.allMovies = [action.payload.movie, ...state.allMovies]
      })
  }
})

export default movieSlice.reducer