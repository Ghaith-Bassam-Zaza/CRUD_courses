import axios from "axios";
const API_URL = "http://localhost:8000/courses/"; 

export interface Course {
  id?: number;
  userId: string;
  title: string;
  category: string;
  duration: number;
  createdAt?: string;
}

export default {
  getCourses: async (userId: string): Promise<Course[]> => {
    const res = await axios.get(`${API_URL}${userId}`);
    return res.data;
  },
  addCourse: async (course: Course): Promise<Course> => {
    const res = await axios.post(API_URL, course);
    return res.data;
  },
  updateCourse: async (id: number, data: Omit<Course, "id">): Promise<Course> => {
    const res = await axios.put(`${API_URL}${id}`, data);
    return res.data;
  },
  deleteCourse: async (id: number): Promise<void> => {
    await axios.delete(`${API_URL}${id}`);
  }
};
