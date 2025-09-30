import React from "react";
import { useAppSelector } from "../../app/hooks";
import CourseItem from "./CourseItem";

const CourseList: React.FC = () => {
  const courses = useAppSelector((state) => state.courses);

  if (courses.length === 0)
    return (
      <p className="text-gray-400 text-center w-full">
        No courses added yet.
      </p>
    );

  return (
    <div className="space-y-4 w-full">
      {courses.map((course) => (
        <CourseItem key={course.id} course={course} />
      ))}
    </div>
  );
};

export default CourseList;
