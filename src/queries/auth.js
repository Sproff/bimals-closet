import instance from "./axios.config"

export const login = async (body) => {
  const { data } = await instance.post("/user/login", body);
  
  return data;
};

export const signup = async (body) => {
  const { data } = await instance.post("/user/sign-up", body);
  
  return data;
};
