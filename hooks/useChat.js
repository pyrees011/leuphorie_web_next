import { useQuery, useMutation, useQueryClient } from "react-query";
import { useRouter } from 'next/router';

// contexts
import { useUser } from "@/contexts/UserContext";

// axios
import { useAxiosInstance } from "@/axios/axios";

// Services
import { chatService } from "@/services/chatService";

export const useChat = (sessionId = null) => {
    const { user, isLoading } = useUser();
    const queryClient = useQueryClient();
    const axiosInstance = useAxiosInstance("chat");
    const router = useRouter();

    const getMessagesHook = useQuery({
        queryKey: ["messages", user?.id, sessionId],
        queryFn: async () => chatService.getMessages(axiosInstance, user.id, sessionId),
        enabled: !!user?.token && !isLoading && !!sessionId,
        retry: 1
    });

    const sendMessageHook = useMutation(
        async ({ message, sessionId = null }) => {
            const response = await chatService.sendMessage(axiosInstance, message, user.id, sessionId);
            return response.data;
        },
        {
            onSuccess: (data) => {
                console.log('data', data)
                // Assuming your backend returns the session ID
                const sessionId = data.session_id;
                router.push(`/chat/${sessionId}`);
                queryClient.invalidateQueries(["messages", user?.id, sessionId]);
            }
        }
    );

    return {
        messages: getMessagesHook.data,
        isLoading: getMessagesHook.isLoading,
        sendMessage: sendMessageHook.mutate,
        isError: getMessagesHook.isError,
        error: getMessagesHook.error
    };
};
