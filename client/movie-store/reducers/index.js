import { sessionApi } from '../services/sessionApi'
import { combineReducers } from '@reduxjs/toolkit'
import { movieApi } from '../services/moviesApi'
import sessionReducer from './sessionReducer'
import movieReducer from './movieReducers'

const rootReducer = combineReducers({
  session: sessionReducer,
  movie: movieReducer,
  [sessionApi.reducerPath]: sessionApi.reducer,
  [movieApi.reducerPath]: movieApi.reducer,
  
})

export default rootReducer