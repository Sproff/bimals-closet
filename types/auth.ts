export type IFormLoginInput = {
	email: string;
	password?: string;
};

export type IFormRegisterInput = {
	email: string;
	password: string;
	fullName: string;
	phoneNumber: number;
};
