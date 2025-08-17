import axios from "axios"
import {logout} from "@/api/logout";

const BASE_API_URL = "/api"

export const axiosInstance = axios.create({
    baseURL: BASE_API_URL,
});

axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem('accessToken');

    if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            const refreshToken = localStorage.getItem('refreshToken');
            if (!refreshToken) {
                logout()
                return Promise.reject(error);
            }

            try {
                const res = await axios.post(`${BASE_API_URL}/auth/refresh`, {
                    refreshToken,
                });

                const {accessToken: newAccessToken, refreshToken: newRefreshToken} = res.data;

                localStorage.setItem('accessToken', newAccessToken);
                localStorage.setItem('refreshToken', newRefreshToken);

                originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
                return axiosInstance(originalRequest);
            } catch (refreshError) {
                logout()
                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);
    }
);
