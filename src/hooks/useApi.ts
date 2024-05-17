import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API
});

export const useApi = () => ({
    validateToken: async (token: string) => {
        const response = await api.post('/validate', { token });
        return response.data;
    },
    signIn: async (email: string, password: string) => {
        const response = await api.post('/signIn', { email, password });
        return response.data;
    },
    logout: async () => {
        const response = await api.post('/logOut');
        return response.data;
    }

});