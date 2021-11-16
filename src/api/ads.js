import axios from "axios";

export default axios.create({
  baseURL: process.env.REACT_APP_ADS_BASE_URL,
});
