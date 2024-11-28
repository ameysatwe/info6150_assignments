import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from "./jobsSlice";
import userReducer from "./usersSlice";

const store = configureStore({
  reducer: {
    jobs: jobsReducer,
    users: userReducer,
  },
});

export default store;
