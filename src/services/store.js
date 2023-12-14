import { configureStore } from "@reduxjs/toolkit";

//** IMPORT THE REDUCERS */

import movieReducer from "../features/movies/slice";
import userReducer from "../features/users/slice";

export const store = configureStore({
  reducer: {
    movies: movieReducer,
    users: userReducer,
  },
});
