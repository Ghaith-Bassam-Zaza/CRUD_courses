import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import coursesApi from "../../api/coursesApi";
import type { Course } from "../../api/coursesApi";

export const fetchCourses = createAsyncThunk("courses/fetch", async (userId: string) => {
  return await coursesApi.getCourses(userId);
});

export const addCourse = createAsyncThunk("courses/add", async (course: Course) => {
  return await coursesApi.addCourse(course);
});

export const updateCourse = createAsyncThunk(
  "courses/update",
  async ({ id, data }: { id: number; data: Omit<Course, "id"> }) => {
    return await coursesApi.updateCourse(id, data);
  }
);

export const deleteCourse = createAsyncThunk("courses/delete", async (id: number) => {
  await coursesApi.deleteCourse(id);
  return id;
});

const coursesSlice = createSlice({
  name: "courses",
  initialState: [] as Course[],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.fulfilled, (_, action) => action.payload)
      .addCase(addCourse.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(updateCourse.fulfilled, (state, action) => {
        const idx = state.findIndex(c => c.id === action.payload.id);
        if (idx !== -1) state[idx] = action.payload;
      })
      .addCase(deleteCourse.fulfilled, (state, action) => {
        return state.filter(c => c.id !== action.payload);
      });
  }
});

export default coursesSlice.reducer;
