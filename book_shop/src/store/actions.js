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

    commit("SET_USER", user);
    return user;
  } catch (error) {
    throw error;
  }
};

// For Login
export const userLogin = async ({ commit }, loginData) => {
  try {
    const response = await axios.post('http://10.0.10.211:3300/api/login', loginData);

    const userData = response.data.user_id;
    const token = response.data.access_token;

    // Store user data and token in localStorage
    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('token', token);

    // Commit user data and token to mutations
    commit('USER_LOGIN', userData);
    commit('USER_TOKEN', token);
  } catch (error) {
    throw error;
  }
};

// add an item to the cart
export const addToCart = ({ commit }, cartItem) => {
  commit("ADD_TO_CART", cartItem);
};