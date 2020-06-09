import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const initialState = {
  loading: false,
  error: null,
  list: {},
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    loading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload.message;
    },
    setUsers: (state, action) => {
      state.list = action.payload.data;
    },
  },
});

export const { setUsers, loading, setError } = usersSlice.actions;

export const getUsers = (amount) => (dispatch) => {
  loading(true);
  axios({
    method: "get",
    url: "https://reqres.in/api/users",
  })
    .then((res) => {
      dispatch(loading(false));
      dispatch(setUsers(res.data));
    })
    .catch((err) => {
      dispatch(loading(false));
      dispatch(setError(err));
      // alert("an error occur");
    });
};

export const selectUsers = (state) => state.users.list;
export const selectLoading = (state) => state.users.loading;
export const selectError = (state) => state.users.error;

export default usersSlice.reducer;
