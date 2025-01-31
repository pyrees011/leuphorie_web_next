import axios from 'axios';
import { auth } from '../config/firebase-config';

export const useAxiosInstance = (service) => {

  let API_BASE_URL;

  if (service === "settings") {
    API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL_SETTINGS;
  } else if (service === "questionnaire") {
    API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL_QUESTIONNAIRE;
  } else if (service === "chat") {
    API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL_CHAT;
  } else if (service === "contact") {
    API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL_CONTACT;
  } else if (service === "task") {
    API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL_TASK;
  }

  const instance = axios.create({
    baseURL: API_BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  instance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token');
      if (token) {
        // Make sure to format the token exactly as expected by your backend
        config.headers.Authorization = `Bearer ${token.trim()}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // Add response interceptor to handle token expiration
  instance.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;

      // If the error is unauthorized and we haven't tried to refresh yet
      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        try {
          // Get current user from Firebase
          const user = auth.currentUser;
          if (user) {
            // Force refresh the token
            const newToken = await user.getIdToken(true);
            localStorage.setItem('token', newToken);
            
            // Update the failed request's authorization header
            originalRequest.headers.Authorization = `Bearer ${newToken}`;
            
            // Retry the request with new token
            return instance(originalRequest);
          }
        } catch (refreshError) {
          console.error("Error refreshing token:", refreshError);
        }
      }

      return Promise.reject(error);
    }
  );

  return instance;
};
