import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });


export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);
export const forgotPassword = (formData) => API.post("/user/forgotPassword", formData);
export const resetPassword = (resettoken, formData) => API.put(`/user/resetpassword/${resettoken}`, formData);
export const verifyEmail = (id, token) =>  API.get(`/user/verify/${id}/${token}`);