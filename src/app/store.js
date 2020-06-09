import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import usersReducer from "../features/users/usersSlice";
import offlineSync from "../offline-sync";

const initialState = { users: {} };
// const preloadedState = JSON.parse(
//   localStorage.getItem("state") || JSON.stringify(initialState)
// );

export default configureStore({
  reducer: {
    users: usersReducer,
    // preloadedState,
  },
  middleware: [...getDefaultMiddleware(), offlineSync],
});
