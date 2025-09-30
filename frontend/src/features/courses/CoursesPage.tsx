import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchCourses } from "./coursesSlice";
import CourseForm from "./CourseForm";
import CourseList from "./CourseList";

const CoursesPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const userId = useAppSelector((state) => state.user.id);

  useEffect(() => {
    if (userId) dispatch(fetchCourses(userId));
  }, [dispatch, userId]);

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="w-full">
        <h1 className="text-3xl font-bold mb-6 text-center text-white">
          My Courses
        </h1>

        <div className="mb-8 w-full">
          <CourseForm />
        </div>

        <div className="space-y-4 w-full">
          <CourseList />
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
