export type IFormLoginInput = {
	email?: string;
	password?: string;
	newPassword?: string;
	confirmPassword?: string;
	code?: string;
};

export type IFormRegisterInput = {
	email: string;
	password: string;
	fullName: string;
	phoneNumber: number;
};
