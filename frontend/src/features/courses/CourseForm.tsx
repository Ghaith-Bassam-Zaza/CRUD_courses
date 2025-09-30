import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { addCourse } from "./coursesSlice";

const CourseForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const userId = useAppSelector((state) => state.user.id);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [duration, setDuration] = useState<number>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !category) return;

    dispatch(addCourse({ userId, title, category, duration }));
    setTitle("");
    setCategory("");
    setDuration(0);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-gray-800 p-6 rounded-lg shadow-md w-full"
    >
      <input
        className="h-12 px-4 rounded-md border border-gray-600 bg-gray-700 text-white placeholder-gray-400 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        className="h-12 px-4 rounded-md border border-gray-600 bg-gray-700 text-white placeholder-gray-400 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />
      <input
        className="h-12 px-4 rounded-md border border-gray-600 bg-gray-700 text-white placeholder-gray-400 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
        type="number"
        placeholder="Duration (h)"
        value={duration}
        onChange={(e) => setDuration(Number(e.target.value))}
        required
      />
      <button
        type="submit"
        className="h-12 px-6 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-md transition-colors w-full"
      >
        Add
      </button>
    </form>
  );
};

export default CourseForm;
