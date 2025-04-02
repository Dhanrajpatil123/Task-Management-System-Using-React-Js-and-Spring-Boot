import axios from "axios";

// call backend api
const REST_API_BASE_URL = "http://localhost:8080/tasks";

export const getTask = () => axios.get(REST_API_BASE_URL);

export const deleteTask = (id) => axios.delete(`${REST_API_BASE_URL}/${id}`);

export const addTask = (task) => axios.post(REST_API_BASE_URL, task);

export const updateTask = (id, task) => axios.put(`${REST_API_BASE_URL}/${id}`, task);
 
export const getTaskById = (id) => axios.get(`${REST_API_BASE_URL}/${id}`);