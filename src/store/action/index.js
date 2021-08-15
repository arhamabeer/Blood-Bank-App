import Firebase from "../../config/firebase";
import firebase from "firebase";

// const addUser = (
//   fname,
//   wanted,
//   age,
//   gender,
//   bloodGroup,
//   city,
//   address,
//   email,
//   password
// ) => {
//   return (dispatch) => {
//     console.log(
//       "get user running...>> ",
//       fname,
//       wanted,
//       age,
//       gender,
//       bloodGroup,
//       city,
//       address,
//       email,
//       password
//     );
//     var key = firebase.database().ref("/").child("users/").push().key;
//     const data = {
//       fname: fname,
//       wanted: wanted,
//       age: age,
//       gender: gender,
//       bloodGroup: bloodGroup,
//       city: city,
//       address: address,
//       email: email,
//       password: password,
//       key: key,
//     };

//     console.log("key>>", data);
//     // firebase.database().ref("/users").child(`/${key}`).set(data);
//   };
// };

// const getFBUsers = () => {
//   return (dispatch) => {
//     firebase
//       .database()
//       .ref("/users")
//       .on("child_added", (data) => {
//         console.log(data.val());

//       });
//       dispatch({
//         type: "abc",
//         payload: 'data.val(),'
//       });
//   };
// };
// export {getFBUsers}

// export const GET_FB_DATA = "GET_FB_DATA";

const action = {};

action.getFBUsers = function () {
  return (dispatch) => {
    let payload = [];
    dispatch({
      type: "SET_STATE_NULL",
      payload: [],
    });
    firebase
      .database()
      .ref("/users")
      .on("child_added", (data) => {
        // console.log(data.val());
        // payload.push(data.val());
        
        dispatch({
          type: "GET_FB_DATA",
          payload: data.val(),
        });
      });
  };

  // let payload = [];
  // firebase
  //   .database()
  //   .ref("/users")
  //   .on("child_added", (data) => {
  //     // console.log(data.val());
  //     payload.push(data.val());
  //     return {
  //       type: GET_FB_DATA,
  //       payload,
  //     };
  //   });

  // return {
  //   type: GET_FB_DATA,
  //   payload,
  // };
  // console.log('paylaod=> ', payload[0].address)
};

export default action;
