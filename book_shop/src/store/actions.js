// actions.js
import axios from "axios";

// For Show All Books in Products
export const getBooks = ({ commit }) => {
  axios.get("http://10.0.10.211:3300/api/showbooks")
    .then((response) => {
      commit("SET_BOOKS", response.data);
    });
};

// For Show Single Book Details
export const getBook = ({ commit }, bookId) => {
  axios.get(`http://10.0.10.211:3300/api/showbooks/${bookId}`)
    .then((response) => {
      commit("SET_BOOK", response.data);
    });
};

// For Sign up
export const signup = async ({ commit }, userData) => {
  try {
    const response = await axios.post("http://10.0.10.211:3300/api/register", userData);

    const user = response.data;

    commit("setUser", user); // Ensure the mutation name matches

    return user;
  } catch (error) {
    throw error;
  }
};

// For Login
export const login = async ({ commit }, { email, password }) => {
  try {
    const response = await axios.post("http://10.0.10.211:3300/api/login", {
      email,
      password,
    });

    const token = response.data.token;
    commit("SET_TOKEN", token); // Set the user's token in the state
    // Save the token to local storage for persistent login
    localStorage.setItem("token", token);

    return token;
  } catch (error) {
    throw error;
  }
};

// For Logout
export const logout = ({ commit }) => {
  // Clear the user's token and remove it from local storage
  commit("CLEAR_TOKEN");
  localStorage.removeItem("token");
};
