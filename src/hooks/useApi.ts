import axios from "axios";

const authToken = localStorage.getItem("authToken");

const api = axios.create({
  baseURL: process.env.REACT_APP_API,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json;version=v1_web",
    Authorization: authToken ? `Bearer ${authToken}` : "",
  },
});

export const useApi = () => ({
  signin: async (email: string, password: string) => {
    const response = await api.post("/login/", { email, password });
    return response.data;
  },

  getProfile: async () => {
    const response = await api.get('/profile/', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`
      }
    });
    return response.data;
  }
});
