import Swal from "sweetalert2";

const action = {};

action.logout = (history) => {
  return (dispatch) => {
    localStorage.clear();
    history.push("/login");
  };
};

action.getMongoUsers = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("_tkn_bld_bank_user_credential");
    // console.log('token=>',token)
    await fetch("/getdata", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Mongo res=>", data);
        dispatch({
          type: "GET_MONGO_DATA",
          payload: data.data,
        });
      })
      .catch((err) => {
        console.log("Mongo err=>", err);
      });
  };
};

action.login = (email, password, history) => {
  return async (dispatch) => {
    // console.log(email,password);
    Swal.fire({
      title: "Logging In...",
      backdrop: "rgba(201, 75, 108, 0.3) left top no-repeat",
      background: "black",
      position: "center",
      showConfirmButton: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });
    await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((data) => {
        if (data.status === 404) {
          console.log("error=>", data);
          throw "User not Found.";
        } else if (data.status === 401) {
          console.log("error=>", data);
          throw "Wrong Credentials.";
        } else {
          // console.log("success=>", data);
        }
        return data.json();
      })
      .then((data) => {
        console.log("res=>", data.token);
        localStorage.setItem("_tkn_bld_bank_user_credential", data.token);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Successfully Logged In",
          showConfirmButton: false,
          timer: 1500,
          background: "black",
          backdrop: "rgba(201, 75, 108, 0.3) left top no-repeat",
        });
        history.push("/Home");
      })
      .catch((err) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: err,
          showConfirmButton: true,
          background: "black",
          backdrop: "rgba(201, 75, 108, 0.3) left top no-repeat",
        });
      });
  };
};
action.addUser = (
  fname,
  wanted,
  age,
  gender,
  bloodGroup,
  city,
  address,
  email,
  password,
  hist,
  setDisableBtn,
  rePassword
) => {
  return async (dispatch) => {
    setDisableBtn(true);
    if (
      fname === "" ||
      wanted === "" ||
      age === "" ||
      gender === "" ||
      bloodGroup === "" ||
      city === "" ||
      address === "" ||
      email === "" ||
      password === ""
    ) {
      setDisableBtn(false);

      Swal.fire({
        position: "center",
        icon: "warning",
        title: "Please fill all the fields",
        showConfirmButton: true,
        background: "black",
        backdrop: "rgba(201, 75, 108, 0.3) left top no-repeat",
      });
    } else if (rePassword !== password) {
      setDisableBtn(false);
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Passwords do not match",
        showConfirmButton: true,
        background: "black",
        backdrop: "rgba(201, 75, 108, 0.3) left top no-repeat",
      });
    } else {
      Swal.fire({
        title: "Registering...",
        backdrop: "rgba(201, 75, 108, 0.3) left top no-repeat",
        background: "black",
        position: "center",
        showConfirmButton: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });
      await fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          fname,
          age,
          address,
          city,
          gender,
          bloodGroup,
          wanted,
        }),
      })
        .then((data) => {
          if (data.status === 403) {
            console.log("error=>", data);
            throw "User already Registered.";
          } else if (data.status === 400) {
            console.log("error=>", data);
            throw "Can't register user.";
          } else {
            console.log("success=>", data);
          }
          return data.json();
        })
        .then(async (data) => {
          console.log("res=>", data);
          await Swal.fire({
            title: "Registered Successfully!",
            icon: "success",
            showCancelButton: false,
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Proceed",
            background: "black",
            backdrop: "rgba(201, 75, 108, 0.3) left top no-repeat",
          }).then(async (result) => {
            await Swal.fire({
              title: "Redirecting to Login Page...",
              backdrop: "rgba(201, 75, 108, 0.3) left top no-repeat",
              background: "black",
              timer: 1000,
              position: "center",
              showConfirmButton: false,
              didOpen: () => {
                Swal.showLoading();
              },
            });
          });
          hist.push("/login");
        })
        .catch((err) => {
          Swal.fire({
            position: "center",
            icon: "warning",
            title: err,
            showConfirmButton: true,
            background: "black",
            backdrop: "rgba(201, 75, 108, 0.3) left top no-repeat",
          });
          setDisableBtn(false);
        });
    }
  };
};

// action.getFBUsers = function () {
//   return (dispatch) => {
//     let payload = [];
//     dispatch({
//       type: "SET_STATE_NULL",
//       payload: [],
//     });
//     firebase
//       .database()
//       .ref("/users")
//       .on("child_added", (data) => {
//         // console.log(data.val());
//         // payload.push(data.val());

//         dispatch({
//           type: "GET_FB_DATA",
//           payload: data.val(),
//         });
//       });
//   };

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
// };

export default action;
