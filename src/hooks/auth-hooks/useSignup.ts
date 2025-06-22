import { useMutation } from '@tanstack/react-query';
import { ApiSuccessResponse } from '../../types/api';
import { SignupPayloadTypes, SignupResponseTypes } from '../../types/auth';
import { apiClient } from '../../api/apiClient';

// Custom hook for user signup
export function useSignup() {
	return useMutation<ApiSuccessResponse<SignupResponseTypes>, Error, SignupPayloadTypes>({
		mutationFn: (payload) =>
			apiClient.post<SignupPayloadTypes, ApiSuccessResponse<SignupResponseTypes>>('/signup', {
				...payload,
				phone: '9809859167',
			}),
	});
}
