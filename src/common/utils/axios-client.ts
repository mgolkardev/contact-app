import axios from "axios";

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_CONTACTS_API_BASE_URL,
});

export { axiosClient };
