import axios from "axios";

export const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_ENDPOINT,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 60000,
});

axiosClient.interceptors.response.use((res) => {
  if (res.data?.data) {
    return res.data.data;
  }

  return res.data;
});
