import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const savedId = localStorage.getItem("user_id") || uuidv4();
localStorage.setItem("user_id", savedId);

interface UserState {
  id: string;
}

const initialState: UserState = { id: savedId };

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {}
});

export default userSlice.reducer;
