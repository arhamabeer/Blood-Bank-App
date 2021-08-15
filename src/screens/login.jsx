import React, { useState, useEffect } from "react";
import "./screen.css";
import EmailWithIcon from "../components/input-email";
import InputAdornments from "../components/password";
import SignInBtn from "../components/signInBtn";

import { connect } from "react-redux";
import action from "../store/action";
// import { getFBUsers } from "../store/action";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loaded, setLoaded] = useState(true);

  console.log("fname >> ", props.users);

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
        <SignInBtn  click={props.getFBUsers} />
        {/* <input className='input-login' type="text" placeholder='enter email' />
        <input className='input-login' type="password" placeholder='enter password' /> */}
      </form>
      <a href="#">Don't have an account? Sign Up here</a>
    </div>
  );
}

const mapStateToProps = (state) => ({
  users: state.users,
  
});

// const mapDispatchToProps = (dispatch) => ({
//   getFBUsers: () => dispatch(getFBUsers()),
// });

const mapDispatchToProps = {
  getFBUsers: action.getFBUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
