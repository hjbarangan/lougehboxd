import axios from "axios";
import.meta.env.VITE_BASE_URL
const token = "fakeExampleToken";

export default axios.create({
  baseURL: import.meta.env.BASE_URL, //API in Server
  headers: {
    "Content-type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});