const ACCESS_TOKEN_KEY = 'accessToken';
const REFRESH_TOKEN_KEY = 'refreshToken';

// utility functions to manage session tokens in sessionStorage
export const setSessionTokens = (accessToken: string, refreshToken: string) => {
	sessionStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
	sessionStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
};

export const getSessionTokens = () => {
	const accessToken = sessionStorage.getItem(ACCESS_TOKEN_KEY);
	const refreshToken = sessionStorage.getItem(REFRESH_TOKEN_KEY);
	return { accessToken, refreshToken };
};

export const clearSessionTokens = () => {
	sessionStorage.removeItem(ACCESS_TOKEN_KEY);
	sessionStorage.removeItem(REFRESH_TOKEN_KEY);
};
