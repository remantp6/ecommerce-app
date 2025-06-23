import axios from 'axios';
import ERROR_MESSAGES from '../config/customError';
import toast from 'react-hot-toast';

// Create an Axios instance with a base URL and default headers
const axiosInstance = axios.create({
	baseURL: import.meta.env.VITE_API_BASE_URL,
	headers: {
		'Content-Type': 'application/json',
	},
});

export default axiosInstance;

// centralized error handling for all API requests
// This interceptor will catch errors from all requests made with this axios instance
axiosInstance.interceptors.response.use(
	(response) => response,
	(error) => {
		let message = ERROR_MESSAGES.GENERIC_ERROR;

		if (error.response) {
			const { status, data } = error.response;

			// Attempt to use a custom error message from the server
			if (data && data.message) {
				message = data.message;
			} else {
				// Fallback to predefined error messages
				message = ERROR_MESSAGES[status] || ERROR_MESSAGES.GENERIC_ERROR;
			}

			// Handle 401 Unauthorized
			if (status === 401) {
				//Router.push('/login'); // Redirect to the login page
			}
		} else {
			// Handle network errors
			message = ERROR_MESSAGES.NETWORK_ERROR;
		}

		// add toast
		toast.error(message); // Display the error message as a toast notification

		return Promise.reject(new Error(message)); // Reject the promise with the error message
	},
);
