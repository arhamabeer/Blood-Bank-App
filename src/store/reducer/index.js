// import {SEND_DATA} from '../action/index'

const INITIAL_STATE = {
  users: [],
};

export default (state = INITIAL_STATE, action) => {
  // console.log("PAYLOAD>> ", action.payload);

  switch (action.type) {
    case "SET_STATE_NULL":
      return {
        users: action.payload,
      };
    case "GET_FB_DATA":
      return {
        ...state,
        users: [...state.users, action.payload],
      };
  }

  return state;
};
