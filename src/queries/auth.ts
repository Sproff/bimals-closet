import instance from "./axios.config";

export const axiosPost = async (path: string, body: unknown) => {
	const { data } = await instance.post(path, body);

	return data;
};

export const axiosGet = async (path: string) => {
	const { data } = await instance.get(path);

	return data;
};
