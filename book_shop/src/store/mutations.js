// For Show All Books in Products
export const SET_BOOKS = (state, books) => {
  state.books = books;
}

// For Show Single Book Details
export const SET_BOOK = (state, book) => {
  state.book = book;
}

// For Sign Up
export const SET_USER = (state, user) => {
  state.user = user;
}

// For Login
export const USER_LOGIN = (state, userData) => {
  state.user = userData;
};

export const USER_TOKEN = (state, token) => {
  state.token = token;
};

// add an item to the cart
export const ADD_TO_CART = (state, cartItem) => {
  state.cart.push(cartItem);
};