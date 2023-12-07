import { configureStore } from "@reduxjs/toolkit";

//** IMPORT THE REDUCERS */

import movieReducer from "../features/movies/slice";
export const store = configureStore({
  reducer: {
    movies: movieReducer,
  },
});
