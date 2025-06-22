import { useMutation } from '@tanstack/react-query';
import { ApiSuccessResponse } from '../../types/api';
import { SignInPayloadTypes, SignInResponseTypes } from '../../types/auth';
import { apiClient } from '../../api/apiClient';

// Custom hook for user signup
export function useLogin() {
	return useMutation<ApiSuccessResponse<SignInResponseTypes>, Error, SignInPayloadTypes>({
		mutationFn: (payload) =>
			apiClient.post<SignInPayloadTypes, ApiSuccessResponse<SignInResponseTypes>>('/login', payload),
	});
}
