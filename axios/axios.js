import axios from 'axios';
import { useUser } from '@/contexts/UserContext';

const API_URL = 'http://127.0.0.1:8000/api/v1';


export const useAxiosInstance = () => {
  const { user } = useUser();

  return axios.create({
    baseURL: API_URL,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${user?.token || ''}`,
    },
  });
};
