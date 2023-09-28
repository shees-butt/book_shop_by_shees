// mutations.js
// For Show All Books in Products
export const SET_BOOKS = (state, books) => {
    state.books = books;
  }
  
  // For Show Single Book Details
  export const SET_BOOK = (state, book) => {
    state.book = book;
  }
  
  // For Sign Up
  export const setUser = (state, user) => {
    state.user = user;
  }

// For setting the user's token
export const SET_TOKEN = (state, token) => {
    state.token = token;
  };
  
  // For clearing the user's token (logout)
  export const CLEAR_TOKEN = (state) => {
    state.token = null;
  };