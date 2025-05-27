import axiosInstance from '../api/axiosInstance';
import ERROR_MESSAGES from '../config/customError';

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

		return Promise.reject(new Error(message)); // Reject the promise with the error message
	},
);
