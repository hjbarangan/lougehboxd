import axios from "axios";
// const token = "fakeExampleToken";

export default axios.create({
  baseURL: "http://localhost:3000/" || import.meta.env.BASE_URL, //API in Server
  headers: {
    "Content-type": "application/json",
    // Authorization: `Bearer ${token}`,
  },
});