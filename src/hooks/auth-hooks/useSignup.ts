import { useMutation } from '@tanstack/react-query';
import { ApiSuccessResponse } from '../../types/api';
import { SignupPayload, SignupResponse } from '../../types/auth';
import { apiClient } from '../../api/apiClient';

// Custom hook for user signup
export function useSignup() {
	return useMutation<ApiSuccessResponse<SignupResponse>, Error, SignupPayload>({
		mutationFn: (payload) => apiClient.post<ApiSuccessResponse<SignupResponse>>('/signup', payload),
	});
}
