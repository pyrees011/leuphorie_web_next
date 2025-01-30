import { useAxiosInstance } from '@/axios/axios'


export const taskService = {
  getTasks: async (axiosInstance) => {
    const { data } = await axiosInstance.get(`/categories`)
    return data
  },

  updateTaskStatus: async (axiosInstance, { categoryId, taskId, status }) => {
    const { data } = await axiosInstance.patch(
      `/categories/${categoryId}/tasks/${taskId}/status`, 
      { status }
    );
    return data;
  },

  createTask: async (task, categoryId, axiosInstance) => {
    const { data } = await axiosInstance.post(`/categories/${categoryId}/tasks`, task)
    return data
  },

  deleteTask: async (categoryId, taskId, axiosInstance) => {
    console.log("categoryId service", categoryId);
    console.log("taskId service", taskId);
    await axiosInstance.delete(`/categories/${categoryId}/tasks/${taskId}`)
  }
} 