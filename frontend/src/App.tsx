import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./app/store";
import { fetchCourses } from "./features/courses/coursesSlice";
import CoursesPage from "./features/courses/CoursesPage";

const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const userId = useSelector((state: RootState) => state.user.id);

  useEffect(() => {
    if (userId) {
      dispatch(fetchCourses(userId));
    }
  }, [dispatch, userId]);

  return (
    <div >
      
      <CoursesPage />
    </div>
  );
};

export default App;
