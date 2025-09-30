import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "../features/courses/coursesSlice";
import userReducer from "./userSilce";

export const store = configureStore({
  reducer: {
    courses: coursesReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
