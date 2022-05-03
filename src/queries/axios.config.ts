import axios from "axios";

const instance = axios.create({
	baseURL: "http://localhost:9000",
	// baseURL: "https://bimals-closet-api.herokuapp.com",
	headers: {},
});

export default instance;
