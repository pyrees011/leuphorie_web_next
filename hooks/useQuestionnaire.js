import { useQuery, useMutation, useQueryClient } from "react-query";

// contexts
import { useUser } from "@/contexts/UserContext";

// axios
import { useAxiosInstance } from "@/axios/axios";

// Services
import { questionnaireService } from "@/services/questionnaireService";

export const useQuestionnaire = () => {
  const { user, isLoading } = useUser();
  const queryClient = useQueryClient();
  const axiosInstance = useAxiosInstance();

  const { data: questionnaire, isLoading: questionnaireLoading, error: questionnaireError } = useQuery({
    queryKey: ["questionnaire", user.id],
    queryFn: () => questionnaireService.getQuestionnaireForUser(axiosInstance, user.id),
    enabled: !!user.token && !isLoading,
    retry: 1
  })

//   const { data: questionnaireParticular, isLoading: questionnaireParticularLoading, error: questionnaireParticularError } = useQuery({
//     queryKey: ["questionnaireParticular", user.id, questionnaire.id],
//     queryFn: () => questionnaireService.getQuestionnaireParticularForUser(axiosInstance, user.id, questionnaire.id),
//     enabled: !!user.token && !isLoading && !!questionnaire,
//     retry: 1
//   })

  const createQuestionnaire = useMutation(
    (questionnaire) => questionnaireService.sendQuestionnaire(axiosInstance, questionnaire),
    {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["questionnaire", user.id] })
      }
    }
  )

  const updateQuestionnaire = useMutation(
    ({ questionId, questionnaire }) => questionnaireService.updateQuestionnaireParticularForUser(axiosInstance, user.id, questionId, questionnaire),
    {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["questionnaire", user.id] })
      }
    }
  )

  const deleteQuestionnaire = useMutation(
    (questionnaireId) => questionnaireService.deleteQuestionnaireParticularForUser(axiosInstance, user.id, questionnaireId),
    {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["questionnaire", user.id] })
      }
    }
  )

  return {
    questionnaire,
    questionnaireLoading,
    questionnaireError,
    createQuestionnaire: createQuestionnaire.mutate,
    updateQuestionnaire: updateQuestionnaire.mutate,
    deleteQuestionnaire: deleteQuestionnaire.mutate
  }
}