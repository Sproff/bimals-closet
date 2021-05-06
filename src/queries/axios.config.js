import axios from "axios"

const instance = axios.create({
  baseURL: "https://bimals-closet-api.herokuapp.com",
  headers: {}
});

export default instance