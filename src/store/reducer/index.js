// import {SEND_DATA} from '../action/index'

const INITIAL_STATE = {
  users: [],
};

export default (state = INITIAL_STATE, action) => {
  console.log("PAYLOAD>> ", action);

  switch (action.type) {
    case "SETSTATETONULL":
      return {
        ...state,
        users: action.payload,
      };
    case "GET_FB_DATA":
      return {
        ...state,
        users: [action.payload],
      };
  }

  return state;
};
