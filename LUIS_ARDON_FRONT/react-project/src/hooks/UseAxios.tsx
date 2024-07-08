import axios from 'axios';

export const useAxios = () => {
  const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000',
  });

  return axiosInstance;
};