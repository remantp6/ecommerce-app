export interface SignupPayloadTypes {
	email: string;
	name: string;
	password: string;
	phone?: string;
}

export interface SignupResponseTypes {
	data: string;
}

export interface SignInPayloadTypes {
	email: string;
	password: string;
}
export interface SignInResponseTypes {
	token: string;
	access_token: string;
}
