import { useAxiosInstance } from '@/axios/axios'


export const taskService = {
  getTasks: async (axiosInstance) => {
    const { data } = await axiosInstance.get(`/categories`)
    return data
  },

  updateTaskStatus: async (axiosInstance, { taskId, status }) => {
    const { data } = await axiosInstance.patch(`/categories/${taskId}`, { status })
    return data
  },

  createTask: async (task, axiosInstance) => {
    const { data } = await axiosInstance.post(`/categories`, task)
    return data
  },

  deleteTask: async (taskId, axiosInstance) => {
    await axiosInstance.delete(`/categories/${taskId}`)
  }
} 