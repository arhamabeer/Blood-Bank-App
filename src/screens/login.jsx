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

  return (
    <div className="div-login">
      <form className="form-login" action="">
        <EmailWithIcon
          name="email"
          className="InputWithIcon-login"
          func={handleEmailChange}
        />
        <InputAdornments func={handlePasswordChange} />
        <SignInBtn click={() => props.login(email, password, history)} />
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
  login: (email, password, history) => dispatch(action.login(email, password, history)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
