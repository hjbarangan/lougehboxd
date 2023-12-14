import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "../../services/axios";

//STATE
const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  errorMessage: "",
};

//ACTIONS?
export const getUsers = createAsyncThunk("users/getUsers", async () => {
  const response = await axios.get("/users");
  return response.data;
});

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUsers.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data = payload;
      })
      .addCase(getUsers.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = payload;
      });
  },
});

//GETTERS?
export const selectAllUsers = (state) => state.users;

export const selectUserById = (state, userId) =>
  state.users.find((users) => users.id === userId);

export default usersSlice.reducer;
