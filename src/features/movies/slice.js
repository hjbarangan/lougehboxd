import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "../../services/axios";

const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  errorMessage: "",
};

export const getMovies = createAsyncThunk("movies/getMovies", async () => {
  const response = await axios.get("/movies");
  return response.data;
});

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMovies.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMovies.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data = payload;
      })
      .addCase(getMovies.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = payload;
      });
  },
});

export default moviesSlice.reducer;
