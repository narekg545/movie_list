import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { movieApi } from "./services/moviesApi";
import { sessionApi } from "./services/sessionApi";
import rootReducer from "./reducers";

const store = configureStore({
reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(
      sessionApi.middleware,
      movieApi.middleware,
    )
})

setupListeners(store.dispatch)

export default store;