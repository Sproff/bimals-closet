import axios from "axios";

const instance = axios.create({
	baseURL: "https://bimals-closet-api.onrender.com",
	headers: {},
});

export default instance;
