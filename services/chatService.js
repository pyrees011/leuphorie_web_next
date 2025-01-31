import { useAxiosInstance } from "@/axios/axios";

export const chatService = {
  sendMessage: async (axiosInstance, message, userId, sessionId) => {
    const messageBlock = {
        message,
        session_id: sessionId
    }
    return await axiosInstance.post(`/chat/${userId}`, messageBlock)
  },

  getMessages: async (axiosInstance, userId, sessionId) => {
    const response = await axiosInstance.get(`/chat/${userId}`, {
        params: {
            session_id: sessionId
        }
    })
    return response.data
  }
}