import axios from "axios";
const service = axios.create({
  // baseURL: "process.env.VUE_APP_BASE_API",
  baseURL: import.meta.env.VITE_HOST_URL,
  timeout: 5000,
});

export default service;


// https://www.cnblogs.com/Nyan-Workflow-FC/p/16312863.html