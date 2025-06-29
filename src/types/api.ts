// define the success response type for the API
export interface ApiSuccessResponse<T> {
	success: boolean;
	message: string;
	data: T;
}
export interface ApiErrorResponse {
	error: boolean;
	message: string;
}
