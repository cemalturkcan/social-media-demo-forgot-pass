import axios from 'axios'

export const BASE_URL = import.meta.env.VITE_BE_BASE_URL
const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 1000000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
  paramsSerializer: {
    indexes: null,
  },
})

export const axiosInstance = apiClient
