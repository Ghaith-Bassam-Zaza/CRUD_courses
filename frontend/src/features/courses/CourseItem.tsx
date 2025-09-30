import React, { useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { updateCourse, deleteCourse } from "./coursesSlice";
import type { Course } from "../../api/coursesApi";

interface Props {
  course: Course;
}

const CourseItem: React.FC<Props> = ({ course }) => {
  const dispatch = useAppDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(course.title);
  const [category, setCategory] = useState(course.category);
  const [duration, setDuration] = useState(course.duration);

  const handleUpdate = () => {
    if (course.id) {
      dispatch(
        updateCourse({
          id: course.id,
          data: { userId: course.userId, title, category, duration },
        })
      );
      setIsEditing(false);
    }
  };

  const handleDelete = () => {
    if (course.id) dispatch(deleteCourse(course.id));
  };

  return (
    <div className="bg-gray-800 shadow-md rounded-lg p-4 w-full md:grid md:grid-cols-5 md:gap-4 flex flex-col space-y-4 md:space-y-0 items-center">
      {isEditing ? (
        <>
          <input
            className="h-12 px-4 rounded-md border border-gray-600 bg-gray-700 text-white placeholder-gray-400 text-lg focus:outline-none focus:ring-2 focus:ring-green-500 w-full"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            className="h-12 px-4 rounded-md border border-gray-600 bg-gray-700 text-white placeholder-gray-400 text-lg focus:outline-none focus:ring-2 focus:ring-green-500 w-full"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <input
            className="h-12 px-4 rounded-md border border-gray-600 bg-gray-700 text-white placeholder-gray-400 text-lg focus:outline-none focus:ring-2 focus:ring-green-500 w-full"
            type="number"
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
          />
          <button
            className="h-12 px-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-md transition-colors w-full"
            onClick={handleUpdate}
          >
            Save
          </button>
          <button
            className="h-12 px-4 bg-gray-500 hover:bg-gray-600 text-white font-semibold rounded-md transition-colors w-full"
            onClick={() => setIsEditing(false)}
          >
            Cancel
          </button>
        </>
      ) : (
        <>
          <div className="col-span-3 text-white text-lg font-semibold w-full">
            {course.title} - {course.category} ({course.duration}h)
          </div>
          <button
            className="h-12 px-4 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-md transition-colors w-full"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
          <button
            className="h-12 px-4 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-md transition-colors w-full"
            onClick={handleDelete}
          >
            Delete
          </button>
        </>
      )}
    </div>
  );
};

export default CourseItem;
