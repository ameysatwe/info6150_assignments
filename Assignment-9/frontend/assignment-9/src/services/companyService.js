import axios from "axios";

const companyService = axios.create({
  baseURL: "http://localhost:3000/company",
});

export default companyService;
