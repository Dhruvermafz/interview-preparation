import axios from "axios";
const URL = "http://localhost:4000";

export const authenticateSignup = async (data) => {
  try {
    return axios.post(`${URL}/signup`, data);
  } catch (error) {
    console.log("Error while calling sign up api", error);
  }
};

export const authenticateLogin = async (data) => {
  try {
    return await axios.post(`${URL}/login`, data);
  } catch (error) {
    console.log("Error while calling login api", error);
    return error.response;
  }
};
