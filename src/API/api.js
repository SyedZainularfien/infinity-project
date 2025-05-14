import axios from "axios";

// Set the base URL based on environment
const baseURL =
  import.meta.env.MODE === "development"
    ? import.meta.env.VITE_BASE_API_URL
    : import.meta.env.VITE_BASE_API_URL;

export const API = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
});

export const callApi = async (url, method = "get", payload) => {
  try {
    const resp = await API({
      url,
      method,
      data: payload,
    });
    return resp;
  } catch (error) {
    // Handle error here or throw an exception
    console.error("API call error:", error);
    throw error;
  }
};
