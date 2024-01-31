import axios from "axios";

export default axios.create({
  baseURL: "http://cloud-eshop.com:3000",
  headers: {
    "Content-type": "application/json"
  }
});