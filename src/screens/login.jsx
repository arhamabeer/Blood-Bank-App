import React, { useState } from "react";
import "./screen.css";
import EmailWithIcon from "../components/input-email";
import InputAdornments from "../components/password";
import SignInBtn from "../components/signInBtn";
import { connect } from "react-redux";
import action from "../store/action";
import { useHistory } from "react-router";
import { AddAlertTwoTone } from "@material-ui/icons";
// import { getFBUsers } from "../store/action";
import Swal from "sweetalert2";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // console.log("fname >> ", props.users);
  const history = useHistory();
  const handleEmailChange = (e) => {
    setEmail(e);
  };
  const handlePasswordChange = (e) => {
    setPassword(e);
  };

  const handleClick = async () => {
    // console.log(email,password);
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
          console.log("success=>", data);
        }
        return data.json();
      })
      .then((data) => {
        console.log("res=>", data);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Successfully Logged In",
          showConfirmButton: false,
          timer: 1500,
          background: "black",
          backdrop: "rgba(201, 75, 108, 0.3) left top no-repeat",
        });
        // history.push("/Home");
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
  return (
    <div className="div-login">
      <form className="form-login" action="">
        <EmailWithIcon
          name="email"
          className="InputWithIcon-login"
          func={handleEmailChange}
        />
        <InputAdornments func={handlePasswordChange} />
        <SignInBtn click={() => props.login(email, password)} />
      </form>
      <a href="#" style={{ color: "wheat" }}>
        Don't have an account? Sign Up here
      </a>
    </div>
  );
}

const mapStateToProps = (state) => ({
  users: state.users,
});

const mapDispatchToProps = (dispatch) => ({
  getFBUsers: () => dispatch(action.getFBUsers()),
  login: (email, password) => dispatch(action.login(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
