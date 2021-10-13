// import {SEND_DATA} from '../action/index'

const INITIAL_STATE = {
  users: [],
  musers: [],
  data_blank: {
    fname: "",
    wanted: "",
    age: "",
    gender: "",
    bloodGroup: "",
    city: "",
    address: "",
    email: "",
    password: "",
  },
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
    case "GET_MONGO_DATA":
      return {
        ...state,
        musers: action.payload,
      };
    case "BLANK":
      return {
        ...state,
        data_blank: action.payload,
      };
  }

  return state;
};
