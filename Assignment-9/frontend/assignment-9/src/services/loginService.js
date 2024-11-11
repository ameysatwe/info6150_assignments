import axios from "axios";

const loginService = axios.create({
  baseURL: "http://localhost:3000/user",
});

export default loginService;
