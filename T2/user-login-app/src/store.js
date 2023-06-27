import { createStore } from 'redux';

// Define the initial state
const initialState = {
  loggedIn: false,
  user: null
};

// Create a reducer function
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        loggedIn: true,
        user: action.payload
      };
    case 'LOGOUT':
      return {
        loggedIn: false,
        user: null
      };
    default:
      return state;
  }
};

// Create the Redux store
const store = createStore(rootReducer);

export default store;
