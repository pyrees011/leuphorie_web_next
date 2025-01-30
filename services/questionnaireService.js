import { useAxiosInstance } from "@/axios/axios";

export const questionnaireService = {
  sendQuestionnaire: async (axiosInstance, questionnaire) => {
    await axiosInstance.post("/questionnaire", questionnaire)
  },

  getQuestionnaireForUser: async (axiosInstance, userId) => {
    const response = await axiosInstance.get(`/questionnaire/${userId}`)
    return response.data
  },

  getQuestionnaireParticularForUser: async (axiosInstance, userId, questionnaireId) => {
    const response = await axiosInstance.get(`/questionnaire/${userId}/${questionnaireId}`)
    return response.data
  },

  updateQuestionnaireParticularForUser: async (axiosInstance, userId, questionnaireId, questionnaire) => {
    await axiosInstance.put(`/questionnaire/${userId}/${questionnaireId}`, questionnaire)
  },

  deleteQuestionnaireParticularForUser: async (axiosInstance, userId, questionnaireId) => {
    await axiosInstance.delete(`/questionnaire/${userId}/${questionnaireId}`)
  }
}