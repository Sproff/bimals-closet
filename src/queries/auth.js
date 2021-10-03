import instance from "./axios.config"

export const login = async (body) => {
  const { data } = await instance.post("/user/login", body);
  
  return data;
};

export const signup = async (body) => {
  const { data } = await instance.post("/user/sign-up", body);
  
  return data;
};

export const createOrder = async (body) => {
  const { data } = await instance.post("/order", body);
  
  return data;
};

export const getMyOrders = async (body) => {
  const { data } = await instance.get("/order", body);
  
  return data;
};
