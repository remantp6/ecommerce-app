import axiosInstance from './axiosInstance';

// generic api call methods
export const apiClient = {
	get: async <T>(endpoint: string): Promise<T> => {
		const response = await axiosInstance.get<T>(endpoint);
		return response.data;
	},

	post: async <R, T>(endpoint: string, payload: R): Promise<T> => {
		const response = await axiosInstance.post<T>(endpoint, payload);
		return response.data;
	},

	patch: async <R, T>(endpoint: string, payload: R): Promise<T> => {
		const response = await axiosInstance.patch<T>(endpoint, payload);
		return response.data;
	},

	delete: async <T>(endpoint: string): Promise<T> => {
		const response = await axiosInstance.delete<T>(endpoint);
		return response.data;
	},
};
