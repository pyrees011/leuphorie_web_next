import { useAxiosInstance } from '@/axios/axios'


export const taskService = {
  getTasks: async (axiosInstance, userId) => {
    const { data } = await axiosInstance.get(`categories/${userId}`)
    return data
  },

  updateTaskStatus: async (axiosInstance, userId, { categoryId, taskId, status }) => {
    const { data } = await axiosInstance.patch(
      `categories/${userId}/${categoryId}/tasks/${taskId}/status`, 
      { status }
    );
    return data;
  },

  createTask: async (userId, task, categoryId, axiosInstance) => {
    const { data } = await axiosInstance.post(`categories/${userId}/${categoryId}/tasks`, task)
    return data
  },

  deleteTask: async (userId, categoryId, taskId, axiosInstance) => {
    await axiosInstance.delete(`categories/${userId}/${categoryId}/tasks/${taskId}`)
  }
} 