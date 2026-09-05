import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

async function apiRequest(endpoint, options = {}) {
  try {
    const response = await axios({
      url: `${API_URL}${endpoint}`,
      ...options,
    });

    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Something went wrong with the request.",
    );
  }
}

export default apiRequest;
